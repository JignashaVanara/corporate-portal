const connection = require("./db");

async function createTable() {

  let dbname = process.env.MYSQL_DB; 

  let db = await connection.query(
    `CREATE DATABASE IF NOT EXISTS ${dbname}`);

  let empTable = await connection.query(
    `CREATE TABLE IF NOT EXISTS ${dbname}.employee (
      empid INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
      firstname varchar(20) NOT NULL,
      lastname varchar(20) NOT NULL,
      username varchar(20) NOT NULL,
      email varchar(100) NOT NULL,
      password varchar(50) NOT NULL,
      confirm_password varchar(50) NOT NULL
    )`);

  let timeentryTable = await connection.query(
    `CREATE TABLE IF NOT EXISTS ${dbname}.timesheet (
        timesheetId int NOT NULL AUTO_INCREMENT,
        empId int NOT NULL,
        empName varchar(30) NOT NULL,
        day varchar(30) NOT NULL,
        efforts varchar(10) NOT NULL,
        comments varchar(200) NOT NULL,
        PRIMARY KEY (timesheetId),
        FOREIGN KEY (empId)
              REFERENCES ${dbname}.employee(empid)
              ON DELETE CASCADE 
              ON UPDATE CASCADE 
      )`);

  let goalsTable = await connection.query(
    `CREATE TABLE IF NOT EXISTS ${dbname}.goals (
        goalId int NOT NULL AUTO_INCREMENT,
        empId int NOT NULL,
        empName varchar(30) NOT NULL,
        goalType varchar(20) NOT NULL,
        goalName varchar(50) NOT NULL,
        createdAt date NOT NULL,
        comments varchar(200) NOT NULL,
        PRIMARY KEY (goalId),
        FOREIGN KEY (empId)
              REFERENCES ${dbname}.employee(empid)
              ON DELETE CASCADE 
              ON UPDATE CASCADE 
      )`);

  let docsTable = await connection.query(
    `CREATE TABLE IF NOT EXISTS ${dbname}.documents (
        docId int NOT NULL AUTO_INCREMENT,
        empId int NOT NULL,
        empName varchar(30) NOT NULL,
        docType varchar(20) NOT NULL,
        fileURL varchar(50) NOT NULL,
        fileIcon varchar(50),
        month varchar(10),
        year varchar(4),
        uploadedAt date NOT NULL,
        PRIMARY KEY (docId),
        FOREIGN KEY (empId)
              REFERENCES ${dbname}.employee(empid)
              ON DELETE CASCADE 
              ON UPDATE CASCADE 
      )`);

}

module.exports = { createTable }