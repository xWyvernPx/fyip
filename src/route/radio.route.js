const express = require('express');
const radioController = require('../app/Controllers/radio.controller');
const route = require('./index.route');

const router = express.Router();


router.get('/1', radioController.radio1);
router.get('/2', radioController.radio2);


module.exports = router;