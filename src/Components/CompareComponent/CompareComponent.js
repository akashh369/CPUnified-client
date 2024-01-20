import React, { useState, useEffect } from 'react'
import './CompareComponent.css'
import Profile from '../Profile/Profile'
import ContestInfo from '../ContestInfo/ContestInfo'
import ProblemsSolved from '../ProblemsSolved/ProblemsSolved'
import { getUserData, refreshUserData } from '../../service/codechef.service'

function CompareComponent() {

    const [userData, setUserData] = useState(undefined)
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        setLoading(true)
        getUserData().then((res) => {
            let response = res.data
            response.previousContests = response.previousContests.reverse()
            setUserData(response)

            console.log(userData, res.data)
        })
            .catch(err => {
                console.log("err", err)
            })
    }, [])

    useEffect(() => {
        if (userData != undefined)
            setLoading(false)
    }, [userData])
    // console.log("userData=", userData)


    const updateUserData = async function (username) {
        setLoading(false)
        const data = await refreshUserData(username)
        const response = data.data
        response.previousContests = response.previousContests.reverse()
        setUserData(response)
        setLoading(true)
        // response.previousContests = response.previousContests.reverse()
        // setUserData(response)
    }

    const getUserDataFromService = function (username) {
        const response = getUserData(username).then((res) => {
            const response = res.data
            if (response?.success == false) {
                alert(userData.error)
            }
            else {
                response.previousContests = response.previousContests.reverse()
                setUserData(response)
            }
        })
        // response.previousContests = response.previousContests.reverse()
        // setUserData(response)
    }

    return (
        <>
            {!loading ?
                <div className="compare-container">
                    <Profile username={userData.user.username} userinfo={userData.user.userInfo} updateUserData={updateUserData} getUserData={getUserDataFromService} />
                    <ContestInfo contestData={userData} />
                    <ProblemsSolved heatArray={userData.user.heatMap} />
                </div>
                : <div></div>
            }
        </>
    )
}

export default CompareComponent