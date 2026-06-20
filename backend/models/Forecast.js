const mongoose = require("mongoose");

const forecastSchema = new mongoose.Schema(
  {
    solarGeneration: {
      type: Number,
      required: true,
    },
    windGeneration: {
      type: Number,
      required: true,
    },
    solarConfidence: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    windConfidence: {
      type: Number,
      required: true,
      min: 0,
      max: 100,
    },
    explanation: {
      type: String,
      required: true,
    },
    forecastTime: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Forecast", forecastSchema);
