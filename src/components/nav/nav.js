import React from 'react';
import './nav.css';
import IMG from '../../assets/tantawii.png';
import Fade from 'react-reveal/Fade';
// import { Link } from 'react-router-dom';


const Nav = () => {

  return (
      <Fade top>
        <nav id="nav">
        <div class="container">
        <a href="/"  class="logo">
            <img src={IMG} alt='logo'/>
        </a>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#About">About</a></li>
                    <li><a href="#services">Services</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
        </div>
    </nav>
    </Fade>
  )
}

export default Nav
