const checkUser = require('../../../authentication/checkUser');
const service = require('./service');

module.exports = app => app.post('/newUsers', checkUser, service);