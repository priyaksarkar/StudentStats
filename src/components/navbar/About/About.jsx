import React from 'react'
import './About.css'

const About = () => {
  return (
    <div className='about'>
        <div className="about-left">
            <img src='../src/assets/logoo.jpeg' alt="" className='about-img'/>
        </div>
        <div className="about-right">
            <h3>ABOUT US</h3>
            <h2>StudentStats is the new innovation</h2>
            <p>With a focus on innovation, we provide not only a simple UI for ease of user access but also
                a very focussed design towards students and teachers, for a better interactive menu. </p>
        </div>
    </div>
  )
}

export default About