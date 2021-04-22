"use strict";

module.exports = (app) => {
  const data = require("./data");
  app.route("/").get(data.data);
};
