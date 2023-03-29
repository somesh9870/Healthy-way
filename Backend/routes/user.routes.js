const express = require("express");
const nodemailer = require("nodemailer");
const UserModel = require("../models/user.model");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRouter = express.Router();

// Routes ------

// register routes --
userRouter.post("/signup", async (req, res) => {
  const { email, password, sex, birthday, height, weight } = req.body;

  // Validate form data
  if (!email || !password || !sex || !birthday || !height || !weight) {
    return res.status(400).send("Missing required details form fields");
  }

  // Checking if user already exists
  const emailexisted = await UserModel.find({ email: email });
  if (emailexisted.length > 0) {
    return res.status(400).send("Email already exists");
  }

  // Generating OTP
  const otp = Math.floor(1000 + Math.random() * 9000);

  // Sending OTP via email using nodemailer
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: "OTP Verification for Signup",
    text: `Your OTP for signup is ${otp}`,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      return res.status(500).send("Error sending OTP");
    } else {
      console.log("OTP sent: " + info.response);

      // Saving OTP to session
      req.session.otp = otp;

      // Returning OTP to client
      return res.status(200).send({ otp });
    }
  });
});

userRouter.post("/verify-otp", async (req, res) => {
  const { otp } = req.body;

  // Validating OTP
  if (!otp) {
    return res.status(400).send("OTP is required");
  }

  if (otp !== req.session.otp) {
    return res.status(401).send("Invalid OTP");
  }

  // OTP is valid, signup process
  const { email, password, sex, birthday, height, weight } = req.body;

  try {
    // Reconfirming email address exists or not
    const isEmail = await UserModel.find({ email: email });
    if (isEmail.length > 0) {
      return res.status(400).send({ message: "Email already exists" });
    }

    // changing data to readabel format
    const dateString = birthday;
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString();

    // hashing the password
    bcrypt.hash(password, 4, async (err, hash) => {
      const payload = {
        email,
        password: hash,
        sex,
        birthday: formattedDate,
        height,
        weight,
      };
      const user = new UserModel(payload);
      await user.save();
      res.status(200).send({ message: "Signup successful" });
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// to login the user
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;

  try {
    // Finding the existing user
    const user = await UserModel.find({ email: email });

    if (user.length > 0) {
      // comparing the password with the existing user password
      bcrypt.compare(password, user[0].password, (err, result) => {
        if (result) {
          res.status(200).send({
            message: "Login successful",
            // Generating the jwt token
            token: jwt.sign({ userID: user._id }, "somesh"),
          });
        } else {
          res.status(400).send({ message: "Invalid password" });
        }
      });
    } else {
      res
        .status(400)
        .send({ message: "User not found, Please create a new account" });
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = userRouter;
