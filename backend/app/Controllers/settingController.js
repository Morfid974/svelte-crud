const db = require('../db')
const { pool } = db
const userController = require('../Controllers/userController')
const { userControl } = userController

const getTables = async (req, res) => {
    await userControl(req, res)
    const {
        rows
    } = await pool.query('SELECT * FROM tablelist;');
    res.send(rows);
};

const postTable = async (req, res) => {
    await userControl(req, res)
    const {
        tablename
    } = req.body;
    await pool.query(`CREATE TABLE IF NOT EXISTS ${tablename}(_id SERIAL PRIMARY KEY);`)
    const {
        rows
    } = await pool.query('INSERT INTO tablelist(tablename, is_technical) VALUES($1, FALSE);', [tablename]);
    res.json(rows);
};

module.exports = {
    getTables,
    postTable
};