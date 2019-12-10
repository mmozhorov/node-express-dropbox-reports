const loadFileFromDropbox = require('../../../common/utils/loadFileFromDropbox');
const getAllUsers = require('./mapper');

module.exports = async (request, response, next) => {
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
        next(error);
    }
};