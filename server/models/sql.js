const connection = require("./db");

async function createTable() {
    let empTable = await connection.query(
      `CREATE TABLE IF NOT EXISTS employee (
      empid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
      firstname varchar(20) NOT NULL,
      lastname varchar(20) NOT NULL,
      username varchar(20) NOT NULL,
      email varchar(100) NOT NULL,
      password varchar(50) NOT NULL,
      confirm_password varchar(50) NOT NULL
    )`);
    // let timeentryTable = await connection.query(``);
    // let goalsTable = await connection.query(``);
    // let docsTable = await connection.query(``);
}

module.exports = { createTable }