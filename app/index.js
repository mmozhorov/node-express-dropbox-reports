const express = require('express');
const bodyParser = require('body-parser');
const config = require('../config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



require("./routes/index").getNewUsers(app);
require("./routes/index").getTopOfSalaries(app);
require("./routes/index").getUsersWithReward(app);

module.exports = app;