const loadFileFromDropbox = require('../../../common/utils/loadFileFromDropbox');
const getAllUsers = require('./mapper');
const errorResponse = require('../../../common/utils/errorsHandler');

module.exports = async (request, response) => {
    try{
        const csvRow = await loadFileFromDropbox();
        const users = getAllUsers(csvRow);
        const userJsonObject = users.find(user => user.id === Number(request.params.id));
        if (!userJsonObject){
            throw new Error(404);
        }
        response.status(200).json({
            "result": userJsonObject
        });
    }
    catch(error) {
        errorResponse(response, error);
    }
};