const express = require('express');
const hanldebars = require('express-handlebars');
const morgan = require('morgan');
const path = require('path');
const route = require('./route/index.route');

const app = express();
const port = 3000;
//#region set up app
app.use(express.static(path.join(__dirname, 'public')));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(morgan('combined'));
app.engine('handlebars', hanldebars());
app.set("view engine", 'handlebars');
app.set('views', path.join(__dirname, 'resources/views'));
//#endregion
route(app);

app.listen(port, () => {
    console.log(`Example app listening at http://localhost:${port}`);
});