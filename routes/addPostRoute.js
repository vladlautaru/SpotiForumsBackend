const express = require('express');
const addPostController = require('../controllers/addPostController');

const router = express.Router();

router.get('/addpost', addPostController.addPost);

module.exports = router;