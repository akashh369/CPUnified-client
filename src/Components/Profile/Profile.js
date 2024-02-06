import React, { useState } from 'react'
import './Profile.scss'

import DialogBox from '../DialogBox/DialogBox'

function Profile(props) {
  const { username, userinfo, updateUserData, getUserData } = props
  const [showDialog, setShowDialog] = useState(false)
  const [inputBar, setInputBar] = useState(false)
  const [inputValue, setInputValue] = useState('');
  function updateFunction() {
    updateUserData(username)
  }
  function toggleDialogBox() {
    // showDialog ? setShowDialog(false) : setShowDialog(true)
    // setShowDialog(true)
  }
  const photo = username.Profile
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  function fetchData(e) {
    if (e.key == "Enter") {

      getUserData(inputValue)
      setInputValue("")
      setInputBar(false)
    }
  }


  return (<>
    <div className='profile-container common-container'>
      <div className="profile-photo">
        <img src={userinfo.profile} loading='lazy' />
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
            {inputBar ?
              <input type="text" value={inputValue} onChange={handleInputChange} onKeyUp={fetchData} />
              : <h3>
                <button onClick={() => {
                  setInputBar(true)
                }}>
                  Change handle User
                </button>
                {/* {showDialog ? <DialogBox clickClose={() => { setShowDialog(false) }} /> : null} */}
              </h3>}
          </div>

          <div className="name-ranking">
            <h3>
              <button onClick={async () => {
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