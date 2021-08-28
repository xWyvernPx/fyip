
const rootPath = "C:\\Users\\phong\\Documents\\VS Code\\Projects\\Node Express\\first\\src";

const hanldebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const config = (paras) => {
    const { app, express } = paras;
    app.use(express.static(path.join([rootPath, "\\public"].join(''))));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(morgan('combined'));
    app.engine('handlebars', hanldebars());
    app.set("view engine", 'handlebars');
    app.set('views', [rootPath, "\\resources\\views"].join(''));
    // path.join(__dirname, 'resources/views')
}

module.exports = {
    config
};