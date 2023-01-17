// const mongoose = require("mongoose");

// const requestSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     unique: true,
//     required: [true, "Title cannot be empty"],
//   },
//   description: {
//     type: String,
//     maxlength: [1000, "The description cannot have more than 75 words."],
//     required: [true, "Description cannot be empty"],
//     validate: [
//       function (description) {
//         return description.split(" ").length <= 75;
//       },
//       "The description of your feedback cannot have more than 75 characters.",
//     ],
//   },
//   category: {
//     type: String,
//     default: "Feature",
//     enum: ["UI", "UX", "Enhancement", "Bug", "Feature"],
//     required: [true, "Choose a category from the dropdown list"],
//   },
//   status: {
//     type: String,
//     default: "Suggestion",
//     enum: ["Planned", "In-Progress", "Live", "Suggestion"],
//   },
//   upvotes: {
//     type: Number,
//     default: 0,
//   },
// });

// const Request = mongoose.model("Request", requestSchema);

// module.exports = Request;
