import React from 'react'
import Navbar from './components/navbar/navbar.jsx'
import Hero from './components/navbar/hero/Hero.jsx'
import Programs from './components/navbar/programs/Programs.jsx'
import Title from './components/navbar/Title/Title.jsx'
import About from './components/navbar/About/About.jsx'
import Testimonial from './components/Testimonials/Testimonial.jsx'
import Contact from './components/Contact/Contact.jsx'
import Footer from './components/Footer/Footer.jsx'
const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <div className="container">
        <Title subTitle='What We Offer' title='Some Features'/>
        <Programs/>
        <About/>
        <Title subTitle='Testimonials' title='This is Us'/>
        <Testimonial/>
        <Title subTitle='Contact Us' title='Get in Touch'/>
        <Contact/>
        <Footer/>
      </div>
    </div>
  )
}

export default App