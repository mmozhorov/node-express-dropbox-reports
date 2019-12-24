const loadFileFromDropbox = require('../../../common/dropbox/loadFileFromDropbox');
const uploadFileToDropbox = require('../../../common/dropbox/uploadFileToDropbox');
const getAllUsers = require('./mapper');
const getHeadersFromCSV = require('../../../common/utils/getHeadersFromCSV');
const getUpdatedUser = require('../../../common/utils/getUpdatedUser');

module.exports = async (request, response, next) => {
    try{
        const csvRow = await loadFileFromDropbox();
        const users = getAllUsers(csvRow);
        const headersCSV = getHeadersFromCSV(csvRow);
        const userJsonObject = users.find(user => user.id === Number(request.params.id));
        if (!userJsonObject){
            throw {
                status: 404,
                responseText: "User not found"
            };
        }
        const updatedUser = getUpdatedUser(userJsonObject, request.body);
        const newUsersInfo = users.map( item => item.id === updatedUser.id ? updatedUser: item);
        const isSuccess = await uploadFileToDropbox(newUsersInfo, headersCSV);
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