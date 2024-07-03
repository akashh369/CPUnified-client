import React from 'react'
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material'
import codeChef from '../../assets/Codechef2.jpeg'
import leetCode from '../../assets/leetCode3.png'
import codeForce from '../../assets/codeforces.png'
import './Cards.scss'


const Cards = (props) => {
  let { codingPlatform, contestName, startTime, endTime, live = false, url, banner, contestTime } = props;
  let imageSrc, imgWidth;
  switch (codingPlatform) {
    case "LEETCODE":
      imageSrc = leetCode;
      imgWidth = 400;
      break;
    case "CODEFORCES":
      imageSrc = codeForce;
      imgWidth = 350;
      break;
    default:
      imageSrc = codeChef;
      imgWidth = 400;

  }
  return (
    /*----------------------old-card-------------------*/
    // <div className='card-container'>
    //     <div className='container1'>
    //         <img src={imageSrc} />
    //     </div>
    //     <div className='container2'>
    //         <div className='card-container-title' style={contestName.length >40 ? { fontSize: '1rem'} : {fontSize: '1.3rem' }}>
    //             {contestName}
    //         </div>
    //         <div className='card-container-hyperlink'>
    //             <a href={url} target='parent' >{contestTime == 'future' ? "Register" : "Go To Contest"}</a>
    //         </div>
    //     </div>
    //     {/*---------------------- for right semi-circle -------------------------------*/}
    //     <div className='container3'></div>
    // </div >

    /*----------------------new-card--------------------*/
    <div className="card-container">
      <div className="card">
        <div className="card-header">
          <img src={imageSrc} className="logo" />
          <span className="date">{startTime}</span>
        </div>
        <div className="card-content">
          <h2 className="card-title">{contestName}</h2>
          <a href={url} target='parent' className="register-btn">{contestTime == 'future' ? "Register" : "Go To Contest"}</a>
        </div>
      </div>
    </div>
  )
}

export default Cards