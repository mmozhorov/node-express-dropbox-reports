const passport = require('passport');

function initUser (app) {
    app.get('/', (request, response) => response.render('home'));

    app.get('/profile', passport.authenticationMiddleware(), (request, response) => {
        response.render('profile', {
            username: request.user.username
        });
    });

    app.post('/login', passport.authenticate('local', {
        successRedirect: '/profile',
        failureRedirect: '/'
    }));
}


module.exports = initUser;