const config = require('../../../config');
const convertArrayToCSVString = require('./convertArrayToCSVString');

module.exports = async (csv) => {
    let csvContent = convertArrayToCSVString(csv);
    const response = await config.dropbox.DropboxWebApi.filesUpload({path: config.db.bufPathToReports, contents: csvContent, mode: 'overwrite'});
    return !response.error;
};