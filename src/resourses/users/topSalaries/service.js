const loadFileFromDropbox = require('../../../common/utils/loadFileFromDropbox');
const getSalaries = require('./mapper');
const newUsersValidation = require('../../../validation/newUsersValidation');
const errorResponse = require('../../../common/utils/errorsHandler');

module.exports = async (request, response) => {
    newUsersValidation("newUsersRequestSchema")(request, response);
    try{
        const csvRow = await loadFileFromDropbox();
        const usersJsonObject = await getSalaries(csvRow);
        response.send({
            "users": usersJsonObject
        });
    }
    catch(error){
        errorResponse(response, error)
    }
};