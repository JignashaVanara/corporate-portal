var mysql = require('mysql');

var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

connection.connect(function (error) {
    if (error) throw error;
    console.log('Connected...');
});

module.exports = connection; 