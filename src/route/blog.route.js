const express = require('express');
const blogController = require('../app/Controllers/blog.controller');
const route = require('./index.route');

const router = express.Router();


router.get('/', blogController.index);
router.get('/create', blogController.createPage);
router.post('/create', blogController.createBlog);
router.get('/:id', blogController.renderDetail);
router.post('/delete/:id', blogController.deleteBlog);
router.get('/edit/:id', blogController.renderEditBlog);
router.post('/edit/:id', blogController.editBlog);

module.exports = router;