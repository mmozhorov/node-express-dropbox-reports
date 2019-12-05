const service = require('./service');
module.exports = app => app.get('/reports/new-users', service);