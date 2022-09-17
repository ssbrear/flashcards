var express = require("express");
var router = express.Router();
const fs = require("fs");
const { parse } = require("csv-parse");

/* GET users listing. */
router.get("/", function (req, res, next) {
  let csvDataCategories = [];
  let csvDataWords = [];
  fs.createReadStream("./public/data/Swedish_Nouns_-_Sheet1.csv")
    .pipe(parse({ delimiter: "," }))
    .on("data", function (row) {
      if (row[0] === "word") csvDataCategories = row;
      else {
        const newWord = {};
        row.forEach((wordForm, index) => (newWord[csvDataCategories[index]] = wordForm));
        csvDataWords.push(newWord);
      }
    })
    .on("end", function () {
      res.json(csvDataWords);
    });
});

module.exports = router;
