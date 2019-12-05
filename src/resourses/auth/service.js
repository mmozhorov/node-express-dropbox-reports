const jwt = require('jsonwebtoken');
const db = require('../../../config/db').db;

function authenticate ({ username, password }){
    const users = db.get('users').value();
    const user = Users.find( item => (item.login === username && item.password === password) );
    if (!user){
        return null;
    }

    const token = jwt.sign({ sub: user.id }, config.secret);
    const { password, ...userWithoutPassword } = user;
    return {
        ...userWithoutPassword,
        token
    };
}

module.exports = (request, response, next) => {
    const user = authenticate(request.body);
    if (!user){

    }
};