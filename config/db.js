const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
const access_token = db.get("access_token").value();
const pathToReports = db.get("pathToReports").value();

module.exports = {
    db,
    access_token,
    pathToReports
};
