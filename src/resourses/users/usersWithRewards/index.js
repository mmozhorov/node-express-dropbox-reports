const checkUser = require('../authentication/checkUser');
const getUsersWithReward = require('../services/usersWithReward');

module.exports = app => app.post('/getUsersWithReward', checkUser, getUsersWithReward);