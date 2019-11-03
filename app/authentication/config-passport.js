const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const db = require('../../config/db').db;

passport.serializeUser(function(user, done) {
    console.log("Сериализация пользователя: ", user)
    done(null, user.id);
});


passport.deserializeUser(function(id, done) {
    console.log("Десериализация пользователя: ", id);


    User.findById(id, function(err,user){
        err
            ? done(err)
            : done(null,user);
    });
});

passport.use(new LocalStrategy(
    function(username, password, done) {
        const Users = db.get('users').value();
        const isUser = Users.find( item => (item.login === username && item.password === password) );
        if (!isUser) { return done(null, false); }
        return done(null, isUser);
    }
));