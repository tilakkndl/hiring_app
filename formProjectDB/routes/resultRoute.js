const express = require("express");
const ResultController = require("./../controllers/resultController");
const app = express();
const router = express.Router();

router
  .route("/")
  .get(ResultController.getAllResult)
  .post(ResultController.createResult);
module.exports = router;
