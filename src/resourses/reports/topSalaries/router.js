const checkUser = require('../../../authentication/checkUser');
const service = require('./service');

module.exports = app => app.get('/reports/top-salaries', checkUser, service);