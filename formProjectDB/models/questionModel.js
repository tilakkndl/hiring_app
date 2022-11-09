const mongoose = require("mongoose");

const questionSchema = new mongoose.Schema({
  //   0: {
  //     role: {
  //       type: "String",
  //     },
  //     questions: {
  //       type: ["Mixed"],
  //     },
  //   },
  //   1: {
  //     role: {
  //       type: "String",
  //     },
  //     questions: {
  //       type: ["Mixed"],
  //     },
  //   },
  // }

  role: {
    type: String,
    required: [true, "There should be role"],
    trim: true,
  },
  questions: [
    {
      //   type: {
      //     qsn: {
      //       type: String,
      //       required: [true, "Thre should be question"],
      //     },
      //     options: {
      //       type: [String],
      //       required: [true, "there should be optioins"],
      //     },
      //     correctChoice: {
      //       type: Number,
      //       required: [true, "There should be correctChoice"],
      //     },
      //     choosenChoice: {
      //       type: Number,
      //       required: [true, "There should be choosenChoice"],
      //     },
      //   },
      id: Number,
      qsn: String,
      options: [String],
      correctChoice: Number,
      choosenChoice: Number,
    },
  ],
});

const Question = mongoose.model("Question", questionSchema);

module.exports = Question;
