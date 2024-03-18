import React from 'react'
import "./Banner.css";

function Banner() {
  return (
    <div className='banner'>
        <div className='content'>
            <h1 className='title'>Movie Name</h1>
            <div className='banner_buttons'>
                <button className='play'>Play</button>
                <button className='play'>My List</button>
            </div>
            <h1 className='description'>Lorem Ipsum is simply dummy text of the </h1>

        </div>
        <div className="fade"></div>
      
    </div>
  )
}

export default Banner
