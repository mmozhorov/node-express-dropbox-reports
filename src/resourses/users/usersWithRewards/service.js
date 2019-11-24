const loadFileFromDropbox = require('../../../common/utils/loadFileFromDropbox');
const getBadges = require('./mapper');
const newUsersValidation = require('../../../validation/newUsersValidation');
const errorResponse = require('../../../common/utils/errorsHandler');

module.exports = async (request, response) => {
    newUsersValidation("newUsersRequestSchema")(request, response);
    try{
        const csvRow = await loadFileFromDropbox();
        response.send({
            "users": getBadges(csvRow)
        });
    }
    catch(error){
        errorResponse(response, error);
    }

};