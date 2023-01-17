const Pet = require("../models/petModel.js");
const AppError = require("../utils/appError.js");
const catchAsync = require("../utils/catchAsync.js");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};

  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

exports.getAllPets = catchAsync(async (req, res, next) => {
  const pets = await Pet.find();

  res.status(200).json({
    status: "success",
    results: pets.length,
    data: {
      pets: pets,
    },
  });
});

exports.updateMe = catchAsync(async (req, res, next) => {
  // 1) Create error if pet POSTs password data
  if (req.body.password || req.body.passwordConfirm) {
    return next(
      new AppError(
        "This route is not for password updates. Please use /updateMyPassword!",
        400
      )
    );
  }

  // 2) Update pet document
  const filteredBody = filterObj(req.body, "name", "email");
  const updatedPet = await Pet.findByIdAndUpdate(req.pet.id, filteredBody, {
    new: true,
    runValidators: true,
  });

  res.status(200).json({
    status: "success",
    data: {
      pet: updatedPet,
    },
  });
});

exports.deleteMe = catchAsync(async (req, res, next) => {
  await Pet.findByIdAndUpdate(req.pet.id, { active: false });

  res.status(204).json({
    status: "success",
    data: null,
  });
});

exports.getMe = (req, res, next) => {
  req.params.id = req.pet.id;

  next();
};

exports.getPet = catchAsync(async (req, res, next) => {
  const pet = await Pet.find({ _id: req.params.id });

  res.status(200).json({
    status: "success",
    data: {
      pet,
    },
  });
});
