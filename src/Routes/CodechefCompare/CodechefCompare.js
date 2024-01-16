import React from 'react'
import Profile from '../../Components/Profile/Profile'
import './CodechefCompare.css'
import { data, userContestData } from '../../service/codechef.service'
import ContestInfo from '../../Components/ContestInfo/ContestInfo'
import ProblemsSolved from '../../Components/ProblemsSolved/ProblemsSolved'

function CodechefCompare() {
    const userData = data
    let contestData = userContestData
    contestData.previousContests = contestData.previousContests.reverse()

    document.addEventListener('mousemove', async event => {
        // dummyMouse.style.top = `${event.clientY}px`
        // await dummyMouse
        // const dummyMouse = await document.querySelector('.dummy-mouse')
        const dummyMouse = document.querySelector('.dummy-mouse');
        const vwby2 = window.innerWidth/2
        const reqvw = vwby2 -10
        if (dummyMouse) { // <-- moved the if outside, no need for an event listener if the element is not available
            document.addEventListener('mousemove', event => {
                console.log()
                const mouseTop = event.clientY -10
                const mouseLeft = (event.clientX <= vwby2 ? event.clientX + reqvw : event.clientX - reqvw)
                dummyMouse.style.transform = `translate(${mouseLeft}px,${mouseTop}px)`; // <-- added px
            });
        }
        // console.log("a",mouseTop) 
        // document.querySelector('.dummy-mouse') = `${event.clientY}px`

    })

    return (
        <>
            <div className="dummy-mouse">

            </div>
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