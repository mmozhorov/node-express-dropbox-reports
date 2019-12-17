const config = require('../../../config');

module.exports = async (csv) => {
    try{
        const csvStr =  ["ccc", "ddd"];
        const response = await config.dropbox.DropboxWebApi.filesUpload({path: "/Приложения/NODE_JS_PROJECT/Users2.csv", contents: csvStr, mode: 'overwrite'});
        // const response = await config.dropbox.DropboxWebApi.filesDelete({path: "/Приложения/NODE_JS_PROJECT/Users2.csv"});
    }
    catch(error){
        console.log(error);
    }
};