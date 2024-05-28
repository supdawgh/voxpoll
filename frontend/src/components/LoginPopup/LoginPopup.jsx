import React, { useState } from 'react'
import './LoginPopup.css'
import { RxCross2 } from "react-icons/rx";

const LoginPopup = ({setShowLogin}) => {

   const [currState,setCurrState]=useState('Login')

  return (
    <div className='login-popup'>
      <form className="login-popup-container">
<div className="login-popup-title">
    <h2>{currState}</h2>
    <RxCross2 onClick={()=>setShowLogin(false)}/>

</div>
<div className='login-popup-inputs'>
    {currState==='Login'?<></>:<input type='text' placeholder='Your name' required></input>}
<input type='email' placeholder='Your email' required></input>
<input type password='password' placeholder='Your password'required></input>
</div>
<button>{currState==='Sign Up'?'Create account':'Login'}</button>
      <div className='login-popup-condition'>
        <input type='checkbox' required></input>
      <p>By contnuing, i agree to the terms of use & privacy</p>
      </div>
      {currState==='Login'?
      <p>Create a new account?<span onClick={()=>setCurrState('Sign Up')}>Click Here</span></p>:
      <p>Already have an account?<span onClick={()=>setCurrState('Login')}>Login here</span></p>}
      </form>
    </div>
  )
}

export default LoginPopup
