const log4js = require('log4js');
log4js.configure('./config/log4js.json');

const app = require('./src');
const port = process.env.PORT || 3000;


app.listen(port, function (err) {
    if (err) {
        throw err;
    }
    console.log(`server is listening on ${port}...`)
});