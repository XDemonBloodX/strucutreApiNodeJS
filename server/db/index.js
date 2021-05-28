const mysql = require('mysql');
const db = mysql.createConnection({
    password: '',
    user: 'root',
    database: 'mydb',
    host: 'localhost',
    port: '3306'
});

module.exports = db;