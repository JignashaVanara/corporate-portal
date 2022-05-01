const connection = require("./db");

async function createTable() {
    let sql = `CREATE TABLE IF NOT EXISTS employee (
      empid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
      firstname varchar(20) NOT NULL,
      lastname varchar(20) NOT NULL,
      username varchar(20) NOT NULL,
      email varchar(100) NOT NULL,
      password varchar(50) NOT NULL,
      confirm_password varchar(50) NOT NULL
    )`;
    await connection.query(sql);
}

module.exports = { createTable }