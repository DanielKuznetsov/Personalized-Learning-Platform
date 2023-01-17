const express = require("express");
const petController = require("../controllers/petController.js");
const authController = require("../controllers/authController.js");

const router = express.Router();

router.route("/").get(petController.getAllPets);

router.post("/signup", authController.signup);
router.post("/login", authController.login);
router.get("/logout", authController.logout);

router.post("/forgotPassword", authController.forgotPassword);
router.patch("/resetPassword/:token", authController.resetPassword);

router.use(authController.protect);


router.patch(
  "/updateMyPassword",
  authController.protect,
  authController.updatePassword
);

router.get(
  "/me",
  authController.protect,
  petController.getMe,
  petController.getPet
);
router.patch("/updateMe", authController.protect, petController.updateMe);
router.patch("/deleteMe", authController.protect, petController.deleteMe);

module.exports = router;
