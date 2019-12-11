const loadFileFromDropbox = require('../../../common/dropbox/loadFileFromDropbox');
const uploadFileToDropbox = require('../../../common/dropbox/uploadFileToDropbox');
const getAllUsers = require('./mapper');

module.exports = async (request, response, next) => {
    try{
        const csvRow = await loadFileFromDropbox();
        const users = getAllUsers(csvRow);
        const userJsonObject = users.find(user => user.id === Number(request.params.id));
        if (!userJsonObject){
            throw {
                status: 404,
                responseText: "User not found"
            };
        }

        const isSuccess = uploadFileToDropbox(csvRow);
        response.status(200).json({
            "result": "Successfully updated"
        });
    }
    catch(error) {
        next(error);
    }
};