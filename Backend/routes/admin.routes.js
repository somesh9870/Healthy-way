const express = require("express");
const AdminModel = require("../models/admin.model");
const bcrypt = require("bcrypt");
require("dotenv").config();
const jwt = require("jsonwebtoken");

const adminRouter = express.Router();

// to create a new admin
adminRouter.post("/signup", async (req, res) => {
  const { email, password, name } = req.body;
  try {
    const emailExisted = await AdminModel.find({ email: email });
    if (emailExisted.length > 0) {
      return res.status(400).send({ message: "Email already exists" });
    }

    bcrypt.hash(password, 4, async (err, hash) => {
      const payload = {
        email,
        password: hash,
        name,
      };
      const user = new AdminModel(payload);
      await user.save();
      res.status(200).send({ message: "Registration successful" });
    });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});


// to login the admin side
adminRouter.post("/login", async (req, res) => {
  const { email, password } = req.body;
  try {
    const user = await AdminModel.find({ email: email });
    if (user.length > 0) {
      bcrypt.compare(password, user[0].password, async (err, result) => {
        if (result) {
          res.status(200).send({
            message: "Login successful",
            token: jwt.sign({ role: "admin" }, process.env.adminSecretKey),
          });
        } else {
          res.status(400).send({ message: "Invalid password" });
        }
      });
    } else {
      res.status(400).send({ message: "User not authorized to logged in!" });
    }
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = adminRouter;
