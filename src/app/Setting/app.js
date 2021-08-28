const hanldebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const config = (paras) => {
    const { app, express } = paras;
    app.use(express.static(path.join(__dirname, 'public')));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan('combined'));
    app.engine('handlebars', hanldebars());
    app.set("view engine", 'handlebars');
    app.set('views', path.join(__dirname, 'resources/views'));
}

module.exports = {
    config
};