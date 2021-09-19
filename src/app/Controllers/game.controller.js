
class GameController {
    //[GET] ,search main page
    game1(req, res) {
        res.render('game/game1');

    }
    game2(req, res) {
        res.render('game/game2');

    }

}
module.exports = new GameController;