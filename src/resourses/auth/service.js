const jwt = require('jsonwebtoken');
const db = require('../../../config/db').db;
const secret = require('../../../config/db').secretToken;

function authenticate ({ username = "", password = "" }){
    const users = db.get('users').value();
    const user = users.find( item => (item.login === username && item.password === password) );
    if (!user){
        return null;
    }
    const token = jwt.sign({ sub: user.id }, secret);
    return {
        token
    };
}

module.exports = (request, response, next) => {
    try{
        const user = authenticate(request.body);
        if (!user){
            throw {
                status: 401,
                responseText: 'Username or password is incorrect'
            };
        }
        else{
            response.status(200).json(user);
        }
    }
    catch(error){
        next(error);
    }
};