const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config');

const app = express();

app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

require("./routes/index").getNewUsers(app);



module.exports = app;