import React, { useState } from 'react'
import './Profile.scss'

import DialogBox from '../DialogBox/DialogBox'

function Profile(props) {
  const { username, userinfo, updateUserData } = props
  const [ showDialog, setShowDialog ] = useState(false)
  function updateFunction() {
    console.log("click")
    updateUserData(username)
  }
  function toggleDialogBox() {
    // showDialog ? setShowDialog(false) : setShowDialog(true)
    // setShowDialog(true)
    console.log("showDialog")
  }
  // console.log("updateUserData=",updateUserData)
  console.log("abc")
  const photo = username.Profile
  return (<>
    <div className='profile-container common-container'>
      <div className="profile-photo">
        <img src={userinfo.profile} />
        <a style={{ margin: "0 auto" }} href={`https://www.codechef.com/users/${username}`} target='_blank'>CodeChef Profile</a>
      </div>
      <div className="user-info">
        <div className="name-star-rating">
          <div className="name-ranking">
            <h3>Name : </h3>{userinfo.name}
          </div>
          <div className="stars">
            {
              userinfo.stars
            }
          </div>
        </div>

        <div className="name-ranking">
          <h3>
            Global Rank :
          </h3>
          {(userinfo.globalRank) ? userinfo.globalRank : "Inactive"}
        </div>
        <div className="name-ranking">
          <h3>
            Country Rank :
          </h3>
          {(userinfo.countryRank) ? userinfo.countryRank : "Inactive"}
        </div>

        <div className="name-star-rating">

          <div className="name-ranking">
            <h3>
              Highest Rating :
            </h3>
            {(userinfo.highestRating) ? userinfo.highestRating : "--"}
          </div>

          <div className="name-ranking">
            <h3>
              Current Rating :
            </h3>
            {(userinfo.currentRating) ? userinfo.currentRating : "--"}
          </div>
        </div>


        <div className="profile-footer">

          <div className="name-ranking">
            <h3>
              <button onClick={() => {
                setShowDialog(true)
              }}>
                Change handle User
              </button>
              {showDialog ? <DialogBox clickClose={()=>{setShowDialog(false)}}/> : null}
            </h3>
          </div>

          <div className="name-ranking">
            <h3>
              <button onClick={async () => {
                console.log("click")
                await updateUserData(username)
              }}>
                Refresh Data
              </button>

            </h3>
          </div>
        </div>
      </div>
    </div >
  </>
  )
}

export default Profile