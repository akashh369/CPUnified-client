import React from 'react'
import Profile from '../../Components/Profile/Profile'
import './CodechefCompare.css'
import { data, userContestData } from '../../service/codechef.service'
import ContestInfo from '../../Components/ContestInfo/ContestInfo'
import ProblemsSolved from '../../Components/ProblemsSolved/ProblemsSolved'

function CodechefCompare() {
    const userData = data
    let contestData = userContestData
    contestData.previousContests=contestData.previousContests.reverse()
    
    return (
        <>
            <div className="main-container">
                <div className="container-left">
                    <Profile username={data.username} userinfo={data.userInfo} />
                    <ContestInfo contestData={contestData} />
                    <ProblemsSolved heatArray={data.heatMap} />
                </div>
                <div className="container-right">
                    <Profile username={data.username} userinfo={data.userInfo} />
                    <ContestInfo contestData={contestData} />
                    <ProblemsSolved heatArray={data.heatMap} />
                </div>
            </div>

        </>
    )
}

export default CodechefCompare