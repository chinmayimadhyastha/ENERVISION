function DashboardCard({ title, value }) {
  return (
    <div
      style={{
        width: "220px",
        padding: "40px",
        borderRadius: "20px",
        background: "rgba(17,24,39,0.7)",
        backdropFilter: "blur(10px)",
        border: "1px solid rgba(255,255,255,0.1)",
        boxShadow: "0px 8px 32px rgba(0,0,0,0.3)",
        transition:
          "transform 0.3s ease, box-shadow 0.3s ease, border 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = "translateY(-8px)";
        e.currentTarget.style.boxShadow = "0px 20px 45px rgba(56,189,248,0.35)";
        e.currentTarget.style.border = "1px solid rgba(56,189,248,0.4)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.boxShadow = "0px 8px 32px rgba(0,0,0,0.3)";
        e.currentTarget.style.border = "1px solid rgba(255,255,255,0.1)";
      }}
    >
      <h3
        style={{
          textAlign: "center",
          color: "#cbd5e1",
          marginBottom: "30px",
          fontSize: "1.5rem",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          textAlign: "center",
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#ffffff",
          margin: 0,
        }}
      >
        {value}
      </p>
    </div>
  );
}

export default DashboardCard;
