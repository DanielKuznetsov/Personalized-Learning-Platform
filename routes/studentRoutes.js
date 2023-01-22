const express = require("express");
const router = express.Router();
const {
  signupStudent,
  loginStudent,
  getMe,
} = require("../controllers/studentController");
const { protect } = require("../middleware/authMiddleware");

router.post("/signup", signupStudent);
router.post("/login", loginStudent);
router.get("/me", protect, getMe);

module.exports = router;
