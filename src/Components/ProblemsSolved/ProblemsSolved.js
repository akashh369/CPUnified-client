import React from 'react'
import './ProblemsSolved.css'
import moment from 'moment';

import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      display: false,
      position: 'top',
    },
    title: {
      display: false,
      text: 'Chart.js Line Chart',
    },
  },
  scales: {
    x: {
      border: {
        color: 'white'
      },
      grid: {
        color: 'grey',
        borderColor: 'grey',
        tickColor: 'white'
      },
      ticks: {
        color: 'white',
        // padding : 20,
      }
    },
    y: {
      border: {
        color: 'white'
      },
      grid: {
        color: 'grey',
        borderColor: 'grey',
        tickColor: 'white'
      },
      ticks: {
        color: 'white'
      },
      drawBorder: false,
      max: 20,
    },
  }
};


function ProblemsSolved(props) {
  const heatArray = props.heatArray
  const labels = heatArray.map((data) => moment(data.date).format('DD MMM')).slice(-30)
  const data = {
    labels,
    datasets: [
      {
        label: 'submissions',
        data: heatArray.map((singleDay) => singleDay.count > 19 ? 19 : singleDay.count).slice(-30),
        borderColor: 'rgb(255,160,21)',
        backgroundColor: '#fff',
      }
    ]
  }
  // heatArray.map((data) => { console.log(moment(data.date.$date).format('DD MMM')) })
  return (
    <>
      <div className='problems-solved-container common-container'>
        <h1>
          Previous Submissions Count

        </h1>
        <Line options={options} data={data} />
      </div>
    </>
  )
}

export default ProblemsSolved