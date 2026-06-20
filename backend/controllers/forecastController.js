const Forecast = require("../models/Forecast");

const getForecast = async (req, res) => {
  try {
    const forecast = await Forecast.find().sort({
      createdAt: -1,
    });

    res.status(200).json(forecast);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

module.exports = { getForecast };
