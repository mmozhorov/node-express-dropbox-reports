const access_token = require("./db.js").access_token;
const pathToReports = require("./db.js").pathToReports;
const bufPathToReports = require("./db.js").bufPathToReports;
const Dropbox = require('dropbox').Dropbox;
require('isomorphic-fetch');

const DropboxWebApi = new Dropbox({ accessToken: access_token });

module.exports = {
    DropboxWebApi,
    pathToReports,
    bufPathToReports
};