const express = require('express');
const bodyParser = require('body-parser');
const log4js = require('log4js');
const app = express();
const jwt = require('../config/jwt');

app.use(log4js.connectLogger(log4js.getLogger("http"), { level: 'auto' }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api-docs', require('swagger-ui-express').serve, require('swagger-ui-express').setup(require('../config/swagger.json')));
app.use('/auth', require('./resourses/auth/router'));

app.use(jwt());

app.use('/reports', require("./resourses/reports/router") );
app.use('/user', require("./resourses/user/router"));

app.use(require('./common/utils/errorsHandler'));

module.exports = app;