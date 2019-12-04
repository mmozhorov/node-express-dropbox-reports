const express = require('express');
const router = express.Router();
const checkUser = require('../../../authentication/checkUser');
const service = require('./service');
const { RequestNewUsers, ResponseNewUsers } = require('./documentation');

const { ExpressSwagger } = require('node-swagger-ui-express');

ExpressSwagger.initController('/api', express, router);
router.post('/newUsers', checkUser, service).toSwagger(ResponseNewUsers, RequestNewUsers);

module.exports = app => app.use("/", router);