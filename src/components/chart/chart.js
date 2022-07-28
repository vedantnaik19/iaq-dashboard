import React from "react";

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
  Legend
);



function Chart({ siteSensorDataLat }) {
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Realtime data",
      },
    },
  };


  const labels = Array.from(Array(15).keys());

const min = -1000;
const max = 1000;

console.log(siteSensorDataLat);

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: Array.from(Array(1895).keys()),
      borderColor: "rgb(255, 99, 132)",
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: Array.from(Array(12).keys()),
      borderColor: "rgb(53, 162, 235)",
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};
  
  return <Line options={options} data={data} />;
}

export default Chart;
