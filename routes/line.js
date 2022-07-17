var express = require("express");
var router = express.Router();

/* GET users listing. */
router.get("/callback", function (req, res, next) {
  res.send("line callback1");
});

module.exports = router;
