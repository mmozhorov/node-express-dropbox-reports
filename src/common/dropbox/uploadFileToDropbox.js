const config = require('../../../config');
const convertArrayToCSVString = require('./convertArrayToCSVString');


module.exports = async (csv, headersCSV) => {
        let csvContent = convertArrayToCSVString(csv);
        const response = await config.dropbox.DropboxWebApi.filesUpload({path: config.dropbox.bufPathToReports, contents: csvContent, mode: 'overwrite'});
        return !response.error;
};