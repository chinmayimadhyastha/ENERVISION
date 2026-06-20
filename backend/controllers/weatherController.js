const Weather = require("../models/Weather");

const getWeather = async (req, res) => {
  try {
    const weather = await Weather.find().sort({
      createdAt: -1,
    });

    res.status(200).json(weather);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getWeather };
