const express = require('express');
const route = require('./route/index.route');
const db = require('./config/db');
const setting = require('./app/Setting/app');
var http = require('http');
db.connect();
const app = express();
const port = 2506;
//#region set up app
setting.config({ app, express });
//#endregion
route(app);

app.listen(port, '192.168.1.8');
