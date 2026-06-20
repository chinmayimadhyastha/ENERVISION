const weatherData = require("../data/weatherData");

exports.getWeather = (req, res) => {
  res.status(200).json({
    success: true,
    count: weatherData.length,
    data: weatherData,
  });
};
