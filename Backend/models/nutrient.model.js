const mongoose = require("mongoose");

const nutrientSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    energy: {
      type: String,
      required: true,
    },
    fat: {
      type: String,
      required: true,
    },
    carbs: {
      type: String,
      required: true,
    },
    protein: {
      type: String,
      required: true,
    },
    servingsize: {
      type: String,
      required: true,
    },
    filter: {
      type: String,
    }
  },
  {
    versionKey: false,
  }
);

const NutrientModel = mongoose.model("nutrientInfo", nutrientSchema);

module.exports = NutrientModel;
