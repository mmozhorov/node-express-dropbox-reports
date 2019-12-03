const csv=require('csvtojson');
const config = require('../../../config');

module.exports = async () => {
    const csvFile = await config.dropbox.DropboxWebApi.filesDownload({path: config.dropbox.pathToReports});
    const users = await csvFile.fileBinary.toString();
    const csvRow = await csv({noheader:true, output: "csv"}).fromString(users);
    return csvRow;
};