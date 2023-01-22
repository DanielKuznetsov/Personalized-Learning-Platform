const express = require("express");
const cors = require("cors");
const { errorHandler } = require("./middleware/errorMiddleware");

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
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

app.use("/api/students", require("./routes/studentRoutes"));

app.use(errorHandler);

module.exports = app;
