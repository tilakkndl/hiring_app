const express = require("express");
const questionController = require("./../controllers/questionController");
const app = express();
const router = express.Router();

router
  .route("/")
  .get(questionController.getAllQuestions)
  .post(questionController.createQuestion);
module.exports = router;
