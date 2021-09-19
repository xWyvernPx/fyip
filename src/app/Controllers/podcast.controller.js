
class PodcastController {
    //[GET] ,search main page
    index(req, res) {
        res.render('podcast/podcast');

    }

}
module.exports = new PodcastController;