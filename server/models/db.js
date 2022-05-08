var mysql = require('mysql');

var connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
});

connection.connect(function (error) {
    if (error) throw error;
    console.log('Connected...');
});

module.exports = connection; 