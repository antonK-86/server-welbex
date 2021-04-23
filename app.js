const express = require("express");
const app = express();
const cors = require('cors')
const mysql = require("mysql");

const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors())

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

// const routes = require("./config/routes");
// routes(app);

app.listen(PORT, (err) =>
  err ? console.log(error) : console.log(`Server started on ${PORT} port`)
);

app.get("/", (req,res)=>{
  connection.query("SELECT * FROM `dbwelbex`", (error, rows, fields) =>
  error ? console.log(error) : res.send(rows));
})