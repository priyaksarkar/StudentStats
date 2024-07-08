import React from 'react'
import './Hero.css'
// import arrow from '\assets\arrow.png'
const Hero = () => {
  return (
    <div id="home" className='hero container'>
       <div className="hero-text">
        <h1>StudentStats in Collaboration with Christ(Deemed-To-Be-University)</h1>
        <p>Presenting a much easier viewfinder and everything you need to track your progressions, with StudentStats</p>
        <button className='btn'>Explore more <img src='../src/assets/arrow.png' alt="" /></button>
        </div> 
    </div>
  )
}

export default Hero