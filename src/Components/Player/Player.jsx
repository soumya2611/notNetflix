import React, { useEffect, useState } from 'react'
import './Player.css'
import backArrow from '../../assets/back_arrow_icon.png'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {

const {id}=useParams();

const navigate=useNavigate();
    const [apiData, setApiData] = useState({
        name:"",
        key:"",
        published_at:"",
        typeof:""
    });
    const options = {
        method: 'GET',
        headers: {
          accept: 'application/json',
          Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzQ0ZjBkZGMwODI1MzQyM2YxMDZhZjg2NWVlZWY0MyIsInN1YiI6IjY2M2EwNTI0OTRkOGE4MDEyOTM0MmIwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0lQFZaZ5QUjG6qzeF5JEBrQ_MdV2ip10uIsWty5WrXE'
        }
      };
      
    useEffect(() =>{ fetch(`https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results[0]))
    .catch(err => console.error(err));
},[]);

    
  return (
    <div className='player'>
   <img src={backArrow}  onClick={()=>{navigate(-2)}} alt="" />
   <iframe src={`https://www.youtube.com/embed/${apiData.key}`} frameBorder="0" allowFullScreen title='trailer' width='90%' height='90%'></iframe>
   <div className="player-info">
    <p>{apiData.published_at.slice(0,10)}</p>
    <p>{apiData.name}</p>
    <p>{apiData.type}</p>
   </div>
    </div>
  )
}

export default Player