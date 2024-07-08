import React, { useEffect, useState } from 'react';
import './navibar.css';
import logo from '../../assets/uni_logo.png';


const Navbar = () => {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50); // Update sticky state based on scroll position
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll); // Cleanup function to remove event listener
    };
  }, []); // Empty dependency array to run effect only once

  return (
    <nav className={`container ${sticky ? 'dark-nav' : ''}`}>
      <img src={logo} alt="University Logo" className="logo" />
      <ul>
        <li>
          <a href="#home">Home</a>
        </li>
        <li>
          <a href="#programs">About</a>
        </li>
        <li>
          <a href="#contactus">Contact Us</a>
        </li>
        <li>
          <a href="#log" className="btn">Login</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
