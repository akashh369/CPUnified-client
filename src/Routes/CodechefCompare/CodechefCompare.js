import React from 'react'
import Profile from '../../Components/Profile/Profile'
import './CodechefCompare.css'
import {data, userContestData} from '../../service/codechef.service'
import ContestInfo from '../../Components/ContestInfo/ContestInfo'

function CodechefCompare() {
    const userData = data
    const contestData = userContestData
    return (
        <>
        <Profile username={data.username} userinfo={data.userInfo}/>
        <ContestInfo contestData={contestData}/>
        </>
    )
}

export default CodechefCompare