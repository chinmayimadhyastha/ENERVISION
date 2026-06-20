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

      <div
        style={{
          display: "flex",
          gap: "20px",
          flexWrap: "wrap",
        }}
      >
        {forecast.map((item) => (
          <DashboardCard
            key={item.source}
            title={`${item.source} Generation`}
            value={`${item.predictedGeneration} MW`}
          />
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
    </div>
  );
}

export default Dashboard;
