import React, { useState } from 'react'
import '../Components/Login/LoginSignup.css'
import { FaEye } from "react-icons/fa";

const LoginSignup = () => {

    const [action,setAction]=useState("Sign Up");
    {<pSignup to create your account/>}
 
 
 
    return (
    <div className='container'>
        <div className="header">
            <div className="text">{action}</div>
        </div>

      <div className ="inputs">
        <div className='input'>
          <input type="text" placeholder="Full name" name="name" required/>
          <FaEye />
        </div>

        <div className='inputs'>  
        <div className='input'>
            <input type="Email"placeholder='Email'/>
            <FaEye />
      </div>
      </div>

      <div className='inputs'>
        <div className='input'>
            <input type="password"placeholder='Password'/>
            <FaEye />
    </div>
    </div>

    <div className='input'>
        <div className='Confirm Password'>
        <input type="password" placeholder="Confirm Password" name="Confirm password" required/>
        <FaEye />
        </div>
    </div>

    <div className='input'>
        <div className='Remember-forgot'>
       <label><input type="Check box"/>Remember me</label> 
      
        </div>

        <div className='submit-container'>
            <div className='Sign Up'></div>
            <div className='Submit'>Sign Up</div>
            
    </div>
</div>
</div>
</div>
  )
}

export default LoginSignup;

