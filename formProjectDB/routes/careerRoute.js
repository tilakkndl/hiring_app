const express = require("express");
const app = express();
const careerController = require("./../controllers/careerController");

const router = express.Router();

router
  .route("/")
  .get(careerController.getAllCareer)
  .post(careerController.createCareer);
module.exports = router;
