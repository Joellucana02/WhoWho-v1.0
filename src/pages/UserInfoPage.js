import React, { useState } from 'react'

const UserInfoPage = () => {
  const [error, setError] = useState('')
  const handleLogout = (e)=>{

  } 
    return (
        <div>
  <div className="user__info">
    <div className="user__info-container">
      <div className="user__info-top">
        <img src="https://randomuser.me/api/portraits/men/83.jpg" alt="randomuser" />
        <div className="user__info-top-right">
          <p>John Smith</p>
          <p>WhoWho user</p>
          <div className="user__info-top-right-boxes">
            <div>
              <p>Connections</p>
              <p>74</p>
            </div>
            <div>
              <p>Followers</p>
              <p>9.1K</p>
            </div>
            <div>
              <p>Following</p>
              <p>67</p>
            </div>
          </div>
        </div>
      </div>
      <div className="user__info-boxes">
        <div className="user__info-box">
          <a href="#">Chat</a>
        </div>
        <div className="user__info-box">
          <a href="#">Follow</a>
        </div>
      </div>
    </div>
  </div>
  <div className="user__settings">
    <div className="user__s user__photo">
      <p>Profile photo</p>
    </div>
    <div className="user__s user__name">
      <p>Username</p>
    </div>
    <div className="user__s user__delete">
      <p>Delete Account</p>
    </div>
  
    <div className="user__s user__delete">
      <div className="btn"><a href="../home/home.html"><i className="fas fa-home" /></a>
      </div>
    </div>
  </div>
</div>
    )
}

export default UserInfoPage
