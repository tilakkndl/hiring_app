const mongoose = require("mongoose");

const resultSchema = new mongoose.Schema({
  noOfQuestions: {
    type: Number,
    required: [true, "no of questions is required"],
  },
  scoredMarks: {
    type: Number,
    required: [true, "Scored marks is required"],
  },
  name: {
    type: String,
    required: [true, "Name is required"],
  },
  role: {
    type: String,
    required: [true, "Role is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
  },
});

const Result = mongoose.model("Result", resultSchema);
module.exports = Result;
