const loadFileFromDropbox = require('../../../common/utils/loadFileFromDropbox');
const getFilteredUsers = require('./mapper');
const newUsersValidation = require('../../../validation/newUsersValidation');
const errorResponse = require('../../../common/utils/errorsHandler');

module.exports = async (request, response) => {
    newUsersValidation("newUsersRequestSchema")(request, response);
    const {
        limit = 20,
        offset = 0
    } = request.body;
    try{
        const csvRow = await loadFileFromDropbox();
        const usersJsonObject = getFilteredUsers(csvRow, limit, offset);
        response.status(200).json({
            "users": usersJsonObject
        });
    }
    catch(error) {
        errorResponse(response, error);
    }

};