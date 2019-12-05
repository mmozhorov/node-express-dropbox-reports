const express = require('express');
const bodyParser = require('body-parser');
const log4js = require('log4js');
const errorsLogger = log4js.getLogger("errors");
const app = express();
const jwt = require('../config/jwt');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../config/swagger.json');
require('./authentication/config-passport');

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(jwt());

app.use('/auth', require('./resourses/auth/router'));
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
require("./resourses/reports/newUsers/router")(app);
require("./resourses/reports/topSalaries/router")(app);
require("./resourses/reports/usersWithRewards/router")(app);

module.exports = app;