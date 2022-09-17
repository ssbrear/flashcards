var express = require("express");
var router = express.Router();
const fs = require("fs");
const { parse } = require("csv-parse");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index");
});

module.exports = router;
