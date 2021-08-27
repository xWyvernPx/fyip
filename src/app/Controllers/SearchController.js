const Search = require('../Modules/search.module');
class SearchController {
    //[GET] ,search main page
    index(req, res) {
        res.render('search');
    }
    testPost(req, res) {
        console.log(req.body);
        res.render('test',
            {
                person: req.body
            });
    }
    testGetDate(req, res) {
        Search.find({}, (error, data) => {
            if (!error) res.json(data);
            else res.status(400).json({ error: "loi roi " });
        });

    }
}
module.exports = new SearchController;