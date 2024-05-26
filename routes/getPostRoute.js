const express = require('express');
const getPostController = require('../controllers/getPostController');

const router = express.Router();

router.get('/getposts', getPostController.getPosts);

module.exports = router;