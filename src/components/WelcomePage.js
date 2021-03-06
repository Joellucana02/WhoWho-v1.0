import React from 'react'

const WelcomePage = () => {
    return (
  <div>
            <div className="background__image">
            <img src="some images/whowho2.png" alt="owl" />
        </div>
        <div className="top__container">
            <h1>WhoWho</h1>
            <p>Make cool stuff, meet new people, be creative, be yourself</p>
        </div>
        <div className="button__container">
            <p className="button-box-top-text">Let's get started</p>
            <div className="button-box"><a href="login/signup.html">SIGN UP</a></div>
            <div className="button-box"><a href="login/login.html">LOG IN</a></div>
        </div>
</div>
        
    )
}

export default WelcomePage
