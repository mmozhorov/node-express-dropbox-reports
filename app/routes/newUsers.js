const csv=require('csvtojson');
const config = require('../../config');
const CSV = require('csv-string');

module.exports =  getNewUsers = (app) =>{
    app.post('/getNewUsers', (request, response) => {
        config.dropbox.DropboxWebApi.filesDownload({path: config.dropbox.pathToReports})
            .then( resp => {
                const users = resp.fileBinary.toString();
                const arrayUsers = CSV.parse(users);
                console.log(arrayUsers);
                response.send("Ok");
            })
            .catch( error => {
                console.error(error);
                response.send("Something went wrong")
            });

    });
};