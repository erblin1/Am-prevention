const mongoose = require("mongoose");

const faqSchema = new mongoose.Schema({
  faq_question: {
    type: String,
    required: true,
  },
  faq_answer: {
    type: String,
    required: true,
  },
});

const Faq = mongoose.model("Faq", faqSchema);

module.exports = { Faq };
