import React from 'react'
import { Card, CardContent, Typography, CardActions, Button, Box } from '@mui/material'
import codeChef from '../../assets/Codechef2.png'
import leetCode from '../../assets/leetCode3.png'
import './Cards.scss'


const Cards = (props) => {
    const { codingPlatform, contestName, startTime, endTime, live = false, url, banner, contestTime } = props;
    let imageSrc, imgWidth;
    switch (codingPlatform) {
        case "LEETCODE":
            imageSrc = leetCode;
            imgWidth = 400;
            break;
        case "CODEFORCES":
            imageSrc = banner;
            imgWidth = 350;
            break;
        default:
            imageSrc = codeChef;
            imgWidth = 400;

    }
    return (
        <div className='card-container'>
            <div className='card-container-img'>
                <img src={imageSrc} />
            </div>
            <div className='card-container-info'>
                <div className='card-container-title'>
                    {codingPlatform == "CODEFORCES" ? <h3>{contestName}</h3> : <h2>{contestName}</h2>}
                </div>
                <div className='card-container-hyperlink'>
                    <a href={url} target='parent' >{contestTime == 'future' ? "Register" : "Go To Contest"}</a>
                </div>
            </div>
        </div >
    )
}

export default Cards