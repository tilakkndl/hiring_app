const express = require("express");
const Career = require("./../models/careerModel");

exports.getAllCareer = async (req, res) => {
  try {
    let query = Career.find();
    const careers = await query;
    res.status(200).json({
      status: "success",
      result: careers.length,
      data: {
        careers,
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

// exports.getAllCareer = (req, res) => {
//   res.send("hello");
// };

exports.createCareer = async (req, res) => {
  try {
    console.log(req.body);
    const newCareer = await Career.create(req.body);
    res.status(201).json({
      status: "success",
      data: {
        career: newCareer,
      },
    });
  } catch (err) {
    res.status(400).json({
      status: "vayena yrr",
      message: err,
    });
  }
};
