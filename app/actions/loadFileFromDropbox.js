const csv=require('csvtojson');
const config = require('../../config');

module.exports = ( resolve, reject) => {
    return config.dropbox.DropboxWebApi.filesDownload({path: config.dropbox.pathToReports})
            .then( resp => {
                const users = resp.fileBinary.toString();
                csv({noheader:true, output: "csv"})
                    .fromString(users)
                        .then((csvRow)=> csvRow)
                        .catch( error => reject(error) )
                .then( (csvRow)=> csvRow )
            })
        .catch( error => console.error(error) );
}