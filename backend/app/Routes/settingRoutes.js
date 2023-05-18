
const settingController = require('../Controllers/settingController')
const { getTables, postTable, deleteTable } = settingController

const express = require('express');
const router = express.Router()
router.get('/tables', getTables);
router.post('/tables', postTable);
router.delete('/tables/:id/:name', deleteTable);

module.exports = router