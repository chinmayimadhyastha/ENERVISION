import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Line } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
);

const SolarChart = () => {
  const data = {
    labels: ["9 AM", "12 PM", "3 PM", "6 PM"],
    datasets: [
      {
        label: "Solar Generation (MW)",
        data: [3200, 5400, 5600, 4000],
        borderColor: "#facc15",
        backgroundColor: "rgba(250,204,21,0.15)",
        fill: true,
        pointRadius: 5,
        pointHoverRadius: 8,
        borderWidth: 3,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        labels: {
          color: "#ffffff",
        },
      },
    },
    scales: {
      x: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "#333",
        },
      },
      y: {
        ticks: {
          color: "#ffffff",
        },
        grid: {
          color: "#333",
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default SolarChart;
