const loadFileFromDropbox = require('../../actions/loadFileFromDropbox');
const getSalaries = require('./getSalaries');
const newUsersValidation = require('../../validation/newUsersValidation');
const errorResponse = require('../../actions/errorsHandler');

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