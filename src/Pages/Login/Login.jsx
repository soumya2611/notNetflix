import React, { useState } from 'react'
import './Login.css'
import logo from '../../assets/logo.png'
import { login,signup } from '../../firebase'
import spinner from '../../assets/netflix_spinner.gif'



const Login = () => {

const [signState, setSignState] = useState("sign In")
const [name,setName]=useState("");
const [email,setEmail]=useState("");
const [password,setPassword]=useState("");

const [loading, setLoading] = useState(false);

const user_auth= async(event)=>{
  event.preventDefault();
  setLoading(true);
  if(signState==="sign In"){
    await login(email,password);
  }
  else {
    await signup(name,email,password)
  }
  setLoading(false)
}


  return (
    loading?<div className='loading'> <img src={spinner} alt="" /></div>:
    <div className='login'>
      <img src={logo} className='login-logo' alt="" />
      <div className="login-form">
        <h1>{signState}</h1>
        <form >
          {signState==="sign Up"? 
          <input  value={name} onChange={(e)=>{setName(e.target.value)}} type="text" placeholder='Your Name' />:<></>}
        
         <input  value={email} onChange={(e)=>{setEmail(e.target.value)}} type="emial"placeholder='Your Email'  />

         <input  value={password} onChange={(e)=>{setPassword(e.target.value)}} type="password" placeholder='Password' />
         <button onClick={user_auth} type='submit'>{signState}</button>
         <div className="form-help">
          <div className="remember">
            <input type="checkbox" />
            <label htmlFor="">Remember Me</label>
          </div>
          <p>Need Help?</p>
         </div>
        </form>
        <div className="form-switch">
          {signState==="sign In"?  <p>New to fakeFlix? <span onClick={()=>{setSignState("sign Up")}}>Sign up now</span></p>:
           <p>Already have an account <span  onClick={()=>{setSignState("sign In")}}>Sign In now</span></p>}
        </div>
      </div>
    </div>
  )
}

export default Login