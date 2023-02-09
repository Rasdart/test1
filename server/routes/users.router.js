const express = require('express');
const router = express.Router();
const { userLogin } = require('../controllers/user.controller');

router.get('/login', userLogin);

module.exports = router;