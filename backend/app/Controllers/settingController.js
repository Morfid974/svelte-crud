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

const deleteTable = async (req, res) => {
    await userControl(req, res)
    await pool.query(`DROP TABLE IF EXISTS ${req.params.name};`)
    const {
        rows
    } = await pool.query('DELETE FROM tablelist WHERE _id = $1;', [req.params.id]);
    res.json(rows);
};

module.exports = {
    getTables,
    postTable,
    deleteTable
};