const express = require("express");
const adminauth = require("../middlewares/adminauth.middleware");
const NutrientModel = require("../models/nutrient.model");

const nutriRouter = express.Router();

// to get the all data
nutriRouter.get("/list", async (req, res) => {
  try {
    const nutrient = await NutrientModel.find({});
    res.status(200).send({ data: nutrient });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// to add new nutrient data only by authorized (admin) 
nutriRouter.post("/add", adminauth, async (req, res) => {
  const payload = req.body;
  try {
    const nutrient = new NutrientModel(payload);
    await nutrient.save();
    res.status(200).send({ message: "New nutrient data has been added" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// to update nutrien only by authorized (admin) 
nutriRouter.patch("/update/:id", adminauth, async (req, res) => {
  const { id } = req.params;
  try {
    await NutrientModel.findByIdAndUpdate({ _id: id });
    res.status(200).send({ message: "Nutrient data has been updated" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

// to delete nutrient only by authorized (admin) 
nutriRouter.delete("/delete/:id", adminauth, async (req, res) => {
  const { id } = req.params;
  try {
    await NutrientModel.findByIdAndDelete({ _id: id });
    res.status(200).send({ message: "Nutrient data has been deleted" });
  } catch (err) {
    res.status(400).send({ message: err.message });
  }
});

module.exports = nutriRouter;
