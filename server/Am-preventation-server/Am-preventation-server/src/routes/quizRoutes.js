const QuizRouter = require("express").Router();
const { Quiz } = require("../models/quiz");
const { User } = require("../models/user");
QuizRouter.get("/api/quiz", async (req, res) => {
  try {
    const quizes = await Quiz.find({});

    res.status(200).json({
      message: "Fetch successfully",
      quizes,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error,
    });
  }
});

QuizRouter.post("/api/quiz", async (req, res) => {
  try {
    const quiz = new Quiz(req.body);
    await quiz.save();
    res.status(200).json({
      message: "quiz created successfully.",
      quiz,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error,
    });
  }
});

QuizRouter.get("/api/quiz/:quizId", async (req, res) => {
  res.send("get a quiz");
});

// QuizRouter.post("/api/quiz/:quizId", async (req, res) => {
//   res.send("update a quiz");
// });

QuizRouter.delete("/api/quiz/:quizId", async (req, res) => {
  res.send("delete quiz");
});

QuizRouter.post("/api/quiz/finishAttempt", async (req, res) => {
  const { userId, quizId, marks } = req.body;
  try {
    await User.findOne({ _id: userId }, (err, user) => {
      if (err) console.log(err);
      if (!user) console.log("No user found");
      if (user) {
        user.attemptCompleted.push({ quizId: quizId.toString(), marks });
        user.save();

        res
          .status(200)
          .send({ message: "Successfully Finished attempt", user });
      }
    });
  } catch (error) {
    console.log(error);
    res.status(400).send({ message: "finishing attempt failure" });
  }
});
module.exports = QuizRouter;
