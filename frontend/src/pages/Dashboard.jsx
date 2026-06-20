import { useEffect, useState } from "react";
import api from "../services/api";
import DashboardCard from "../components/DashboardCard";

function Dashboard() {
  const [weather, setWeather] = useState([]);
  const [forecast, setForecast] = useState([]);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      const weatherRes = await api.get("/weather");
      const forecastRes = await api.get("/forecast");

      setWeather(weatherRes.data.data);
      setForecast(forecastRes.data.data);
    } catch (error) {
      console.log(error);
    }
  };

  const latestWeather = weather[weather.length - 1];

  return (
    <div style={{ padding: "30px" }}>
      <h1>EnerVision Dashboard</h1>

      {/* Dashboard Cards */}
      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {forecast.map((item) => (
          <div
            key={item.source}
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            <DashboardCard
              title={`${item.source} Generation`}
              value={`${item.predictedGeneration} MW`}
            />

            <DashboardCard
              title={`${item.source} Confidence`}
              value={`${item.confidence}%`}
            />
          </div>
        ))}

        {latestWeather && (
          <>
            <DashboardCard
              title="Temperature"
              value={`${latestWeather.temperature} °C`}
            />

            <DashboardCard
              title="Wind Speed"
              value={`${latestWeather.windSpeed} km/h`}
            />

            <DashboardCard
              title="Cloud Cover"
              value={`${latestWeather.cloudCover}%`}
            />
          </>
        )}
      </div>

      {/* Forecast Explanations */}
      <div style={{ marginTop: "40px" }}>
        <h2>Forecast Explanations</h2>

        {forecast.map((item) => (
          <div
            key={`${item.source}-explanation`}
            style={{
              border: "1px solid #333",
              padding: "20px",
              borderRadius: "12px",
              marginTop: "20px",
            }}
          >
            <h3>{item.source} Forecast</h3>
            <p>{item.explanation}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;
