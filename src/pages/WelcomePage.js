import React from 'react'
import { Link } from 'react-router-dom'
const WelcomePage = () => {
    return (
  <div>
            <div className="background__image">
            <img src="./media/whowho2.png" alt="owl" />
        </div>
        <div className="top__container">
            <h1>WhoWho</h1>
            <p>Make cool stuff, meet new people, be creative, be yourself</p>
        </div>
        <div className="button__container">
            <p className="button-box-top-text">Let's get started</p>
            <div className="button-box"><Link to='/signup'>SIGN UP</Link></div>
            <div className="button-box"><Link to='/login'>LOGIN</Link></div>
        </div>
</div>
        
    )
}

export default WelcomePage
