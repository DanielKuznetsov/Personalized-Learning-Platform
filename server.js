const mongoose = require("mongoose");
const dotenv = require("dotenv");
const colors = require("colors");
const path = require("path");

dotenv.config({ path: "./config.env" });

const app = require("./app");

// MongoDB
mongoose.set("strictQuery", true);

mongoose.connect(process.env.MONGO_URL, {}).then((con) => {
  console.log("Connected to MongoDB!".cyan.underline);
});

// Serve frontend
if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "../e-learning/build")));

  app.get("*", (req, res) =>
    res.sendFile(
      path.resolve(__dirname, "../", "e-learning", "build", "index.html")
    )
  );
} else {
  app.get('/', (req, res) => res.send("Not in production"))
}

// Start server
const port = process.env.PORT || 4000;
const server = app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
