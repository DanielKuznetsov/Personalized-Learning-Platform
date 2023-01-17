const Pet = require("./../models/petModel.js");
const catchAsync = require("../utils/catchAsync.js");
const jwt = require("jsonwebtoken");
const AppError = require("../utils/appError.js");
const sendEmail = require("../utils/email.js");
const { promisify } = require("util"); // utility -> promisify method
const crypto = require("crypto");

const signToken = (id) => {
  return jwt.sign({ id: id }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRES_IN,
  });
};

const createSendToken = (pet, statusCode, res) => {
  const token = signToken(pet._id);
  const cookieOptions = {
    expires: new Date(
      Date.now() + process.env.JWT_COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
    ),
    httpOnly: true,
  };

  if (process.env.NODE_ENV === "production") cookieOptions.secure = true;
  res.cookie("jwt", token, cookieOptions);

  pet.password = undefined;

  res.status(statusCode).json({
    status: "success",
    token,
    data: {
      pet,
    },
  });
};

exports.signup = catchAsync(async (req, res, next) => {
  const newPet = await Pet.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
    passwordConfirm: req.body.passwordConfirm,
    passwordChangedAt: req.body.passwordChangedAt,
    role: req.body.role,
  });

  createSendToken(newPet, 201, res);
});

exports.login = catchAsync(async (req, res, next) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return next(new AppError("Please provide email and password!", 400));
  }

  // explicitely selecting password
  const pet = await Pet.findOne({ email }).select("+password");

  if (!pet || !(await pet.correctPassword(password, pet.password))) {
    return next(new AppError("Incorrect email or password!", 401));
  }

  createSendToken(pet, 200, res);
});

exports.logout = (req, res) => {
  res.cookie("jwt", "loggedout", {
    expires: new Date(Date.now() + 10 * 1000),
    httpOnly: true,
  });

  res.status(200).json({ status: "success" });
};

exports.protect = catchAsync(async (req, res, next) => {
  // 1) Get the token and check if it exists
  let token;
  if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  } else if (req.cookies.jwt) {
    token = req.cookies.jwt;
  }

  // console.log()

  if (!token) {
    return next(
      new AppError("You are not logged in! Please log in to get access!", 401)
    );
  }

  // 2) Validate the token -> verification
  const decoded = await promisify(jwt.verify)(token, process.env.JWT_SECRET);

  // 3) Check if user still exists
  const currentPet = await Pet.findById(decoded.id);

  if (!currentPet) {
    return next(
      new AppError("The pet belonging to the token is no longer exists!", 401)
    );
  }

  // 4) Check if user changed password after the JWT (token) was issued
  if (currentPet.changedPasswordAfter(decoded.iat)) {
    return next(
      new AppError("Pet recently changed password! Please log in again!", 401)
    );
  }

  // Grant access to protected route
  req.pet = currentPet;
  next();
});

// Restricting certain routes -> deleting tours, etc just to certain roles
exports.restrictTo = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.pet.role)) {
      return next(
        new AppError("You do not have permission to perform this action!", 403)
      );
    }

    next();
  };
};

exports.forgotPassword = catchAsync(async (req, res, next) => {
  // 1) Get user based on POSTed email
  const pet = await Pet.findOne({ email: req.body.email });

  if (!pet) {
    return next(new AppError("There is no user with this email address!", 404));
  }

  // 2) Generate the random reset
  const resetToken = pet.createPasswordResetToken();
  await pet.save({ validateBeforeSave: false });

  // 3) Send it to pet's email
  const resetURL = `${req.protocol}://${req.get(
    "host"
  )}/api/v1/pets/resetPassword/${resetToken}`;

  const message = `Forgot your password? Submit a PATCH request with your new password and passwordConfirm to ${resetURL}.\n 
                    If you didn't forget your password, please ignore this email!`;

  try {
    await sendEmail({
      email: pet.email,
      subject: "Your password reset token is valid for 10 minutes",
      text: message,
    });

    res.status(200).json({
      status: "success",
      message: `Token sent to ${pet.email}!`,
    });
  } catch (err) {
    pet.passwordResetToken = undefined;
    pet.passwordResetExpires = undefined;

    await pet.save({ validateBeforeSave: false });

    return next(
      new AppError(
        "There was an error sending the email. Try again later!",
        500
      )
    );
  }
});

exports.resetPassword = catchAsync(async (req, res, next) => {
  // 1) Get pet based on the token
  const hashedToken = crypto
    .createHash("sha256")
    .update(req.params.token)
    .digest("hex");

  const pet = await Pet.findOne({
    passwordResetToken: hashedToken,
    passwordResetExpires: { $gt: Date.now() },
  });

  // 2) If token has not expired, and there is a pet, set the new password
  if (!pet) {
    return next(new AppError("Token is invalid or has expired!", 400));
  }

  pet.password = req.body.password;
  pet.passwordConfirm = req.body.passwordConfirm;

  pet.passwordResetToken = undefined;
  pet.passwordResetExpires = undefined;

  await pet.save();

  // 3) Update changedPasswordAt property for the pet
  // 4) Log the pet in, send JWT
  createSendToken(pet, 200, res);
});

exports.updatePassword = catchAsync(async (req, res, next) => {
  // 1) Get pet from collection
  const pet = await Pet.findById(req.pet.id).select("+password");

  // 2) Check if posted current password is correct
  if (!(await pet.correctPassword(req.body.currentPassword, pet.password))) {
    return next(new AppError("Your current password is wrong!", 401));
  }

  // 3) If so, update the password
  pet.password = req.body.password;
  pet.passwordConfirm = req.body.passwordConfirm;

  await pet.save();

  // 4) Log user in, send JWT
  createSendToken(pet, 200, res);
});
