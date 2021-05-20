const mongoose = require("mongoose");

const courseSchema = new mongoose.Schema({
  course_name: {
    type: String,
    required: true,
  },
  course_content: {
    type: String,
    required: true,
  },
});

const Course = mongoose.model("Course", courseSchema);

module.exports = { Course };
