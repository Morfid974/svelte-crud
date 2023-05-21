const db = require('../db')
const { pool } = db
const userController = require('../Controllers/userController')
const { userControl } = userController

const getData = async (req, res) => {
    await userControl(req, res)
    const {
        rows
    } = await pool.query(`SELECT * FROM ${req.params.name};`);
    res.send(rows);
};
//TODO: create, update, delete
module.exports = {
    getData,
};