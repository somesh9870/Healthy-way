const express = require("express");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const UserData = require("../models/userdata.model");

const userDataRouter = express.Router();

// To get the all data

userDataRouter.get("/", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env.secretKey);
  try {
    if (decoded) {
      const userID = decoded.userID;
      const userData = await UserData.find({ userID: userID });
      return res.status(200).send({ data: userData });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// To add some data in diary

userDataRouter.post("/add", async (req, res) => {
  try {
    const userData = new UserData(req.body);
    await userData.save();
    res.status(200).send({ message: "Data has been added", data: userData });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

// To delete the data in diary

userDataRouter.delete("/delete/:id", async (req, res) => {
  const token = req.headers.authorization;
  const decoded = jwt.verify(token, process.env.secretKey);
  const userID = decoded.userID;
  const { id } = req.params;
  try {
    const userData = await UserData.find({ _id: id });

    if (userData[0].userID === userID) {
      await UserData.findByIdAndDelete({ _id: id });
      res.send({ message: "Data has been deleted", data: userData });
    } else {
      res
        .status(400)
        .send({ message: "You are not authorized to delete this data" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = userDataRouter;
