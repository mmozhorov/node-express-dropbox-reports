const loadFileFromDropbox = require('../../../common/utils/loadFileFromDropbox');
const getSalaries = require('./mapper');
const newUsersValidation = require('../../../validation/newUsersValidation');
const errorResponse = require('../../../common/utils/errorsHandler');

module.exports = (request, response) => {
    newUsersValidation("newUsersRequestSchema")(request, response);
    const CSVFILE = loadFileFromDropbox();
    CSVFILE.then((csvRow) => {
        const usersJsonObject = getSalaries(csvRow);
        usersJsonObject.then( resp => {
            response.send({
                "users": resp
            });
        })
    })
        .catch( error => errorResponse(response, error));
};