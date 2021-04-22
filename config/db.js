const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "sql11.freesqldatabase.com",
  user: "sql11407553",
  password: "AsV97rEYVY",
  database: "sql11407553",
  port: 3306,
});

connection.connect((error) => {
  error
    ? console.log("Error connect to DB")
    : console.log("Connect to DB...Ok");
});

module.exports = connection;
