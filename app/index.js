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

app.engine('.hbs', exphbs({
    defaultLayout: 'main',
    extname: '.hbs',
    layoutsDir: path.join(__dirname, 'views')
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views/layouts'));

app.get('/', (request, response) => {
    response.render('home', {
        name: 'User'
    })
});

//require('./authentication').init(app);

module.exports = app;