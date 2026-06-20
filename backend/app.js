const express = require("express");
const cors = require("cors");

const healthRoutes = require("./routes/healthRoutes");
const weatherRoutes = require("./routes/weatherRoutes");
const forecastRoutes = require("./routes/forecastRoutes");

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Test Route
app.get("/", (req, res) => {
  res.json({
    success: true,
    message: "EnerVision API is running 🚀",
  });
});

app.use("/api/health", healthRoutes);
app.use("/api/weather", weatherRoutes);
app.use("/api/forecast", forecastRoutes);

module.exports = app;
