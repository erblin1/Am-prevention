const mongoose = require("mongoose");
const Schema = require("mongoose").Schema;
const { Password } = require("../service/password");

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: Number,
    required: true,
  },
  role: {
    type: String,
    default: "user",
  },
  attemptCompleted: {
    type: Array,
    default: [],
  },
  courseAttemptCompleted: {
    type: Array,
    default: [],
  },
  messages: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Message",
    },
  ],
});

userSchema.pre("save", async function (done) {
  if (this.isModified("password")) {
    const hashed = await Password.toHash(this.get("password"));
    this.set("password", hashed);
  }
  done();
});

const User = mongoose.model("User", userSchema);

module.exports = { User };
