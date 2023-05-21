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

const postData = async (req, res) => {
    await userControl(req, res)
    console.log(req.body);
    console.log(Object.keys(req.body).join(","));
    const values = Object.values(req.body)
        .map(val => typeof val === "string" ? `'${val}'` : val)
        .join(", ");
    console.log(values)

    const {
        rows
    } = await pool.query(`INSERT INTO ${req.params.name}(${Object.keys(req.body).join(",")}) VALUES(${values});`);
    res.send(rows);
};

const updateData = async (req, res) => {
    await userControl(req, res)
    //TODO: update
    console.log(req.body);
    const {
        rows
    } = await pool.query(`SELECT * FROM ${req.params.name};`);
    res.send(rows);
};
const deleteData = async (req, res) => {
    await userControl(req, res)
    const {
        rows
    } = await pool.query('DELETE FROM $1 WHERE _id = $2;', [req.params.name, req.params.id]);
    res.json(rows);
};
module.exports = {
    getData, postData, updateData, deleteData,
};