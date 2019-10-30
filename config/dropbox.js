const access_token = require("./db.js").access_token;
const pathToReports = require("./db.js").pathToReports;
const Dropbox = require('dropbox').Dropbox;
const csvtojsonV2=require("csvtojson");
require('isomorphic-fetch');

const DropboxWebApi = new Dropbox({ accessToken: access_token });

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