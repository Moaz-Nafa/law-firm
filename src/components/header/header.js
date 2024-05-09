import React from 'react'
import './header.css';
import homeImg from '../../assets/law7.jpg';
import Fade from 'react-reveal/Fade';


const Header = () => {

  return (
    <div className='landing'>
      <img src={homeImg} alt='home'/>
      <Fade right>
      <div className="text">
            <h2 className='phone'>Call Us +2 011-5929-7283</h2>
            <div className="contant">
            <h2>Hello sir! 
              We are here for you</h2>
            <p>Welcome to one of the most trusted legal institutions in the Arab world,
               with our professional team you will get the best legal services 
            </p>
        </div>
        </div>
        </Fade>
    </div>
  )
}

export default Header
