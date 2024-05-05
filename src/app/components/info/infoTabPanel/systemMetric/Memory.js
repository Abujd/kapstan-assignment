"use client";
import React, { useEffect, useState } from "react";
import { Line } from "react-chartjs-2";
import "chart.js/auto";
import {
  getCpuUtilization,
  getMemoryutilization,
} from "../../../../../../utils/ApiService";

function Memory(props) {
  const [cpuData, setCpuData] = useState({});
  const [labelData, setLabelData] = useState({});
  const [loading, setLoading] = useState(true);

  const options = {
    y: {
      min: 0,
      max: 100,
      ticks: {
        stepSize: 2,
      },
      grid: {
        display: false,
      },
    },
    x: {
      grid: {
        display: false,
      },
    },
    plugins: {
      legend: {
        position: "bottom",
        labels: {
          pointStyle: "circle",
        },
      },
    },
  };

  const fetchCpuUtilization = async () => {
    try {
      const res = await getMemoryutilization();
      const formattedData = processData(res);
      const formattedLabel = formatTimeLabels(res);
      setCpuData(formattedData);
      setLabelData(formattedLabel);
      setLoading(false);
      console.log("res", res, formattedData, formattedLabel);
    } catch (error) {
      console.log("Error :: ", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCpuUtilization();
  }, []);

  const formatTimeLabels = (apiResponse) => {
    const timeLabels = {};

    apiResponse.forEach((item) => {
      const { applicationId, timestamp } = item;

      if (!timeLabels[applicationId]) {
        timeLabels[applicationId] = [];
      }
      const tt = parseInt(timestamp) * 1000;
      const date = new Date(tt);
      const hours = date.getHours();
      const minutes = date.getMinutes();
      const formattedTime = `${hours < 10 ? "0" + hours : hours}:${
        minutes < 10 ? "0" + minutes : minutes
      } ${hours < 12 ? "AM" : "PM"}`;

      timeLabels[applicationId].push(formattedTime);
    });

    return timeLabels;
  };

  const processData = (apiResponse) => {
    const gameData = {};

    apiResponse.forEach((item) => {
      const { applicationId, memoryUtilization } = item;

      if (!gameData[applicationId]) {
        gameData[applicationId] = [];
      }

      gameData[applicationId].push(parseFloat(memoryUtilization));
    });

    return gameData;
  };

  const datasets = Object.keys(cpuData).map((applicationId, index) => {
    let label, color;
    switch (index) {
      case 0:
        label = "tic-tac-toe";
        color = "#6E27D5";
        break;
      case 1:
        label = "chess";
        color = "#B88BFE";
        break;
      case 2:
        label = "sudoku";
        color = "#F39C12";
        break;
      default:
        break;
    }
    return {
      abel: label,
      data: cpuData[applicationId],
      fill: false,
      borderColor: color,
      backgroundColor: color,
      pointStyle: "circle",
      tension: 0.1,
    };
  });

  const data = {
    labels: Object.values(labelData).flat(),
    datasets: datasets,
  };

  return (
    <div>
      {loading ? <div>Loading...</div> : <Line data={data} options={options} />}
    </div>
  );
}

export default Memory;
