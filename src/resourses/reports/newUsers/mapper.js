const sortByDate = require('../../../common/sorting/sortUsersByDateDesc');
const isValidCSVRow = require('../../../common/utils/expectCSVvalidate');

module.exports = (csvRow = []) => {
    if(!isValidCSVRow(csvRow)){
        return [];
    }
    return  csvRow.slice(1).sort(sortByDate).map( user => ({
        "name": user[0],
        "lastName": user[1],
        "join_date": user[5]
    }));
};