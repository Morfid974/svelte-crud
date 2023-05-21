
const customTableController = require('../Controllers/customTableController')
const { getData, postData, updateData, deleteData } = customTableController

const express = require('express');
const router = express.Router()
router.get('/:name', getData);
router.post('/:name', postData);
router.put('/:name/:id', updateData);
router.delete('/:name/:id', deleteData);

module.exports = router