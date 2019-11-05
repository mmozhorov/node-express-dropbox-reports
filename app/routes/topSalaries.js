const checkUser = require('../authentication/checkUser');
const getTopOfSalaries = require('../services/topOfSalaries');

module.exports = app => app.post('/getTopOfSalaries', checkUser, getTopOfSalaries);