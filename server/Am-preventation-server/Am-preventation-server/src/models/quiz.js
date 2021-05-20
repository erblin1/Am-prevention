const mongoose = require("mongoose");

const quizSchema = new mongoose.Schema({
  quiz_name: {
    type: String,
    required: true,
  },
  quiz_content: {
    type: Array,
    required: true,
  },
});

const Quiz = mongoose.model("Quiz", quizSchema);

module.exports = { Quiz };
