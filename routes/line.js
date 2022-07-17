const express = require("express");
const router = express.Router();

/* GET users listing. */
router.post("/callback", function (req, res, next) {
  res.send("line callback4");
});

module.exports = router;
