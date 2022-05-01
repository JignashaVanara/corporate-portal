var mysql=require('mysql');

var connection=mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

connection.connect(function(error){
   if(error) throw error;
   console.log('Connected...');
    connection.query("CREATE DATABASE IF NOT EXISTS pixelweb_db", function(err, result){
    if(err) throw err;
    console.log("Database Created...");
    });
 }); 

module.exports = connection; 