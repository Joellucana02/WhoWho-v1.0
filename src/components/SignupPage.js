import React from 'react'

const SignupPage = () => {
    return (
        <div>
  <div className="header">
    <div><a href="../index.html"><i className="fas fa-chevron-left" /></a></div>
    <p>Sign Up</p>
  </div>
  <div className="signup__box ">
    <p className="signup__box-text"> Sign Up with one of the following options.</p>
    <div className="signup__box-options">
      <div className="signup__box-option signup__box-options-google"><i className="fab fa-google" /></div>
      <div className="signup__box-option signup__box-options-apple"><i className="fab fa-apple" /></div>
    </div>
  </div>
  <div className="form__box">
    <form>
      <label htmlFor="fname">Name</label>
      <input type="text" id="fname" name="fname" placeholder="Enter your name" />
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" placeholder="youremail@example.com" />
      <label htmlFor="pwd">Password</label>
      <input type="password" id="pwd" name="pwd" placeholder="Pick a strong password" />
      <input type="submit" defaultValue="Create Account" />
      <p>Alredy have an account? <a href="login.html">Log in</a> </p>
    </form>
  </div>
</div>
    )
}

export default SignupPage
