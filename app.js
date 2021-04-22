const express = require("express");

const app = express();

const PORT = process.env.PORT || 3500;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const routes = require("./config/routes");
routes(app);

app.listen(PORT, (err) =>
  err ? console.log(error) : console.log(`Server started on ${PORT} port`)
);
