const loadFileFromDropbox = require('../actions/loadFileFromDropbox');

const getFilteredUsers = (csvRow, limit, offset) => {
    const usersFromCsv =  csvRow.slice(1);
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

module.exports =  getNewUsers = (app) =>{
    app.post('/getNewUsers', (request, response) => {
        const {
            limit = 20,
            offset = 0
        } = request.body;
        const CSVFILE = loadFileFromDropbox();

        CSVFILE.then((csvRow) => {
                const usersJsonObject = getFilteredUsers(csvRow, limit, offset);
                response.send({
                    "users": usersJsonObject
                });
            })
            .catch( error => {
                console.error(error);
                response.send("Something went wrong")
            });

    });
};