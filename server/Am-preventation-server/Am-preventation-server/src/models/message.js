const mongoose = require("mongoose");
// const Schema = require("mongoose").Schema
const messageSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  message: {
    type: String,
  },

  //   timestamps: true,
});

const Message = mongoose.model("Message", messageSchema);

module.exports = { Message };
