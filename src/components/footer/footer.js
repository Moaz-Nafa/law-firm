import React from 'react'
import './footer.css';
import { FaFacebookF } from "react-icons/fa";
import { BsInstagram } from "react-icons/bs";
import { SiGmail } from "react-icons/si";
import { ImWhatsapp } from "react-icons/im";

const Footer = () => {
  return (
    <footer>
      
      <article className='social-articl' >
        <h2>Socails</h2>
        <div className="footer__socials"> 
          <a href="https://m.me/azat.male" target='_blank'><FaFacebookF/></a>
          <a href="https://www.instagram.com/nafahector/" target='_blank'><BsInstagram/></a>
          <a href="mailto:lawyerzaki1@gmail.com" target='_blank'><SiGmail/></a>
          <a href="https://api.whatsapp.com/send?phone=+201159297283" target='_blank'><ImWhatsapp/></a>
        </div>
      </article>
      <article className='links-articl'>
        <a href="#" className='footer__logo'>TANTAWI</a>
        <ul className='links'>
          <li><a href="#">Home</a></li>
          <li><a href="#About">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
        <h2 className='phone-number'>Call Us +2 011-5929-7283</h2>
        <div className="footer__cobyright">
          <p>&copy; TANTAWI Trastable Law Firm.</p>
        </div>
      </article>
      <article className='address-articl'>
        <div className='address'>
          <h2>Address</h2>
          <h3> VILLA 32, 2ND DISTRICT,<br/> 5TH ZONE, 5TH SETTLEMENT,<br/> NEW CAIRO, EGYPT</h3>
        </div>
      </article>

    </footer>
  )
}

export default Footer

