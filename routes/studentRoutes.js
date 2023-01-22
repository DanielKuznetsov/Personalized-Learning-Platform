const express = require("express");
const router = express.Router();
const {
  signupStudent,
  loginStudent,
  getMe,
} = require("../controllers/studentController");

router.post("/signup", signupStudent);
router.post("/login", loginStudent);
router.get("/me", getMe);

module.exports = router;
