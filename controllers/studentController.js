const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");

exports.signupStudent = asyncHandler(async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    res.status(400);

    throw new Error("Fill out all fields!");
  }

  const studentExists = await Student.findOne({ email });

  if (studentExists) {
    res.status(400);

    throw new Error("Student with this email already exists!");
  }

  // Hash password
  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  // Create user
  const student = await Student.create({
    name,
    email,
    password: hashedPassword,
  });

  if (student) {
    res.status(201).json({
      student,
    });
  } else {
    res.status(400);

    throw new Error("Invalid data!");
  }
});

exports.loginStudent = (req, res) => {
  res.status(200).json({
    message: "Login route",
  });
};

exports.getMe = (req, res) => {
  res.status(200).json({
    message: "Student's data route",
  });
};

// Generate JWT token
const generateToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: "90d",
  });
};
