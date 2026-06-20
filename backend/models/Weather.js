const mongoose = require("mongoose");

const weatherSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
      default: "Karnataka",
    },
    temperature: {
      type: Number,
      required: true,
    },
    windSpeed: {
      type: Number,
      required: true,
    },
    cloudCover: {
      type: Number,
      required: true,
    },
    humidity: {
      type: Number,
      required: true,
    },
    timestamp: {
      type: Date,
      default: Date.now,
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.model("Weather", weatherSchema);
