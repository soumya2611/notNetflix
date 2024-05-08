import React, { useEffect } from 'react'
import './App.css'
import { Routes,Route, useNavigate } from 'react-router-dom'

import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
import Player from './Components/Player/Player'
import { onAuthStateChanged } from 'firebase/auth'
import { auth } from './firebase'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

const navigate=useNavigate( )

  useEffect(() => {
onAuthStateChanged(auth,async(user)=>{
  if(user){
    console.log("logged In");
    navigate("/")
  }
  else{
    console.log("logged out");
    navigate("/Login")
  }
})
  },[])
  return (
    <div>
      <ToastContainer theme='dark'/>
      <Routes>

        <Route path='/' element={  <Home />}/>
        <Route path='/Login' element={<Login/>}/>
        <Route path='/Player/:id' element={<Player/>}/>
       
      </Routes>
    
      
    </div>
  )
}

export default App