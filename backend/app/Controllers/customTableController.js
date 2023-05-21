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
    const values = Object.values(req.body)
        .map(val => typeof val === "string" ? `'${val}'` : val)
        .join(", ");

    const {
        rows
    } = await pool.query(`INSERT INTO ${req.params.name}(${Object.keys(req.body).join(",")}) VALUES(${values});`);
    res.send(rows);
};

const updateData = async (req, res) => {
    await userControl(req, res)

    let id = req.body._id
    delete req.body._id
    console.log(req.body);
    let update = ''
    Object.keys(req.body)
        .map(key => typeof req.body[key] === "string" ? update += `${key} = '${req.body[key]}', ` : update += `${key} = ${req.body[key]}`)
        .join(", ");
    console.log('update')
    console.log(update)

    const {
        rows
    } = await pool.query(`UPDATE ${req.params.name} SET ${update.slice(0, -2)} WHERE _id = ${id};`);

    res.send(rows);
};
const deleteData = async (req, res) => {
    await userControl(req, res)
    const {
        rows
    } = await pool.query(`DELETE FROM ${req.params.name} WHERE _id = ${req.params.id};`);
    res.json(rows);
};
module.exports = {
    getData, postData, updateData, deleteData,
};