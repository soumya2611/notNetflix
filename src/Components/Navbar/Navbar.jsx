import React, { useEffect, useRef } from 'react'
import './Navbar.css'
import logo from '../../assets/logo.png'
import search from '../../assets/search_icon.svg'
import profile from '../../assets/profile_img.png'
import bell_icon from '../../assets/bell_icon.svg'
import caret_icon from '../../assets/caret_icon.svg'
import { logout } from '../../firebase'
const Navbar = () => {

  const navRef=useRef();

  useEffect(() => {
    const handleScroll = () => {
        if (navRef.current) {
            if (window.scrollY >= 80) {
                navRef.current.classList.add('navbar-black');
            } else {
                navRef.current.classList.remove('navbar-black');
            }
        }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
        window.removeEventListener('scroll', handleScroll);
    };
}, []);


  return (
    <div ref={navRef} className='navbar'>
        <div className="navbar-left">
            <img src={logo} alt="" />
            <ul>
                <li>Home</li>
                <li>TV Shows</li>
                <li>Movies</li>
                <li>New & Popular</li>
                <li>My List</li>
                <li>Browse By Language</li>
            </ul>
        </div>
        <div className="navbar-right">
<img src={search} alt=""className='icons'/>
<p>Children</p>
<img src={bell_icon} alt=""className='icons'/>

 <div className="navbar-profile">
 <img src={profile} alt=""className='profile'/>
 <img src={caret_icon} alt="" />
 <div className="dropdown">
  <p onClick={()=>{
    logout()
  }}>Sign Out Of FakeFlix</p>
 </div>
 </div>
 </div>
      </div>
   
   
  )
}

export default Navbar