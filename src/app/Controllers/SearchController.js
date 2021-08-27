class SearchController {
    //[GET] ,search main page
    index(req, res) {
        res.render('search');
    }
}
module.exports = new SearchController;