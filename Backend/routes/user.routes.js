const express = require("express");
const nodemailer = require("nodemailer");
const UserModel = require("../models/user.model");
require("dotenv").config();
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const UserData = require("../models/userdata.model");

const userRouter = express.Router();

// Routes ------

// // register routes --
// userRouter.post("/signup", async (req, res) => {
//   const { email, password, sex, birthday, height, weight } = req.body;

//   // Validate form data
//   if (!email || !password || !sex || !birthday || !height || !weight) {
//     return res.status(400).send("Missing required details form fields");
//   }

//   // Checking if user already exists
//   const emailexisted = await UserModel.find({ email: email });
//   if (emailexisted.length > 0) {
//     return res.status(400).send("Email already exists");
//   }

//   // Generating OTP
//   const otp = Math.floor(1000 + Math.random() * 9000);

//   // Sending OTP via email using nodemailer
//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: process.env.EMAIL_USER,
//       pass: process.env.EMAIL_PASSWORD,
//     },
//   });

//   const mailOptions = {
//     from: process.env.EMAIL_USER,
//     to: email,
//     subject: "OTP Verification for Signup",
//     text: `Your OTP for signup is ${otp}`,
//   };

//   transporter.sendMail(mailOptions, (error, info) => {
//     if (error) {
//       console.log(error);
//       return res.status(500).send("Error sending OTP");
//     } else {
//       console.log("OTP sent: " + info.response);

//       // Saving OTP to session
//       req.session.otp = otp;

//       // Returning OTP to client
//       return res.status(200).send({ otp });
//     }
//   });
// });

// userRouter.post("/verify-otp", async (req, res) => {
//   const { otp } = req.body;

//   // Validating OTP
//   if (!otp) {
//     return res.status(400).send("OTP is required");
//   }

//   if (otp !== req.session.otp) {
//     return res.status(401).send("Invalid OTP");
//   }

//   // OTP is valid, signup process
//   const { email, password, sex, birthday, height, weight, active } = req.body;

//   try {
//     // Reconfirming email address exists or not
//     const isEmail = await UserModel.find({ email: email });
//     if (isEmail.length > 0) {
//       return res.status(400).send({ message: "Email already exists" });
//     }

//     // changing date to readabel format
//     const dateString = birthday;
//     const date = new Date(dateString);
//     const formattedDate = date.toLocaleDateString("en-US", {
//       month: "long",
//       day: "numeric",
//       year: "numeric",
//     });
//     console.log(formattedDate);

//     // hashing the password
//     bcrypt.hash(password, 4, async (err, hash) => {
//       const payload = {
//         email,
//         password: hash,
//         sex,
//         birthday: formattedDate,
//         height,
//         weight,
//         active,
//       };
//       const user = new UserModel(payload);
//       await user.save();
//       res.status(200).send({ message: "Signup successful" });
//     });
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

// // to login the user
// userRouter.post("/login", async (req, res) => {
//   const { email, password } = req.body;

//   try {
//     // Finding the existing user
//     const user = await UserModel.find({ email: email });

//     if (user.length > 0) {
//       // comparing the password with the existing user password
//       bcrypt.compare(password, user[0].password, async (err, result) => {
//         if (result) {
//           await UserModel.findByIdAndUpdate(
//             { _id: user[0]._id },
//             { active: true }
//           );
//           res.status(200).send({
//             message: "Login successful",
//             // Generating the jwt token
//             token: jwt.sign({ userID: user[0]._id }, process.env.secretKey),
//           });
//         } else {
//           res.status(400).send({ message: "Invalid password" });
//         }
//       });
//     } else {
//       res
//         .status(400)
//         .send({ message: "User not found, Please create a new account" });
//     }
//   } catch (err) {
//     res.status(400).send({ message: err.message });
//   }
// });

userRouter.post("/signup", async (req, res) => {
  const { email, password, sex, birthday, height, weight } = req.body;
  try {
    const emailExisted = await UserModel.find({ email: email });
    if (emailExisted.length > 0) {
      return res.status(400).send({ message: "Email already exists" });
    }

    bcrypt.hash(password, 4, async (err, hash) => {
      const payload = {
        email,
        password: hash,
        sex,
        birthday,
        height,
        weight,
      };
      const user = new UserModel(payload);
      await user.save();
      res.status(200).send({ message: "Registration successful" });
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// to login the user side
userRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await UserModel.find({ email: email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, async (err, result) => {
        if (result) {
          await UserModel.findByIdAndUpdate(
            { _id: user[0]._id },
            { active: true }
          );
          res.status(200).send({
            message: "Login successful",
            // Generating the jwt token
            token: jwt.sign({ userID: user[0]._id }, process.env.secretKey),
          });
        } else {
          res.status(400).send({ message: "Invalid password" });
        }
      });
    } else {
      res.status(400).send({ message: "User not found! Please creat an account" });
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// to get the users data
userRouter.get("/", async (req, res) => {
  try {
    const users = await UserModel.find({});
    res.status(200).send(users);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

userRouter.get("/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const user = await UserData.find({ userID: id });
    res.status(200).send(user);
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

userRouter.delete("/delete/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const result = await UserModel.findByIdAndDelete({ _id: id });
    if (result.deletedCount === 0) {
      return res.status(404).send({
        message: `${result.deletedCount} documents have been deleted`,
      });
    }
    res
      .status(200)
      .send({ message: `${result.deletedCount} documents have been deleted` });
  } catch (err) {
    res
      .status(400)
      .send({ message: "An error occurred while deleting the data" });
  }
});

module.exports = userRouter;
