
class RadioController {
    //[GET] ,search main page
    radio1(req, res) {
        res.render('radio/radio1');

    }
    radio2(req, res) {
        res.render('radio/radio2');

    }

}
module.exports = new RadioController;