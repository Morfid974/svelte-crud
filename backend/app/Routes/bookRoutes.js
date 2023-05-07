
const bookController = require('../Controllers/bookController')
const { getBooks,
    getBookById,
    postBook,
    updateBook,
    deleteBook } = bookController

const express = require('express');
const router = express.Router()
router.get('/', getBooks);
router.get('/:id', getBookById);
router.post('/', postBook);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router