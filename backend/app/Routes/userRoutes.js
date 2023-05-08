
const userController = require('../Controllers/userController')
const { login, identify, logout } = userController

const express = require('express');
const router = express.Router()
router.post('/', login);
router.post('/identify', identify);
router.post('/logout', logout);

module.exports = router