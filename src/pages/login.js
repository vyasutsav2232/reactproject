import React from 'react'

import './login.css';


const login = () => {
  return (
    <div className="abcd">
      
      <form className="con" >
        <h1>Login</h1>
    
        <label ><b>Email</b></label>
        <input type="text" placeholder="Enter Email" name="email" required />
        
    
        <label ><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
    
        <button type="submit" className="btns">Login</button>
      </form>
      
    </div>
  )
}

export default login