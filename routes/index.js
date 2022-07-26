const express = require("express");
const router = express.Router();
const axios = require("axios").default;
const jwt_decode = require("jwt-decode");

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express" });
});

router.get("/auth/callback", async (req, res, next) => {
  // const domain = "https://back-line-api.herokuapp.com/auth/callback";
  // console.log(req.query.code);
  // return res.status(200).json({ message: "Login Success" });

  const params = new URLSearchParams({
    grant_type: "authorization_code",
    code: req.query.code,
    redirect_uri: process.env.BASE_URL + "/auth/callback",
    client_id: process.env.LOGIN_CLIENT_ID,
    client_secret: process.env.LOGIN_CLIENT_SECRET,
  });

  const response = await axios.post(
    "https://api.line.me/oauth2/v2.1/token",
    params,
    {
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
    }
  );
});

module.exports = router;
