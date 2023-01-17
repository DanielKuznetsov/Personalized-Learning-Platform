const mongoose = require("mongoose");
const dotenv = require("dotenv");

process.on("uncaughtException", (err) => {
  console.log("UNHANDLED EXCEPTION! Shutting down...");
  console.log(err.name, err.message);

  process.exit(1); // 1 -> uncalled exception, 0 -> success
});

dotenv.config({ path: "./config.env" });

const app = require("./app");

const DB = process.env.DATABASE.replace(
  "<PASSWORD>",
  process.env.DATABASE_PASSWORD
);

mongoose.set("strictQuery", true);

// Connects to a database
mongoose.connect(DB, {}).then((con) => {
  console.log("Connected to MongoDB!");
});

// Start the server
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

// Handles all promise rejection (no connection to a database or bad auth)
process.on("unhandledRejection", (err) => {
  console.log("UNHANDLED REJECTION! Shutting down...");
  console.log(err.name, err.message);

  server.close(() => {
    process.exit(1); // 1 -> uncalled exception, 0 -> success
  });
});

