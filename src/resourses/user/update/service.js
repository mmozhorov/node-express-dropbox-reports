const loadFileFromDropbox = require('../../../common/dropbox/loadFileFromDropbox');
const uploadFileToDropbox = require('../../../common/dropbox/uploadFileToDropbox');
const getAllUsers = require('./mapper');
const getUpdatedUser = require('../../../common/utils/getUpdatedUser');

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
        const updatedUser = getUpdatedUser(userJsonObject, request.body);

        console.log(updatedUser);

        response.status(200).json({
           result:  updatedUser
        });

        const isSuccess = await uploadFileToDropbox(csvRow);
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