const Request = require("../models/requestModel.js");
const AppError = require("../utils/appError.js");
const catchAsync = require("../utils/catchAsync.js");
const mongoose = require("mongoose");

const filterObj = (obj, ...allowedFields) => {
  const newObj = {};

  Object.keys(obj).forEach((el) => {
    if (allowedFields.includes(el)) newObj[el] = obj[el];
  });

  return newObj;
};

exports.createRequest = catchAsync(async (req, res, next) => {
  const request = await Request.create({
    title: req.body.title,
    category: req.body.category,
    description: req.body.description,
    status: req.body.status,
  });

  res.status(200).json({
    status: "success",
    data: {
      request,
    },
  });
});

exports.getSpecificRequest = catchAsync(async (req, res, next) => {
  const requests = await Request.find({
    category: req.body.category,
  });

  res.status(200).json({
    status: "success",
    results: requests.length,
    data: {
      requests,
    },
  });
});

exports.getAllRequests = catchAsync(async (req, res, next) => {
  const requests = await Request.find();

  res.status(200).json({
    status: "success",
    results: requests.length,
    data: {
      requests,
    },
  });
});

exports.getRequest = catchAsync(async (req, res, next) => {
  const request = await Request.find({ _id: req.params.id });

  res.status(200).json({
    status: "success",
    data: {
      request,
    },
  });
});

exports.deleteRequest = catchAsync(async (req, res, next) => {
  await Request.findOneAndDelete({ _id: req.params.id });

  res.status(200).json({
    status: "success",
    data: null,
  });
});

exports.updateRequest = catchAsync(async (req, res, next) => {
  const filteredBody = filterObj(
    req.body,
    "title",
    "category",
    "status",
    "description"
  );

  console.log(req.params);

  const updatedRequest = await Request.findByIdAndUpdate(
    req.params.id,
    filteredBody,
    {
      new: true,
      runValidators: true,
    }
  );

  res.status(200).json({
    status: "success",
    data: {
      updatedRequest,
    },
  });
});
