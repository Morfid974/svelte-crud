
const customTableController = require('../Controllers/customTableController')
const { getData, } = customTableController

const express = require('express');
const router = express.Router()
router.get('/:name', getData);

module.exports = router