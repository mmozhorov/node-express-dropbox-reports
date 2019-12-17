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

        response.status(200).json({
           result:  userJsonObject
        });


        const isSuccess = uploadFileToDropbox(csvRow);
        if(!isSuccess){
            throw {
              status: 500,
              responseText: "Something went wrong"
            };
        }

        response.status(200).json({
            "result": "Successfully updated"
        });
    }
    catch(error) {
        next(error);
    }
};