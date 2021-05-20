const express = require("express");
const { body } = require("express-validator");
const { User } = require("../models/user");

const RegistrationRouter = express.Router();

RegistrationRouter.post(
  "/api/users/register",
  [
    body("email").isEmail().withMessage("Enter a valid Email"),
    body("password")
      .trim()
      .isLength({ min: 4, mX: 15 })
      .withMessage("Password must be between 4 & 15 characters"),
    body("phoneNumber").isNumeric().withMessage("Enter a valid Mobile Number"),
    body("name").isAlpha().withMessage("Name must only contain alphabets"),
  ],
  async (req, res) => {
    const { email, password, name, phoneNumber } = req.body;

    const firstUser = await User.find();

    const existingUser = await User.findOne({ email });

    if (existingUser) {
      throw new Error("Email already in use");
    }
    let makeAdmin;
    if (firstUser.length < 1) {
      makeAdmin = { role: "admin" };
    }
    const user = new User({ email, password, name, phoneNumber, ...makeAdmin });
    await user.save();

    res.status(200).send({ user, message: "Sign Up Successfull" });
    console.log(user._id);
  }
);

module.exports = { RegistrationRouter };
