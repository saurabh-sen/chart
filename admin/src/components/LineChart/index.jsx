import React from "react";
import { Line } from "react-chartjs-2";

function LineChart({ chartData }) {
  return (
    <div className="chart-container chartArea">
      <h2 style={{ textAlign: "center" }}>Sales Analytics</h2>
      <Line
        data={chartData}
        options={{
          plugins: {
            title: {
              display: true,
              text: "Analytics"
            },
            legend: {
              display: true
            }
          }
        }}
      />
    </div>
  );
}

export default LineChart;
