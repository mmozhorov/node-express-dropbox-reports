const loadFileFromDropbox = require('../../actions/loadFileFromDropbox');
const getBadges = require('./getBadges');
const newUsersValidation = require('../../validation/newUsersValidation');

module.exports = (request, response) => {
    newUsersValidation("newUsersRequestSchema")(request, response);
    const CSVFILE = loadFileFromDropbox();
    CSVFILE.then((csvRow) => {

        response.send({
            "users": getBadges(csvRow)
        });
    })
        .catch( error => {
            console.error(error);
            response.send("Something went wrong")
        });
};