
const userController = require('../Controllers/userController')
const { login, identify } = userController

const express = require('express');
const router = express.Router()
router.post('/', login);
router.post('/identify', identify);

module.exports = router