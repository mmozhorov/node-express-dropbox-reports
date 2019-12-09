const express = require('express');
const bodyParser = require('body-parser');
const errorHandler = require('./common/utils/errorsHandler');
const log4js = require('log4js');
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

app.use('/reports', require("./resourses/reports/router") );
app.use('/user', require("./resourses/user/router"));

app.use(errorHandler);

module.exports = app;