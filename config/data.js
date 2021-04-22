"use strict";

const db = require("./db");
exports.data = (req, res) => {
  db.query("SELECT * FROM `dbwelbex`", (error) =>
    error ? console.log(error) : console.log("Ok")
  );
};
