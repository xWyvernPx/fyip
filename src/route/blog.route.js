const express = require('express');
const blogController = require('../app/Controllers/blog.controller');
const route = require('./index.route');

const router = express.Router();


router.get('/', blogController.index);


module.exports = router;