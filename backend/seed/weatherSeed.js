const mongoose = require("mongoose");
const dotenv = require("dotenv");

const connectDB = require("../config/db");
const Weather = require("../models/Weather");

dotenv.config();

connectDB();

const weatherData = [
  {
    location: "Bengaluru, Karnataka",
    temperature: 30,
    windSpeed: 12,
    cloudCover: 35,
    humidity: 68,
  },
  {
    location: "Mysuru, Karnataka",
    temperature: 29,
    windSpeed: 10,
    cloudCover: 40,
    humidity: 72,
  },
  {
    location: "Hubballi, Karnataka",
    temperature: 32,
    windSpeed: 15,
    cloudCover: 25,
    humidity: 60,
  },
];

const importData = async () => {
  try {
    await Weather.deleteMany();
    await Weather.insertMany(weatherData);

    console.log("Weather data seeded successfully!");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

importData();
