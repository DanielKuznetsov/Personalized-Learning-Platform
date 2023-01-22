const express = require("express");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);

app.options("*", function (req, res) {
  res.header("Access-Control-Allow-Origin", "*");
});

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

module.exports = app;
