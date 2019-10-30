const csv=require('csvtojson');
const config = require('../../config');

module.exports =  getNewUsers = (app) =>{
    app.post('/getNewUsers', (request, response) => {
        const {
            limit = 20,
            offset = 0
        } = request.body;
        config.dropbox.DropboxWebApi.filesDownload({path: config.dropbox.pathToReports})
            .then( resp => {
                const users = resp.fileBinary.toString();
                csv({
                    noheader:true,
                    output: "csv"
                })
                    .fromString(users)
                    .then((csvRow)=>{
                        const usersFromCsv =  csvRow.slice(1);
                        const usersJsonObject = [];
                        for(let i = (limit*offset); (i < usersFromCsv.length) && i < (limit*(1+Number(offset))); i++){
                            const user = usersFromCsv[i];
                            const finishedInfo = {};
                            for( let j = 0; j < csvRow[0].length; j++ ){
                                finishedInfo[csvRow[0][j]] = user[j];
                            }
                            usersJsonObject.push(finishedInfo);
                        }

                        response.send({
                            "users": usersJsonObject
                        });
                    })
            })
            .catch( error => {
                console.error(error);
                response.send("Something went wrong")
            });

    });
};