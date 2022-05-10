var mysql = require('mysql');

var db_config = {
    host: process.env.MYSQL_HOST,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD
};

connection = mysql.createPool(db_config);

connection.on('error', function (err) {
    console.log('db error', err);
    if (err.code === 'PROTOCOL_CONNECTION_LOST') {
        handleDisconnect();
    } else {
        throw err;
    }
});

function handleDisconnect(){    
    connection = mysql.createPool(db_config);
}

module.exports = connection; 

