const isValidCSVRow = require('../../common/utils/expectCSVvalidate');

module.exports = (csvRow = []) => {
    if(!isValidCSVRow(csvRow)){
        return [];
    }
    return  csvRow.slice(1).map( (user, id) => ({
        "id": id,
        "name": user[0],
        "lastName": user[1],
        "profession": user[3],
        "photo": user[4],
        "join_date": user[5]
    }));
};