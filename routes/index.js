const express = require("express");
const router = express.Router();
const axios = require("axios").default;

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/auth/callback", async (req, res, next) => {
  // const domain = "https://back-line-api.herokuapp.com/auth/callback";
  console.log(req.query.code);
  return res.status(200).json({ message: "Login Success" });
});

module.exports = router;
