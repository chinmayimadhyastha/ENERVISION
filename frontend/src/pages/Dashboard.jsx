import { useEffect, useState } from "react";
import api from "../services/api";
import DashboardCard from "../components/DashboardCard";
import SolarChart from "../components/SolarChart";
import WindChart from "../components/WindChart";
import ConfidenceMeter from "../components/ConfidenceMeter";
import WeatherTimeline from "../components/WeatherTimeline";

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

      setWeather(weatherRes.data);
      setForecast(forecastRes.data);
    } catch (error) {
      console.log(error);
    }
  };

  const latestWeather = weather[weather.length - 1];
  const latestForecast = forecast[0];

  return (
    <div
      style={{
        padding: "40px",
        maxWidth: "1400px",
        margin: "0 auto",
      }}
    >
      {/* Dashboard Title */}
      <h1
        style={{
          textAlign: "center",
          fontSize: "3.2rem",
          lineHeight: "1.2",
          paddingTop: "20px",
          marginBottom: "20px",
          background: "linear-gradient(90deg, #38bdf8, #22c55e, #facc15)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        EnerVision Dashboard
      </h1>
      <p
        style={{
          textAlign: "center",
          color: "#22c55e",
          fontWeight: "bold",
          marginBottom: "20px",
        }}
      >
        Renewable Energy Forecasting and Visualization Platform
      </p>

      {/* Status Badges */}
      {latestForecast && (
        <div
          style={{
            display: "flex",
            gap: "15px",
            justifyContent: "center",
            flexWrap: "wrap",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              background: "#14532d",
              color: "#4ade80",
              padding: "10px 20px",
              borderRadius: "20px",
              fontWeight: "bold",
            }}
          >
            ⚡ Solar: {latestForecast.solarGeneration} MW
          </div>

          <div
            style={{
              background: "#082f49",
              color: "#38bdf8",
              padding: "10px 20px",
              borderRadius: "20px",
              fontWeight: "bold",
            }}
          >
            🌬 Wind: {latestForecast.windGeneration} MW
          </div>
        </div>
      )}

      {/* Last Updated */}
      <>
        <p
          style={{
            textAlign: "center",
            color: "#94a3b8",
            marginBottom: "10px",
          }}
        >
          Last Updated: {new Date().toLocaleString()}
        </p>

        <p
          style={{
            textAlign: "center",
            color: "#38bdf8",
            marginBottom: "40px",
            fontWeight: "500",
          }}
        >
          📍 Bengaluru, Karnataka, India
        </p>
      </>

      {/* Dashboard Cards */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "25px",
          justifyItems: "center",
          maxWidth: "1000px",
          margin: "0 auto",
        }}
      >
        {latestForecast && (
          <>
            <DashboardCard
              title="⚡ Solar Generation"
              value={`${latestForecast.solarGeneration} MW`}
            />

            <DashboardCard
              title="🌬 Wind Generation"
              value={`${latestForecast.windGeneration} MW`}
            />

            <DashboardCard
              title="🎯 Solar Confidence"
              value={`${latestForecast.solarConfidence}%`}
            />

            <DashboardCard
              title="🎯 Wind Confidence"
              value={`${latestForecast.windConfidence}%`}
            />
          </>
        )}

        {latestWeather && (
          <>
            <DashboardCard
              title="🌡 Temperature"
              value={`${latestWeather.temperature} °C`}
            />

            <DashboardCard
              title="💨 Wind Speed"
              value={`${latestWeather.windSpeed} km/h`}
            />

            <DashboardCard
              title="☁ Cloud Cover"
              value={`${latestWeather.cloudCover}%`}
            />
          </>
        )}
      </div>

      {/* Forecast Explanation */}
      <div style={{ marginTop: "50px" }}>
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          Forecast Explanation
        </h2>

        {latestForecast && (
          <div
            style={{
              background: "rgba(17,24,39,0.7)",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
              boxShadow: "0px 8px 32px rgba(0,0,0,0.3)",
              padding: "30px",
              borderRadius: "20px",
              textAlign: "center",
            }}
          >
            <p
              style={{
                color: "#38bdf8",
                fontWeight: "bold",
                marginBottom: "15px",
              }}
            >
              AI Forecast Insight
            </p>

            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.8",
              }}
            >
              {latestForecast.explanation}
              Supporting weather conditions indicate favourable renewable energy
              generation across Karnataka.
            </p>
          </div>
        )}
      </div>

      {/* Solar Chart */}
      <div
        style={{
          background: "rgba(17,24,39,0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0px 8px 32px rgba(0,0,0,0.3)",
          padding: "30px",
          borderRadius: "20px",
          marginTop: "50px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          ☀ Solar Generation Forecast
        </h2>

        <SolarChart />
      </div>

      {/* Wind Chart */}
      <div
        style={{
          background: "rgba(17,24,39,0.7)",
          backdropFilter: "blur(10px)",
          border: "1px solid rgba(255,255,255,0.1)",
          boxShadow: "0px 8px 32px rgba(0,0,0,0.3)",
          padding: "30px",
          borderRadius: "20px",
          marginTop: "40px",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            marginBottom: "20px",
          }}
        >
          🌬 Wind Generation Forecast
        </h2>

        <WindChart />
      </div>

      {/* Confidence Meters */}
      {latestForecast && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
            gap: "20px",
            marginTop: "40px",
          }}
        >
          <ConfidenceMeter
            title="Solar Confidence"
            value={latestForecast.solarConfidence}
          />

          <ConfidenceMeter
            title="Wind Confidence"
            value={latestForecast.windConfidence}
          />
        </div>
      )}

      {/* Weather Timeline */}
      <div style={{ marginTop: "50px" }}>
        <WeatherTimeline />
      </div>

      <p
        style={{
          textAlign: "center",
          color: "#64748b",
          marginTop: "60px",
          marginBottom: "20px",
          fontSize: "0.9rem",
        }}
      >
        EnerVision © 2026 | Renewable Energy Forecasting and Visualization
        Platform
      </p>
    </div>
  );
}

export default Dashboard;
