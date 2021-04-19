const express = require("express");

const app = express();

const PORT = process.env.PORT || 4000;

app.listen(PORT, (err) =>
  err ? console.log(error) : console.log(`Server started on ${PORT} port`)
);
