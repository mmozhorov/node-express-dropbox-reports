const sortBySalary = require('../../../common/sorting/sortUsersBySalaryDesc');
const getCurrency = require('../../../common/utils/getCurrentCurrency');
const isValidCSVRow = require('../../../common/utils/expectCSVvalidate');

module.exports = async (csvRow = []) => {
    if(!isValidCSVRow(csvRow)){
        return [];
    }
    const currentCurrency = await getCurrency();
    return csvRow.slice(1).sort(sortBySalary).map( user => ({
        "name": user[0],
        "lastName": user[1],
        "salary, RUB": Number(user[2]*currentCurrency.data.Valute["USD"]["Value"]).toFixed(2) + "Р",
        "salary, USD": "$" + Number(user[2]),
    })).filter( user => user.name);
};