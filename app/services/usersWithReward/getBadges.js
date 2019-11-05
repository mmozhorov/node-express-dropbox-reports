const db = require('../../../config/db').db;

module.exports = (csvRow) => {
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
