const checkUser = require('../../../authentication/checkUser');
const getUsers = require('./service');

module.exports = app => app.post('/newUsers', checkUser, getUsers);