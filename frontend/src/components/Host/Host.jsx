import React, { useState } from 'react'
import { RxCross2 } from "react-icons/rx";
import './Host.css'
const Host = ({setShowHost}) => {

  return (
    <div className='host'>
     <form className='host-container'>
        <div className='host-title'>
            <h2>Fill The Form</h2>
            <RxCross2 onClick={() => setShowHost(false)} />
        </div>
        <div className='host-input'>
            <input type='text'placeholder='Your Event Name'required></input>
            <input type='email'placeholder='Your email'required></input>
            <input type='text' placeholder='Event Description'required></input>
            <input type='date' placeholder='Event Finish Date'required></input>

        </div>
        <div className='host-condition'>
            <input type='checkbox' required/>
                <p>By continuing, i agree to the terms of use & privacy policy</p>
        </div>
        <button>Submit to Register</button>

    </form>      
    </div>
  )
}

export default Host
