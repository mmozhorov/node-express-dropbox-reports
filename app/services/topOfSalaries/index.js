const loadFileFromDropbox = require('../../actions/loadFileFromDropbox');
const getSalaries = require('./getSalaries');

module.exports = (request, response) => {
    const CSVFILE = loadFileFromDropbox();
    CSVFILE.then((csvRow) => {
        const usersJsonObject = getSalaries(csvRow);
        usersJsonObject.then( resp => {
            response.send({
                "users": resp
            });
        })
    })
        .catch( error => {
            console.error(error);
            response.send("Something went wrong")
        });
};