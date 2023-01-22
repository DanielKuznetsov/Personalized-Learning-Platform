const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const Student = require("../models/studentModel");

exports.signupStudent = (req, res) => {
  res.status(200).json({
    message: "Signup route",
  });
};

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
