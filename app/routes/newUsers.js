const checkUser = require('../authentication/checkUser');
const getUsers = require('../services/newUsers');

module.exports = app => app.post('/getNewUsers', checkUser, getUsers);