const loadFileFromDropbox = require('../../actions/loadFileFromDropbox');
const getBadges = require('./getBadges');

module.exports = (request, response) => {
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