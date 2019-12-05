const expressJwt = require('express-jwt');
const secretToken = require('./db').secretToken;

module.exports = jwt;

function jwt() {
    const { secret } = secretToken;
    return expressJwt({ secret }).unless({
        path: [
            // public routes that don't require authentication
            '/users',
            '/auth'
        ]
    });
}
