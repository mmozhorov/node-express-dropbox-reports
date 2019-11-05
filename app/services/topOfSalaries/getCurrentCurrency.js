const axios = require('axios');

module.exports = function () {
    return axios.get("https://www.cbr-xml-daily.ru/daily_json.js");
};