const mongoose = require("mongoose");
const validator = require("validator");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");

const petSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please tell us your pet name!"],
  },
  email: {
    type: String,
    required: [true, "Please tell us your pet email!"],
    unique: true,
    lowercase: true,
    validate: [validator.isEmail, "Please provide a valid email!"],
  },
  password: {
    type: String,
    required: [true, "Please tell your password!"],
    minlength: 8,
    select: false,
  },
  passwordConfirm: {
    type: String,
    required: [true, "Please confirm your password!"],
    validate: {
      validator: function (el) {
        return el === this.password; // abs === xyz -> ValidationError
      },
      message: "Passwords are not the same",
    },
  },
  passwordChangedAt: Date,
  role: {
    type: String,
    enum: ["pet", "owner", "user", "guide", "lead-guide", "admin"],
    default: "user",
  },
  passwordResetToken: String,
  passwordResetExpires: Date,
  active: {
    type: Boolean,
    default: true,
    select: false,
  },
});

petSchema.pre("save", async function (next) {
  // isModified() is available on all fields (predefined function)
  if (!this.isModified("password")) return next();

  this.password = await bcrypt.hash(this.password, 12);
  this.passwordConfirm = undefined; // no need to persist to DB

  next();
});

petSchema.pre("save", function (next) {
  if (!this.isModified("password") || this.isNew) return next();

  this.passwordChangedAt = Date.now() - 1000;

  next();
});

// Query middleware
petSchema.pre(/^find/, function (next) {
  // this points to the current query
  const users = this.find({ active: { $ne: false } }); // .find() outputs only the docs with active set to -> true

  next();
});

// instance method -> available on all documents (FOR LOGINING IN)
petSchema.methods.correctPassword = async function (
  candidatePassword,
  userPassword
) {
  return await bcrypt.compare(candidatePassword, userPassword); // return true or false (incrypting first)
};

petSchema.methods.changedPasswordAfter = function (JWTTimestamp) {
  if (this.passwordChangedAt) {
    const changedTimestamp = parseInt(
      this.passwordChangedAt.getTime() / 1000,
      10
    );

    // False means not changed
    return JWTTimestamp < changedTimestamp;
  }

  return false;
};

petSchema.methods.createPasswordResetToken = function () {
  const resetToken = crypto.randomBytes(32).toString("hex");

  this.passwordResetToken = crypto
    .createHash("sha256")
    .update(resetToken)
    .digest("hex");
  this.passwordResetExpires = Date.now() + 10 * 60 * 1000;

  return resetToken;
};

const Pet = mongoose.model("Pet", petSchema);

module.exports = Pet;
