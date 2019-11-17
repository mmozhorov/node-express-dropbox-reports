const sortBySalary = require('./sortBySalary');
const getCurrency = require('./getCurrentCurrency');

module.exports = async (csvRow = []) => {
    if (!csvRow.length){
        return [];
    }
    const currentCurrency = await getCurrency();
    let usersFromCsv =  csvRow.slice(1);
    usersFromCsv = usersFromCsv.sort(sortBySalary);
    const usersJsonObject = [];
    for(let i = 0; i < 10; i++){
        const user = usersFromCsv[i];
        usersJsonObject.push({
            "name": user[0],
            "lastName": user[1],
            "salary, RUB": Number(user[2]*currentCurrency.data.Valute["USD"]["Value"]).toFixed(2) + "Р",
            "salary, USD": "$" + Number(user[2]),
        });
    }
    return usersJsonObject;
};