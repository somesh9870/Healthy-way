const express = require("express");
const jwt = require("jsonwebtoken");
const UserData = require("../models/userdata.model");

const userDataRouter = express.Router();

// To get the all data

userDataRouter.get("/", async (req, res) => {
  try {
    const userData = await UserData.find({});
    res.status(200).send({ data: userData });
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
  try {
    const userData = await UserData.findByIdAndDelete(req.params.id);
    res.status(200).send({ message: "Data has been deleted", data: userData });
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

module.exports = userDataRouter;
