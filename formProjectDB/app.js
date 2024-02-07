const express = require("express");
const morgan = require("morgan");
const app = express();
const careerRouter = require("./routes/careerRoute");
const questionRouter = require("./routes/questionRoute");
const resultRouter = require("./routes/resultRoute");
// app.get("/", (req, res) => {
//   res.send("Home page");
// });

if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}

//Middleware
app.use(express.json());

//middleware
app.use((req, res, next) => {
  console.log(req.body);
  console.log("Hellow from the middleware");
  next();
});
//middleware
app.use((req, res, next) => {
  req.requestTime = new Date().toISOString();
  next();
});

app.use("/api/v1/careers", careerRouter);
app.use("/api/v1/questions", questionRouter);
app.use("/api/v1/result", resultRouter);
module.exports = app;

// app.listen(6000, () => {
//   console.log("Running server for LoginPortal");
// });
