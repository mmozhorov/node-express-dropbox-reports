const service = require('./service');

module.exports = app => app.get('/reports/with-reward', service);