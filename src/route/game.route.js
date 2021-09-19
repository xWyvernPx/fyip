const express = require('express');
const GameController = require('../app/Controllers/game.controller');
const route = require('./index.route');

const router = express.Router();


router.get('/1', GameController.game1);
router.get('/2', GameController.game2);


module.exports = router;