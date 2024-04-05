import React, { useEffect } from 'react'
import { STORAGE_KEYS } from '../../commonService/enum'
import { previousContests } from '../../service/constants';
import './DialogCompareComponent.css'

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

import { Bar } from "react-chartjs-2";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);


function DialogCompareComponent(props) {
  const {enableDisableDialog} = props;

  const ccUserRef1 = window.localStorage.getItem(STORAGE_KEYS.CC_USER1);
  const ccUserRef2 = window.localStorage.getItem(STORAGE_KEYS.CC_USER2);

  const labels = previousContests.map((data) => {
    const a = data.contestName.split(" ");
    return `${a[0]} ${a[1]}`;
  });
  const data = {
    labels,
    datasets: [
      {
        label: "contest rating1",
        data: previousContests.map(
          (singleData) => singleData.contestRating.rating
        ),
        borderColor: "#f5eeee",
        backgroundColor: "#3FCD55",
      },
      {
        label: "contest rating2",
        data: (previousContests.map(
          (singleData) => singleData.contestRating.rating + 50
        )).reverse(),
        borderColor: "#f5eeee",
        backgroundColor: "#3F52CD",
      },
    ],
  };

  const options = {
    // indexAxis: "x",
    elements: {
      bar: {
        borderWidth: 2,
      },
    },
    responsive: true,
    plugins: {
      legend: {
        display: false,
        position: "top",
      },
      title: {
        display: false,
        text: "Rating Graph",
        color: "#fff",
        font: {
          size: 20,
          family: "Lora",
        },
      },
    },
    scales: {
      x: {
        barPercentage: 0.4,
        border: {
          color: "white",
        },
        grid: {
          color: "grey",
          borderColor: "grey",
          tickColor: "white",
        },
        font: {
          size: 20,
          family: "Lora",
        },
        ticks: {
          color: "white",
          // padding : 20,
        },
        color: "#fff",
        // min: contestData.minRating - 30,
        // max: parseInt(contestData.maxRating),
        // padding : {
        //     left : 10
        // }
      },
      y: {
        // barPercentage: 0.4,
        border: {
          color: "white",
        },
        grid: {
          color: "grey",
          borderColor: "grey",
          tickColor: "white",
        },
        ticks: {
          color: "white",
        },
        min: 1600,
        max: 1700,
        drawBorder: false,
        // padding : {
        //     left : 10
        // }
      },
    },
  };

  // const options = {
  //   type: 'bar',
  //   data: data,
  //   options: {
  //     responsive: true,
  //     plugins: {
  //       legend: {
  //         position: 'top',
  //       },
  //       title: {
  //         display: true,
  //         text: 'Chart.js Bar Chart'
  //       }
  //     }
  //   },
  // }
  return (
    <div >
      <div className="compare-graph-container">
        <div className="dialog-button" onClick={()=>{enableDisableDialog()}}>
          <svg xmlns="http://www.w3.org/2000/svg" height="40" viewBox="0 0 512 512"><path fill="#ffffff" d="M464 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h416c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-83.6 290.5c4.8 4.8 4.8 12.6 0 17.4l-40.5 40.5c-4.8 4.8-12.6 4.8-17.4 0L256 313.3l-66.5 67.1c-4.8 4.8-12.6 4.8-17.4 0l-40.5-40.5c-4.8-4.8-4.8-12.6 0-17.4l67.1-66.5-67.1-66.5c-4.8-4.8-4.8-12.6 0-17.4l40.5-40.5c4.8-4.8 12.6-4.8 17.4 0l66.5 67.1 66.5-67.1c4.8-4.8 12.6-4.8 17.4 0l40.5 40.5c4.8 4.8 4.8 12.6 0 17.4L313.3 256l67.1 66.5z" /></svg>
        </div>
        <Bar options={options} data={data} />
      </div>
    </div>
  )
}

export default DialogCompareComponent