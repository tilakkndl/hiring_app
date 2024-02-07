const mongoose = require("mongoose");

const careerSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "There should be first name"],
    trim: true,
  },
  lastName: {
    type: String,
    required: [true, "There should be last name"],
    trim: true,
  },
  email: {
    type: String,
    required: [true, "There should be email"],
    trim: true,
  },
  phone: {
    type: Number,
    required: [true, "there should be phone number"],
    trim: true,
  },
  githubAccount: {
    type: String,
    required: [true, "There should be githubAccount"],
  },
  qualification: {
    type: String,
    required: [true, "Threre should be qualification"],
  },
  skills: {
    type: [String],
    required: [true, "Threre should be skills"],
  },
  role: {
    type: String,
    required: [true, "Threre should be role"],
  },
  file: {
    type: String,
    required: [true, "Threre should be CV file"],
  },
});

const Career = mongoose.model("Career", careerSchema);

module.exports = Career;
