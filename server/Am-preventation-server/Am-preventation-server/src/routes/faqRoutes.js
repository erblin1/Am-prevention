const FaqRouter = require("express").Router();
const { Faq } = require("../models/faq");

FaqRouter.get("/api/faq", async (req, res) => {
  try {
    const faqs = await Faq.find({});

    res.status(200).json({
      message: "Fetch successfully",
      faqs,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error,
    });
  }
});

FaqRouter.post("/api/faq", async (req, res) => {
  try {
    const faq = new Faq(req.body);
    await faq.save();
    res.status(200).json({
      message: "Faq created successfully.",
      faq,
    });
  } catch (error) {
    res.status(400).json({
      message: "Something went wrong",
      error,
    });
  }
});

FaqRouter.get("/api/faq/:faqId", async (req, res) => {
  res.send("get a Faq");
});

// FaqRouter.post("/api/Faq/:quizId", async (req, res) => {
//   res.send("update a Faq");
// });

FaqRouter.delete("/api/faq/:faqId", async (req, res) => {
  res.send("delete Faq");
});

// FaqRouter.post("/api/Faq/finishAttempt", async (req, res) => {
//   const { userId, quizId, marks } = req.body;
//   try {
//     await User.findOne({ _id: userId }, (err, user) => {
//       if (err) console.log(err);
//       if (!user) console.log("No user found");
//       if (user) {
//         user.attemptCompleted.push({ quizId: quizId.toString(), marks });
//         user.save();

//         res
//           .status(200)
//           .send({ message: "Successfully Finished attempt", user });
//       }
//     });
//   } catch (error) {
//     console.log(error);
//     res.status(400).send({ message: "finishing attempt failure" });
//   }
// });
module.exports = FaqRouter;
