
const userController = require('../Controllers/userController')
const { login } = userController

const express = require('express');
const router = express.Router()
router.post('/', login);

module.exports = router