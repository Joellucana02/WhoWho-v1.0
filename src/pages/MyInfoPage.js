import React from 'react'

const MyInfoPage = () => {
    return (
        <div>
  <div className="user__info">
    <div className="user__info-container">
      <div className="user__info-top">
        <img src="https://randomuser.me/api/portraits/women/33.jpg" alt="randomuser" />
        <div className="user__info-top-right">
          <p>Jane Doe</p>
          <p>WhoWho user</p>
          <div className="user__info-top-right-boxes">
            <div>
              <p>Connections</p>
              <p>67</p>
            </div>
            <div>
              <p>Followers</p>
              <p>6.9K</p>
            </div>
            <div>
              <p>Following</p>
              <p>767</p>
            </div>
          </div>
        </div>
      </div>
      <div className="user__info-boxes">
        <div className="user__info-box">
          <a href="#">Explore</a>
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

export default MyInfoPage
