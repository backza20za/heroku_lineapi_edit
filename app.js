const express = require("express");
const path = require("path");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const dotenv = require("dotenv");
dotenv.config();

const indexRouter = require("./routes/index");
const lineRouter = require("./routes/line");

const app = express();

app.use(logger("dev"));
app.use(cors());

app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/line", lineRouter);

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

module.exports = app;
