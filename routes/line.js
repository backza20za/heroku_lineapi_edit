const express = require("express");
const router = express.Router();
const config = require("../config/line");
const service = require("../services/keep/handle-event");
/* GET users listing. */
router.post(
  "/callback",
  config.line.middleware(config.lineConfig),
  function (req, res, next) {
    // res.send("line callback4");
    Promise.all(req.body.events.map(service.handleEvent))
      .then((result) => res.json(result))
      .catch((err) => {
        console.error(err);
        res.status(500).end();
      });
  }
);

module.exports = router;
