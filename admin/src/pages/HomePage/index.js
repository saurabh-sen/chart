/*
 *
 * HomePage
 *
 */

import React, { useEffect, useState } from "react";
// import PropTypes from 'prop-types';
import pluginId from "../../pluginId";
import "./styles.css";
import LineChart from "../../components/LineChart";
import { CategoryScale } from "chart.js";
import Chart from "chart.js/auto";

Chart.register(CategoryScale);

const HomePage = () => {
  const [chartData, setChartData] = useState({
    labels: [],

    datasets: [
      {
        label: "Loading... ",
        data: [],
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#f0331a",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "red",
        borderWidth: 2,
      },
    ],
  });

  return (
    <div className="main">
      <h1>{pluginId}&apos;s HomePage</h1>
      <p>Happy coding lorem2 </p>
      {/* <LineChart chartData={chartData} /> */}
      <div className="chart-container chartArea">
        <h2 style={{ textAlign: "center" }}>Sales Analytics</h2>
        <Line
          data={chartData}
          options={{
            plugins: {
              title: {
                display: true,
                text: "Analytics",
              },
              legend: {
                display: true,
              },
            },
          }}
        />
      </div>
    </div>
  );
};

export default HomePage;
