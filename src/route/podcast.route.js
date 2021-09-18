const express = require('express');
const podcastController = require('../app/Controllers/podcast.controller');
const route = require('./index.route');

const router = express.Router();


router.get('/', podcastController.index);


module.exports = router;