const express = require('express');
const searchController = require('../app/Controllers/SearchController');

const router = express.Router();

router.get('/data', searchController.testGetDate);
router.post('/', searchController.testPost);
router.get('/', searchController.index);


module.exports = router;