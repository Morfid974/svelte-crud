const db = require('../db')
const { pool } = db
const userController = require('../Controllers/userController')
const { userControl } = userController

const getBooks = async (req, res) => {
    await userControl(req, res)
    const {
        rows
    } = await pool.query('SELECT * FROM books;');
    res.send(rows);
};

const getBookById = async (req, res) => {
    await userControl(req, res)
    const {
        rows
    } = await pool.query('SELECT * FROM books WHERE _id = $1;', [req.params.id]);
    res.send(rows[0]);
};

const postBook = async (req, res) => {
    await userControl(req, res)
    const {
        title,
        author,
        description
    } = req.body;
    const {
        rows
    } = await pool.query('INSERT INTO books(title, author, description) VALUES($1, $2, $3);', [title, author, description]);
    res.json(rows);
};

const updateBook = async (req, res) => {
    await userControl(req, res)
    const {
        title,
        author,
        description
    } = req.body;
    const {
        rows
    } = await pool.query('UPDATE books SET title = $1, author = $2, description = $3 WHERE _id = $4;', [title, author, description, req.params.id]);
    res.json(rows);
};

const deleteBook = async (req, res) => {
    await userControl(req, res)
    const {
        rows
    } = await pool.query('DELETE FROM books WHERE _id = $1;', [req.params.id]);
    res.json(rows);
};

module.exports = {
    getBooks,
    getBookById,
    postBook,
    updateBook,
    deleteBook
};