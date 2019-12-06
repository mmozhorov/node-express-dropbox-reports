const express = require('express');
const bodyParser = require('body-parser');
const log4js = require('log4js');
const errorsLogger = log4js.getLogger("errors");
const app = express();
const jwt = require('../config/jwt');
const swaggerUi = require('swagger-ui-express');
const swaggerDocument = require('../config/swagger.json');

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));
app.use('/auth', require('./resourses/auth/router'));
app.use(jwt());

app.use('/reports/new-users', require("./resourses/reports/newUsers/router") );
app.use('/reports/top-salaries', require("./resourses/reports/topSalaries/router") );
app.use('/reports/with-reward', require("./resourses/reports/usersWithRewards/router") );

app.use('/user', require("./resourses/user/router"));

module.exports = app;