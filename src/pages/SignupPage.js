import React,{useRef, useState} from 'react'
import { Link, useHistory } from 'react-router-dom'
import {useAuth} from '../context/authContext'

const SignupPage = () => {
  const emailRef = useRef()
  const passwordRef = useRef()
  const passwordConfirmRef = useRef()
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const {signup, currentUser} = useAuth()
  const history = useHistory()
  const handleSubmit= async (e)=>{
    e.preventDefault();
    
    if(passwordRef.current.value!== passwordConfirmRef.current.value){
      return setError('Passwords do not match')
    }
    try {
      setError('')
      setLoading(true)
      await signup(emailRef.current.value, passwordRef.current.value)
      history.push('/dashboard')
    } catch (error) {
      console.log(error)
      setError('Failed to sign in')
    }
    setLoading(false)
  }
    return (
        <div>
          {error && console.log('do not match')}
         
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
    <form onSubmit={handleSubmit} className='form_center'>
      
      <label htmlFor="email">Email</label>
      <input type="email" id="email" name="email" ref={emailRef} placeholder="youremail@example.com" />
      <label htmlFor="pwd">Password</label>
      <input type="password" id="pwd" name="pwd" ref={passwordRef} placeholder="Pick a strong password" />
      <label htmlFor="pwd">Password confirmation</label>
      <input type="password" id="pwd" name="pwd" ref={passwordConfirmRef} placeholder="Confirm your password" />
      <button type="submit" disabled={loading}>Create Account</button>
      <p>Alredy have an account? <Link to='/login'>Login</Link> </p>
    </form>
  </div>
</div>
    )
}

export default SignupPage
