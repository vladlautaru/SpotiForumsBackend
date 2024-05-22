const express = require('express');
const registerController = require('../controllers/registerController');

const router = express.Router();

router.get('/register', registerController.registerUser);

module.exports = router;