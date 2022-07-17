var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/callback", function (req, res, next) {
  res.send("line callback4");
});

module.exports = router;
