const CourseRouter = require("express").Router();
const { Course } = require("../models/course");
const { User } = require("../models/user");
CourseRouter.get("/api/course", async (req, res) => {
  try {
    const courses = await Course.find({});

    res.status(200).json({
      message: "Fetch successfully",
      courses,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error,
    });
  }
});

CourseRouter.post("/api/course", async (req, res) => {
  try {
    const course = new Course(req.body);
    await course.save();
    res.status(200).json({
      message: "course created successfully.",
      course,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error,
    });
  }
});

CourseRouter.get("/api/course/:courseId", async (req, res) => {
  res.send("get a course");
});

// CourseRouter.post("/api/course/:quizId", async (req, res) => {
//   res.send("update a course");
// });

CourseRouter.delete("/api/course/:courseId", async (req, res) => {
  res.send("delete course");
});

CourseRouter.post("/api/course/finishAttempt", async (req, res) => {
  const { userId, courseId } = req.body;
  try {
    await User.findOne({ _id: userId }, (err, user) => {
      if (err) console.log(err);
      if (!user) console.log("No user found");
      if (user) {
        user.courseAttemptCompleted.push({ courseId: courseId.toString() });
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
module.exports = CourseRouter;
