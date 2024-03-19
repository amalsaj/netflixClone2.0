import React, { useState } from 'react'
import { API_KEY,imageUrl } from '../../constants/constants';
import "./Banner.css";
import axios from 'axios';
import { useEffect} from 'react';

function Banner() {
     const[movie,SetMovie]=useState([])
     const[rand,SetRand]=useState(0)
      
      useEffect(()=>{
        axios.get(`https://api.themoviedb.org/3/trending/all/week?api_key=${API_KEY}&language=en-US`).then((response)=>{
          SetRand(Math.floor(Math.random() * 20));
          SetMovie(response.data.results[rand])

        })

      },[rand])
  return (
    <div 
    style={{backgroundImage:`url(${movie ? imageUrl+movie.backdrop_path:''})`}}
    className='banner'>
        <div className='content'>
            <h1 className='title'>{movie ? movie.title:''}</h1>
            <div className='banner_buttons'>
                <button className='play'>Play</button>
                <button className='play'>My List</button>
            </div>
            <h1 className='description'>{movie ? movie.overview : ''} </h1>

        </div>
        <div className="fade"></div>
      
    </div>
  )
}

export default Banner
