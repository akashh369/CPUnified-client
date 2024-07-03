import React, { useEffect, useState } from "react";
import DialogCompareComponent from '../DialogCompareComponent/DialogCompareComponent'
import "./ContestInfo.css";

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
import { getCodechefUsers } from "../../service/codechef.service";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

// ChartJS.defaults.color = 'yellow'
const chartAreaBorder = {
  id: "chartAreaBorder",
  beforeDraw(chart, args, options) {
    const {
      ctx,
      chartArea: { left, top, width, height },
    } = chart;
    ctx.save();
    ctx.strokeStyle = options.borderColor;
    ctx.lineWidth = options.borderWidth;
    ctx.setLineDash(options.borderDash || []);
    ctx.lineDashOffset = options.borderDashOffset;
    ctx.strokeRect(left, top, width, height);
    ctx.restore();
  },
};

const bodyStyle = `
.body-stying{
opacity : 0.3;
}`

const style = document.createElement('style');
style.appendChild(document.createTextNode(bodyStyle));

function ContestInfo(props) {
  const [showGraphCompare, setShowGraphCompare] = useState(false)
  let user1, user2
  const contestData = props.contestData;

  useEffect(() => {
    getCodechefUsers().then((res) => {
      user1 = res.data.user1[0]
      user2 = res.data.user2[0]

      console.log('users', user1, user2);
    })
      .catch(err => {

      })
  }, []);

  const enableDisableDialog = () => {
    const showGraph = showGraphCompare;
    setShowGraphCompare(!showGraph)
    if (showGraph) {
    }
    else {
      document.body.append('body-stylng');
      // document.body.remove('body-stylng');
    }

  };


  const options = {
    indexAxis: "y",
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
        min: contestData.minRating - 30,
        max: parseInt(contestData.maxRating),
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
        drawBorder: false,
        // padding : {
        //     left : 10
        // }
      },
    },
  };
  const previousContestsData = contestData.previousContests;
  const labels = previousContestsData.map((data) => {
    const a = data.contestName.split(" ");
    return `${a[0]} ${a[1]}`;
  });
  const data = {
    labels,
    datasets: [
      {
        label: "contest rating",
        data: contestData.previousContests.map(
          (singleData) => singleData.contestRating.rating
        ),
        borderColor: "#f5eeee",
        backgroundColor: "#f1a22b",
      },
    ],
  };

  return (
    <>
      <div className="contest-info-container common-container">
        <h1>Rating Graph</h1>
        <div className="bar-graph">
          <Bar options={options} data={data} />
          <div className="compare-button" onClick={() => { enableDisableDialog() }}>
            <a>compare</a>
          </div>
        </div>
      </div>
      {showGraphCompare ?
        <DialogCompareComponent enableDisableDialog={() => { enableDisableDialog() }} />
        : ""}

    </>
  );
}

export default ContestInfo;
