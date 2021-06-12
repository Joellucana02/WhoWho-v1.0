import React from 'react'

const LoginPage = () => {
    return (
        <div>
  <div className="header">
    <div><a href="../index.html"><i className="fas fa-chevron-left" /></a></div>
    <p>Log In</p>
  </div>
  <div className="signup__box">
    <p className="signup__box-text">Log In with one of the following options.</p>
    <div className="signup__box-options">
      <div className="signup__box-option signup__box-options-google"><i className="fab fa-google" /></div>
      <div className="signup__box-option signup__box-options-apple"><i className="fab fa-apple" /></div>
    </div>
  </div>
  <div className="form__box">
    <form>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="youremail@example.com" />
      <label htmlFor="pwd">Password</label>
      <input type="password" id="pwd" name="pwd" placeholder="Pick a strong password" />
      <input type="submit" defaultValue="Log in" />
      <p>Don't have an account? <a href="signup.html">Sign Up</a> </p>
    </form>
  </div>
</div>
    )
}

export default LoginPage
