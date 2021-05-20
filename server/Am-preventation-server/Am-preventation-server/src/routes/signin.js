const express = require("express");
const { body } = require("express-validator");
const { User } = require("../models/user");
const { Password } = require("../service/password");

const SignInRouter = express.Router();

SignInRouter.post(
  "/api/users/signin",
  [
    body("email").isEmail().withMessage("Enter a valid Email"),
    body("password").trim().notEmpty().withMessage("Enter a valid password"),
  ],
  async (req, res) => {
    try {
      const { email, password } = req.body;
      const existingUser = await User.findOne({ email }).populate(["messages"]);
      console.log(existingUser);

      if (!existingUser) {
        throw new Error("Invalid Credentials");
      }

      console.log(existingUser.password, password);
      const passwordMatch = await Password.Compare(
        existingUser.password,
        password
      );

      if (!passwordMatch) {
        throw new Error("Invalid Crendentials");
      }

      res.status(200).send({ user: existingUser, message: "Sign In Success" });
    } catch (error) {
      console.log(error);
      res
        .status(400)
        .send({ user: null, message: "Incorrect Password/Username" });
    }
  }
);

module.exports = { SignInRouter };
