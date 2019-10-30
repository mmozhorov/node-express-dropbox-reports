const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync('db.json');
const db = low(adapter);
// console.log(db.get("users").value());
// db.get('users')
//     .push({ id: 1, title: 'lowdb is awesome'})
//     .value();
// console.log(db.get("users").value());
module.exports = db;
