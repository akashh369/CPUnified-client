import React from 'react'
import './Profile.scss'

function Profile(props) {
  const { username, userinfo } = props
  const photo = username.Profile
  console.log("user=", userinfo)
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
              <a href="">
                Change handle User
              </a>

            </h3>
          </div>

          <div className="name-ranking">
            <h3>
              <a href="">Refresh Data</a>

            </h3>
          </div>
        </div>
      </div>
    </div>
  </>
  )
}

export default Profile