exports.getHealth = (req, res) => {
  res.status(200).json({
    success: true,
    message: "EnerVision API is healthy ✅",
    timestamp: new Date(),
  });
};
