const express = require("express");
const fs = require("fs");
const Question = require("./../models/questionModel");
// const data = fs.readFileSync(`${__dirname}/../dev-resource/data/qsn.json`);

exports.getAllQuestions = async (req, res) => {
  try {
    const query = Question.find(req.query);
    let data = await query;
    res.status(200).json({
      status: "Success",
      data: {
        question: data,
      },
    });
  } catch (err) {
    res.status(404).json({
      status: "fail",
      message: err,
    });
  }
};

// exports.getAllQuestions = (req, res) => {
//   res.send("Chalxa yrr");
// };

exports.createQuestion = async (req, res) => {
  try {
    console.log(req.body);
    const newQuestions = await Question.create(req.body);
    res.status(201).json({
      status: "Success",
      data: {
        career: newQuestions,
      },
    });
  } catch (err) {
    console.log(err);
    res.status(400).json({
      status: "vayena yrr",
      message: err,
    });
  }
  //   console.log(req.body);
  //   res.status(200).json({ name: "Tilak" });
};
