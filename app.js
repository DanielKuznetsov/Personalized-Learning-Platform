const path = require("path");
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

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "./e-learning/build")));

  app.get("*", (req, res) =>
    res.sendFile(path.resolve("./", "e-learning", "build", "index.html"))
  );
} else {
  app.get("/", (req, res) => res.send("Not in production"));
}

app.use(errorHandler);

module.exports = app;
