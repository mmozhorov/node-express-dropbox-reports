const sortByDate = require('./sortByDate');

module.exports = (csvRow = [], limit, offset) => {
    if (!csvRow.length){
        return [];
    }
    let usersFromCsv =  csvRow.slice(1);
    usersFromCsv = usersFromCsv.sort(sortByDate);
    const usersJsonObject = [];
    for(let i = (limit*offset); (i < usersFromCsv.length) && i < (limit*(1+Number(offset))); i++){
        const user = usersFromCsv[i];
        usersJsonObject.push({
            "name": user[0],
            "lastName": user[1],
            "join_date": user[5]
        });
    }
    return usersJsonObject;
};