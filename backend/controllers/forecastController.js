const forecastData = require("../data/forecastData");

exports.getForecast = (req, res) => {
  res.status(200).json({
    success: true,
    count: forecastData.length,
    data: forecastData,
  });
};
