const express = require('express');
const bodyParser = require('body-parser');
const passport = require('passport');
const config = require('../config');

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

require('./authentication/config-passport');

app.use(passport.initialize());
app.use(passport.session());

app.use((req, res, next) => {
    passport.authenticate('local', function(err, user) {
        if (err) {
            return next(err);
        }
        if (!user) {
            return res.send('Wrong username or password');
        }
        req.logIn(user, function(err) {
            if (err) {
                return next(err);
            }
            next();
        });
    })(req, res, next);
});

require("./routes/index").getNewUsers(app);
require("./routes/index").getTopOfSalaries(app);
require("./routes/index").getUsersWithReward(app);

module.exports = app;