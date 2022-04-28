var mysql=require('mysql');

var connection=mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DB
});

connection.connect(function(error){
   if(!!error){
     console.log(error);
   }else{
     console.log('Connected...');
   }
 }); 

module.exports = connection; 