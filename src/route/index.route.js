const searchRoute = require("./search.route");

const route = (app) => {
    // app.get('/search', (req, res) => {
    //         res.render('search');
    //         console.log(req.query);
    //     });
    app.post('/search', (req, res) => {
        console.log(req.body);
        res.render('test',
            {
                person: req.body
            })
    })
    app.use('/search', searchRoute);
    app.get('/', (req, res) => {

        res.render('main');
    });


}
module.exports = route;