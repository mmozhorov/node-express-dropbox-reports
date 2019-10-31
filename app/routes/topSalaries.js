const loadFileFromDropbox = require('../actions/loadFileFromDropbox');
const getCurrency = require('../actions/getCurrentCurrency');

const sortBySalary = ( firstUser, secondUser) => {
    const firstUserSalary = Number(firstUser[2]);
    const secondUserSalary = Number(secondUser[2]);
    return secondUserSalary - firstUserSalary;
};

const getSalaries = async (csvRow) => {
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

module.exports =  getTopOfSalaries = (app) =>{
    app.post('/getTopOfSalaries', (request, response) => {

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
    });
};