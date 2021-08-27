const express = require('express');
const searchController = require('../app/Controllers/SearchController');

const router = express.Router();

router.use('/', searchController.index);


module.exports = router;