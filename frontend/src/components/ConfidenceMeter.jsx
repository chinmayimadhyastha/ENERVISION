const ConfidenceMeter = ({ title, value }) => {
  return (
    <div
      style={{
        background: "rgba(17,24,39,0.7)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0px 8px 32px rgba(0,0,0,0.3)",
        padding: "20px",
        borderRadius: "20px",
      }}
    >
      <h3>{title}</h3>

      <p
        style={{
          color: "#22c55e",
          marginBottom: "10px",
          fontWeight: "bold",
        }}
      >
        Excellent Prediction Confidence
      </p>

      <div
        style={{
          width: "100%",
          height: "20px",
          background: "#374151",
          borderRadius: "20px",
          marginTop: "20px",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            width: `${value}%`,
            height: "100%",
            background: "#22c55e",
            borderRadius: "20px",
          }}
        />
      </div>

      <p
        style={{
          marginTop: "15px",
        }}
      >
        {value}%
      </p>
    </div>
  );
};

export default ConfidenceMeter;
