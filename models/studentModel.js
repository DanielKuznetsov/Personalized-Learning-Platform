const mongoose = require("mongoose");
const validator = require("validator");

const studentSchema = new mongoose.Schema(
  {
    name: {
      type: String,
    },
    email: {
      type: String,
      required: [true, "Please tell us your email!"],
      unique: true,
      lowercase: true,
      validate: [validator.isEmail, "Please provide a valid email!"],
    },
    password: {
      type: String,
      required: [true, "Please tell your password!"],
      select: false,
    },
    role: {
      type: String,
      enum: ["student", "teacher", "admin"],
      default: "student",
    },
    active: {
      type: Boolean,
      default: true,
      select: false,
    },
  },
  { timestamps: true }
);

studentSchema.pre(/^find/, function (next) {
  // this points to the current query
  // .find() outputs only the docs with active set to -> true
  const students = this.find({ active: { $ne: false } });

  next();
});

const Student = mongoose.model("Student", studentSchema);

module.exports = Student;
