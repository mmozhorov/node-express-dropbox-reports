const path = require('path');
const express = require('express');
const exphbs = require('express-handlebars');
const bodyParser = require('body-parser');
const passport = require('passport');
const session = require('express-session');
const config = require('../config');
const app = express();

app.use(bodyParser.urlencoded({
    extended: false
}));

require('./authentication').init(app);

app.use(passport.initialize());
app.use(passport.session());

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views/layouts'));

require('./user').init(app);

module.exports = app;