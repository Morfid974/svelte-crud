
const settingController = require('../Controllers/settingController')
const { getTables, postTable } = settingController

const express = require('express');
const router = express.Router()
router.get('/tables', getTables);
router.post('/tables', postTable);

module.exports = router