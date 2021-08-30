const { findById } = require('../Modules/blog.module');
const Blog = require('../Modules/blog.module');
class BlogController {
    //[GET] ,search main page
    index(req, res) {
        Blog.find({}).lean()
            .then(data => {
                res.render('blog/blog', { data });
            })
            .catch(err => console.log(err))


    }
    createPage(req, res) {
        res.render('blog/create');
    }
    createBlog(req, res) {
        Blog.create(req.body);
        res.redirect('/blogs');
    }
    renderDetail(req, res) {
        Blog.findById(req.params.id, (err, data) => {
            if (!err) res.render('blog/detail', data);
        })

    }
    deleteBlog(req, res) {
        Blog.findByIdAndDelete(req.params.id, (err, doc) => {
            res.redirect('/blogs');
        })
    }
    editBlog(req, res) {
        console.log(req.params.id);
        console.log(req.body);

        res.redirect('/blogs');
    }

    renderEditBlog(req, res) {
        Blog.findById(req.params.id, (err, data) => {

            res.render('blog/edit', { data });
        })
    }
}
module.exports = new BlogController;