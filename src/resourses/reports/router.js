const express = require('express');
const app = express();

app.use('/new-users', require('./newUsers/router'));
app.use('/top-salaries', require('./topSalaries/router'));
app.use('/with-reward', require('./usersWithRewards/router'));

module.exports = app;