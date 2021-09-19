
const searchRoute = require("./search.route");
const blogRoute = require("./blog.route");
const podcastRoute = require("./podcast.route");
const radioRoute = require("./radio.route");
const gameRoute = require("./game.route");
const contactRoute = require("./contact.route");
const route = (app) => {
    // app.get('/search', (req, res) => {
    //         res.render('search');
    //         console.log(req.query);
    //     });
    app.use('/search', searchRoute);
    app.use('/blogs', blogRoute);
    app.use('/podcast', podcastRoute);
    app.use('/radio', radioRoute);
    app.use('/game', gameRoute);
    app.use('/contact', (req, res) => {
        res.render('contact/contact');
    });
    app.get('/about', (req, res) => {
        res.render('blog/about');
    });
    app.get('/', (req, res) => {

        res.render('main');
    });


}
module.exports = route;