
const settingController = require('../Controllers/settingController')
const { getTables } = settingController

const express = require('express');
const router = express.Router()
router.get('/tables', getTables);

module.exports = router