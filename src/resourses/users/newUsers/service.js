const loadFileFromDropbox = require('../../../common/utils/loadFileFromDropbox');
const getFilteredUsers = require('./mapper');
const newUsersValidation = require('../../../validation/newUsersValidation');
const errorResponse = require('../../../common/utils/errorsHandler');

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
        .catch( error => errorResponse(response, error));

};