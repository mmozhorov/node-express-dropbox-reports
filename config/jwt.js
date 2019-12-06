const expressJwt = require('express-jwt');
const secretToken = require('./db').secretToken;

module.exports = jwt;


function jwt() {
    return expressJwt({ "secret": secretToken }).unless({
        path: [
            {
                url: '/api-docs',
                methods: ["GET"]
            },
            // public routes that don't require authentication
            // '/api-docs',
            // '/users',
            // '/auth',
        ]
    });
}
