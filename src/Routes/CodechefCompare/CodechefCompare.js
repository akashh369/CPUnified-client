import React from 'react'
import Profile from '../../Components/Profile/Profile'
import './CodechefCompare.css'
import {data} from '../../service/codechef.service'

function CodechefCompare() {
    const userData = data
    return (
        <>
        <Profile username={data.username} userinfo={data.userInfo}/>
        
        </>
    )
}

export default CodechefCompare