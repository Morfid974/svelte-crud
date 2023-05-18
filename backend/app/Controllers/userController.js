const bcrypt = require("bcrypt");

const db = require('../db')
const { pool } = db

const jwt = require("jsonwebtoken");
const { TokenExpiredError } = jwt;

const login = async (req, res) => {
    const { login, password } = req.body;
    try {
        const data = await pool.query(`SELECT * FROM softwareuser WHERE login= $1;`, [login])
        const user = data.rows;
        if (user.length === 0) {
            res.status(400).json({
                error: "User is not registered",
            });
        }
        else {
            bcrypt.compare(password, user[0].password, (err, result) => {
                if (err) {
                    res.status(500).json({
                        error: "Server error",
                    });
                } else if (result === true) {
                    const token = jwt.sign(
                        {
                            login: login,
                        },
                        process.env.SECRET_KEY,
                        { expiresIn: process.env.ACCESS_TOKEN_VALIDITY_MINUTES + "m" }
                    );
                    const refreshToken = jwt.sign(
                        {
                            login: login,
                        },
                        process.env.REFRESH_KEY,
                        { expiresIn: process.env.REFRESH_TOKEN_VALIDITY_DAYS + "d" }
                    );
                    res.cookie("access_token", token, {
                        httpOnly: true,
                        secure: true,
                    }).cookie("refresh_token", refreshToken, {
                        httpOnly: true,
                        secure: true,
                    }).status(200).send(
                        userInformation(user[0])
                    );
                }
                else {
                    if (result != true) {
                        res.status(401).json({
                            error: "Wrong password!",
                        });
                    }
                }
            })
        }
    } catch (err) {
        console.log(err);
        res.status(500).json({
            error: "Database error occurred while signing in",
        });
    };
};

const userInformation = (user) => {
    return {
        'login': user.login,
        'name': user.name
    }
}

const catchError = (err, res, req) => {
    if (err instanceof TokenExpiredError) {
        return refreshToken(req, res)
    }
    return res.status(401).send({ message: "Unauthorized!" });
}

const refreshToken = async (req, res) => {
    jwt.verify(req.cookies['refresh_token'], process.env.REFRESH_KEY, async (err, claims) => {
        if (err) {
            return res.status(401).json({
                error: "Refresh token expired!",
            });
        }
        if (await tokenNotInBlackList(req.cookies['refresh_token'])) {
            const login = claims.login
            const data = await pool.query(`SELECT * FROM softwareuser WHERE login= $1;`, [login])
            const user = data.rows;
            if (user.length === 0) {
                return res.status(401).json({
                    error: "User is not existing anymore",
                });
            }
            const token = jwt.sign(
                {
                    login: login,
                },
                process.env.SECRET_KEY,
                { expiresIn: process.env.ACCESS_TOKEN_VALIDITY_MINUTES + "m" }
            );
            res.cookie("access_token", token, {
                httpOnly: true,
                secure: true,
            }).status(200).send(userInformation(user[0]))
        } else { res.status(401).send({ message: "Token blacklisted!" }) }
    })
}

const tokenNotInBlackList = async (token) => {
    const data = await pool.query(`SELECT * FROM blacklistedtoken WHERE token = $1;`, [token])
    const blacklist = data.rows;
    if (blacklist.length == 0) {
        return true
    } else {
        return false
    }
}

const logout = async (req, res) => {
    const access_token = req.cookies['access_token']
    const refresh_token = req.cookies['refresh_token']
    await pool.query(`INSERT INTO blacklistedtoken(token) VALUES ($1),($2);`, [access_token, refresh_token])
    res.status(200).send({ message: "Successfully logout!" })
}

const identify = async (req, res) => {
    const access_token = req.cookies['access_token']
    const refresh_token = req.cookies['refresh_token']
    if (!access_token || !refresh_token) {
        return res.status(403).send({ message: "No token provided!" })
    }
    jwt.verify(access_token, process.env.SECRET_KEY, async (err, claims) => {
        if (err) {
            return catchError(err, res, req);
        }
        if (await tokenNotInBlackList(access_token)) {
            const login = claims.login
            const data = await pool.query(`SELECT name, login FROM softwareuser WHERE login= $1;`, [login])
            const user = data.rows;
            if (user.length === 0) {
                return res.status(401).json({
                    error: "User is not existing anymore",
                });
            } else { res.status(200).send(user[0]) }

        } else {
            res.status(401).send({ message: "Token blacklisted!" })
        }
    })

}

const checkToken = async (req, res) => {
    const access_token = req.cookies['access_token']
    const refresh_token = req.cookies['refresh_token']
    if (!access_token || !refresh_token) {
        return res.status(403).send({ message: "No token provided!" })
    }
    jwt.verify(access_token, process.env.SECRET_KEY, async (err, claims) => {
        if (err) {
            jwt.verify(req.cookies['refresh_token'], process.env.REFRESH_KEY, async (err, claims) => {
                if (err) {
                    return res.status(401).json({
                        error: "Refresh token expired!",
                    });
                }
                if (await tokenNotInBlackList(req.cookies['refresh_token'])) {
                    const login = claims.login
                    const data = await pool.query(`SELECT * FROM softwareuser WHERE login= $1;`, [login])
                    const user = data.rows;
                    if (user.length === 0) {
                        return res.status(401).json({
                            error: "User is not existing anymore",
                        });
                    }
                    const token = jwt.sign(
                        {
                            login: login,
                        },
                        process.env.SECRET_KEY,
                        { expiresIn: process.env.ACCESS_TOKEN_VALIDITY_MINUTES + "m" }
                    );
                    res.cookie("access_token", token, {
                        httpOnly: true,
                        secure: true,
                    })
                    return true
                } else { res.status(401).send({ message: "Token blacklisted!" }) }
            })
        }
        if (await tokenNotInBlackList(access_token)) {
            const login = claims.login
            const data = await pool.query(`SELECT name, login FROM softwareuser WHERE login= $1;`, [login])
            const user = data.rows;
            if (user.length === 0) {
                return res.status(401).json({
                    error: "User is not existing anymore",
                });
            } else {
                req.user = user
                return true
            }

        } else {
            res.status(401).send({ message: "Token blacklisted!" })
        }
    })
}

const checkRight = async (req, res) => {
    //TODO: Create & check right
    return true
}

const userControl = async (req, res) => {
    if (await checkToken(req, res) && await checkRight(req, res)) { next() }


}

module.exports = {
    login,
    identify,
    logout,
    userControl
};