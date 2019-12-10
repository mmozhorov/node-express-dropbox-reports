const config = require('../../../config');

module.exports = async (csv) => {
    const response = await config.dropbox.DropboxWebApi.filesUpload({path: "/Приложения/NODE_JS_PROJECT/Users2.csv", contents: csv});
    console.log(response);
};