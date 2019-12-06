const service = require('./service');
module.exports = app => app.get('/reports/top-salaries', service);