import React, { useEffect, useRef, useState } from 'react'
import './TitileCards.css'
import cards_data from '../../assets/cards/Cards_data'
import { Link } from 'react-router-dom'
const TitileCards = ({title,category}) => {
  

  const [apiData, setApiData] = useState([]);
  const cardsRef = useRef();

  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIwYzQ0ZjBkZGMwODI1MzQyM2YxMDZhZjg2NWVlZWY0MyIsInN1YiI6IjY2M2EwNTI0OTRkOGE4MDEyOTM0MmIwMSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.0lQFZaZ5QUjG6qzeF5JEBrQ_MdV2ip10uIsWty5WrXE'
    }
  };
  

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaY;
  }

  useEffect(() => {

    fetch(`https://api.themoviedb.org/3/movie/${category?category:"now_playing"}?language=en-US&page=1`, options)
    .then(response => response.json())
    .then(response => setApiData(response.results))
    .catch(err => console.error(err));


    cardsRef.current.addEventListener('wheel', handleWheel);
    return () => {
        if (cardsRef.current) {
            cardsRef.current.removeEventListener('wheel', handleWheel);
        }
    };
}, []);

  return (
    <div className='titileCards'>
      <h2>{title?title:"Popular On FakeFlix"}</h2>
      <div className="card-list" ref={cardsRef}>
        {
          apiData.map((card,index) => (
            <Link  to={`/Player/${card.id}`}  className="card" key={index}>
              <img src={`https://image.tmdb.org/t/p/w500`+card.backdrop_path} alt="" />
              <p>{card.original_title}</p>
            </Link>
          ))
        }
      </div>
    </div>
  )
}
export default TitileCards;