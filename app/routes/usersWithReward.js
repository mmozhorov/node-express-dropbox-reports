const db = require('../../config/db').db;
const loadFileFromDropbox = require('../actions/loadFileFromDropbox');
const checkUser = require('../authentication/checkUser');

const getBadges = (csvRow) => {
    let usersFromCsv =  csvRow.slice(1);
    const usersWithBadges = db.get("users").value().filter( item => item.badges);
    return usersWithBadges.map( item => {
        const currentUser = usersFromCsv.find( userArr => userArr[0] === item.name && userArr[1] === item.surname);
        return {
            name: currentUser[0],
            surname: currentUser[1],
            badges: item.badges
        };
    });

};

module.exports =  getUsersWithReward = (app) =>{
    app.post('/getUsersWithReward', checkUser, (request, response) => {
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
    });
};