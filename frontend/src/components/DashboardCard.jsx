function DashboardCard({ title, value }) {
  return (
    <div
      style={{
        border: "1px solid #ddd",
        borderRadius: "12px",
        padding: "20px",
        minWidth: "220px",
      }}
    >
      <h3>{title}</h3>
      <h2>{value}</h2>
    </div>
  );
}

export default DashboardCard;
