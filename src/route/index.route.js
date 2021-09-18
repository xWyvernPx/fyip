const searchRoute = require("./search.route");
const blogRoute = require("./blog.route");
const podcastRoute = require("./podcast.route");

const route = (app) => {
    // app.get('/search', (req, res) => {
    //         res.render('search');
    //         console.log(req.query);
    //     });
    app.use('/search', searchRoute);
    app.use('/blogs', blogRoute);
    app.use('/podcast', podcastRoute);

    app.get('/about', (req, res) => {
        res.render('blog/about');
    })
    app.get('/', (req, res) => {

        res.render('main');
    });


}
module.exports = route;