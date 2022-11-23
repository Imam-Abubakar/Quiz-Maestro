const express = require("express");
const router = express.Router();

// import
const connection = require("../db");
const auth = require("./auth");
const quizzer = require("./quizzer");
const quiz = require("./quiz");


router.get("/", (req, res) => {
  res.send("Server is up and running");
});

// connect to database
connection();


// route middleware
router.use("/auth", auth);
router.use("/quizzers", quizzer);
router.use("/quizzes", quiz);

module.exports = router;
