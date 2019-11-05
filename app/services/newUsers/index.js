const loadFileFromDropbox = require('../../actions/loadFileFromDropbox');
const getFilteredUsers = require('./getFilteredUsers');
const newUsersValidation = require('../../validation/newUsersValidation');

module.exports = (request, response) => {
    newUsersValidation("newUsersRequestSchema")(request, response);
    const {
        limit = 20,
        offset = 0
    } = request.body;
    const CSVFILE = loadFileFromDropbox();

    CSVFILE.then((csvRow) => {
        const usersJsonObject = getFilteredUsers(csvRow, limit, offset);
        response.send({
            "users": usersJsonObject
        });
    })
        .catch( error => {
            console.error(error);
            response.send("Something went wrong")
        });

};