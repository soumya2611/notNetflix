import React from 'react'
import './Home.css'
import hero_banner from '../../assets/hero_banner.jpg'
import hero_title from '../../assets/hero_title.png'
import play_icon from '../../assets/play_icon.png'
import info_icon from '../../assets/info_icon.png'
import Navbar from '../../Components/Navbar/Navbar'
import TitileCards from '../../Components/TitileCards/TitileCards'
import Footer from '../../Components/Footer/Footer'
const Home = () => {
  return (
    
    <div className='home'>
        <Navbar/>
        <div className="hero">
          <img src={hero_banner} alt="" className='banner-img' />
          <div className="hero-caption">
            <img src={hero_title} alt="" />
            <p>Discovering his ties to a secret ancient greek Goddess to save the life from the Protector</p>
            <div className="hero-btns">
              <button className='btn'><img src={play_icon} alt="" />Play</button>
              <button className='btn dark-btn'><img src={info_icon} alt="" />More Info</button>
            </div>
            <TitileCards/>
          </div>
        </div>
        <div className="more-cards">
          <TitileCards title={"Top Rated🔥"} category={"top_rated"}/>
          <TitileCards title={"Popular ❤️"} category={"popular"}/>
          <TitileCards title={"Up Coming 🤞"} category={"upcoming"}/>
          <TitileCards  title={"Now Playing ▶️"} category={"now_playing"}/>
        </div>
        <Footer/>
    </div>
  )
}

export default Home