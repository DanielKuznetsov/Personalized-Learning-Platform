const express = require("express");
const morgan = require("morgan");
const rateLimit = require("express-rate-limit");
const helmet = require("helmet");
const mongoSanitize = require("express-mongo-sanitize");
const xss = require("xss-clean");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const AppError = require("./utils/appError.js");
const globalErrorHandler = require("./controllers/errorController.js");
const petRouter = require("./routes/petRoutes.js");

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

// Set security HTTP headers
app.use(helmet());

// Middleware for POST methods to work
app.use(morgan("dev"));
// app.use(
//   express.static(
//     `${__dirname} /whatever the folder's name is where the static files are`
//   )
// );

// Limit requests from same API
const limiter = rateLimit({
  max: 10000,
  windowMs: 60 * 60 * 1000, // time window, 100 requests per hour
  message: "Too many requests from this IP, please try again in an hour!",
});
app.use("/api", limiter); // affecting only /api routes

// Body parser, reading data from body into req.body
app.use(express.json({ limit: "10kb" }));
app.use(cookieParser());

// Data sanitization agains NoSQL query injection
app.use(mongoSanitize());

// Data sanitization against XSS
app.use(xss());

app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();

  next();
});

// Routes
app.use("/api/v1/pets", petRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

// Error handling middleware
app.use(globalErrorHandler);

module.exports = app;
