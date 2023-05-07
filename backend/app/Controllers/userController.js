const bcrypt = require("bcrypt");

const db = require('../db')
const { pool } = db

const jwt = require("jsonwebtoken");

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
                        process.env.SECRET_KEY
                    );
                    res.status(200).json({
                        message: "User signed in!",
                        token: token,
                    });
                    console.log('good')
                }
                else {
                    //Declaring the errors
                    if (result != true) {
                        res.status(400).json({
                            error: "Wrong password!",
                        });
                        console.log('not good')
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

module.exports = {
    login
};