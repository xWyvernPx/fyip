const express = require('express');
const route = require('./route/index.route');
const db = require('./config/db');
const setting = require('./app/Setting/app');
db.connect();
const app = express();
const port = 3000;
//#region set up app
setting.config({ app, express });
//#endregion
route(app);

app.listen(port, () => {
    console.log(`App listening at http://localhost:${port}`);
});
