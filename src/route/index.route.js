const searchRoute = require("./search.route");
const blogRoute = require("./blog.route");

const route = (app) => {
    // app.get('/search', (req, res) => {
    //         res.render('search');
    //         console.log(req.query);
    //     });
    app.use('/search', searchRoute);
    app.use('/blogs', blogRoute);

    app.get('/about', (req, res) => {
        res.render('blog/about');
    })
    app.get('/', (req, res) => {

        res.render('main');
    });


}
module.exports = route;