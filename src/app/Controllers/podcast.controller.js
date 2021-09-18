const { findById } = require('../Modules/blog.module');
const Blog = require('../Modules/blog.module');
class BlogController {
    //[GET] ,search main page
    index(req, res) {
        res.render('podcast/podcast');

    }

}
module.exports = new BlogController;