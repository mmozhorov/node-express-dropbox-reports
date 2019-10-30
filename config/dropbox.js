const Dropbox = require('dropbox').Dropbox;
const csvtojsonV2=require("csvtojson");
require('isomorphic-fetch');

const DropboxWebApi = new Dropbox({ accessToken: "UawwV2EerFAAAAAAAAAATdVlKysRpnTJLrmC2tPAWVcsA5kA46MMKRlkOqXMoyZY" });
const pathToReports = "/Приложения/NODE_JS_PROJECT/Users.csv";

module.exports = {
    DropboxWebApi,
    pathToReports
};

// config.dropbox.DropboxWebApi.filesDownload({path: config.dropbox.pathToReports})
//     .then( response => {
//         const users = response.fileBinary.toString();
//         console.log(users);
//     })
//     .catch( error => console.error(error));