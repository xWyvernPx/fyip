const Blog = require('../Modules/blog.module');
class BlogController {
    //[GET] ,search main page
    index(req, res) {
        Blog.find({}).lean()
            .then(data => {
                res.render('blog', { data });
            })
            .catch(err => console.log(err))


    }

}
module.exports = new BlogController;