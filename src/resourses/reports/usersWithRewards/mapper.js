const db = require('../../../../config/db').db;
const isValidCSVRow = require('../../../common/utils/expectCSVvalidate');

module.exports = (csvRow = []) => {
    if(!isValidCSVRow(csvRow)){
        return [];
    }
    let usersFromCsv =  csvRow.slice(1);
    const usersWithBadges = db.get("users").value().filter( item => item.badges);
    return usersWithBadges.map( item => {
        const currentUser = usersFromCsv.find( userArr => userArr[0] === item.name && userArr[1] === item.surname);
        if (currentUser){
            return {
                "name": currentUser[0],
                "surname": currentUser[1],
                "badges": item.badges
            };
        }
    }).filter( user => user);
};
