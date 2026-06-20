const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("../config/db");
const Forecast = require("../models/Forecast");

dotenv.config();

connectDB();

const forecastData = [
  {
    solarGeneration: 5400,
    windGeneration: 3200,
    solarConfidence: 88,
    windConfidence: 82,
    explanation:
      "Moderate cloud cover and good wind conditions expected across Karnataka.",
  },
  {
    solarGeneration: 5600,
    windGeneration: 3400,
    solarConfidence: 90,
    windConfidence: 84,
    explanation:
      "Clear skies and steady winds are expected during the afternoon, supporting increased solar and wind energy generation across Karnataka.",
  },
];

const importData = async () => {
  try {
    await Forecast.deleteMany();
    await Forecast.insertMany(forecastData);

    console.log("Forecast data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
