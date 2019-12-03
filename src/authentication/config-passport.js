const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../../config/db').db;

const Users = db.get('users').value();

passport.serializeUser(function(user, done) {
    done(null, user.id);
});


passport.deserializeUser(function(id, done) {

    console.log("Десериализация пользователя: ", id);
    const User = Users.find( item => item.id === id );
    User
        ? done("Not found")
        : done(null,User);
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        const isUser = Users.find( item => (item.login === username && item.password === password) );
        if (!isUser) { return done(null, false); }
        return done(null, isUser);
    }
));