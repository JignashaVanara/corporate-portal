var mysql = require('mysql');

var db_config = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
};

connection = mysql.createConnection(db_config);

connection.connect(function (error) {
    if (error) {
        console.log('error while connecting to db:', err);
        setTimeout(handleDisconnect, 2000);
    } 
    console.log('Connected...');
});

connection.on('error', function (err) {
    console.log('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        handleDisconnect();
    } else {
        throw err;
    }
});

function handleDisconnect(){
    connection = mysql.createConnection(db_config);
    connection.connect();
}

module.exports = connection; 

