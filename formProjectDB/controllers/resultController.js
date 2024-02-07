const express = require("express");
const Result = require("../models/resultModel");

exports.getAllResult = async (req, res) => {
  try {
    let query = Result.find(req.query);
    const results = await query;
    res.status(200).json({
      status: "Success",
      size: results.length,
      data: {
        data: results,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

exports.createResult = async (req, res) => {
  try {
    console.log(req.body);
    const newResult = await Result.create(req.body);
    res.status(201).json({
      status: "Success",
      data: {
        result: newResult,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};
