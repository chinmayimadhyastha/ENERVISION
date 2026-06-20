const timeline = [
  {
    time: "9 AM",
    temperature: 28,
  },
  {
    time: "12 PM",
    temperature: 31,
  },
  {
    time: "3 PM",
    temperature: 30,
  },
  {
    time: "6 PM",
    temperature: 27,
  },
];

const WeatherTimeline = () => {
  return (
    <div
      style={{
        background: "rgba(17,24,39,0.7)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0px 8px 32px rgba(0,0,0,0.3)",
        padding: "30px",
        borderRadius: "20px",
      }}
    >
      <h2
        style={{
          textAlign: "center",
          marginBottom: "10px",
        }}
      >
        Weather Timeline
      </h2>

      <h3
        style={{
          color: "#38bdf8",
          textAlign: "center",
          marginBottom: "30px",
          fontWeight: "500",
        }}
      >
        Next 12 Hours
      </h3>

      {timeline.map((item) => (
        <div
          key={item.time}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: "18px 0",
            borderBottom: "1px solid rgba(255,255,255,0.08)",
          }}
        >
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              fontSize: "1.2rem",
            }}
          >
            🌤 {item.time}
          </span>

          <span
            style={{
              color: "#38bdf8",
              fontWeight: "bold",
            }}
          >
            {item.temperature}°C
          </span>
        </div>
      ))}
    </div>
  );
};

export default WeatherTimeline;
