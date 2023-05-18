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

module.exports = {
    getTables
};