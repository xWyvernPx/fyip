const express = require('express');
const ContactController = require('../app/Controllers/contact.controller');


const router = express.Router();


router.get('', ContactController.contact);



module.exports = router;