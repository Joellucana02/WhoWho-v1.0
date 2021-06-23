import React,{useRef, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from '../context/authContext'

const LoginPage = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const {login, currentUser} = useAuth()
  const history = useHistory()
  const handleSubmit= async (e)=>{
    e.preventDefault();
    
    try {
      setError('')
      setLoading(true)
      await login(emailRef.current.value, passwordRef.current.value)
      history.push('/dashboard')
    } catch (error) {
      console.log(error)
      setError('Failed to log in')
    }
    setLoading(false)
  }
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
    <form onSubmit={handleSubmit} className='form_center'>
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" ref={emailRef}placeholder="youremail@example.com" />
      <label htmlFor="pwd">Password</label>
      <input type="password" id="pwd" name="pwd" ref={passwordRef}placeholder="Pick a strong password" />
      <button type="submit" >Login</button>
      <p>Don't have an account? <Link to='/signup'>Sign Up</Link> </p>
    </form>
  </div>
</div>
    )
}

export default LoginPage
