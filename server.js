const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");

dotenv.config({ path: "./config.env" });

const app = require("./app");

// MongoDB
mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGO_URL, {}).then((con) => {
  console.log("Connected to MongoDB!".cyan.underline);
});

// Start server
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
