import React from 'react'
import './services.css';
import IMG1 from '../../assets/civil13.webp'
import IMG2 from '../../assets/family-law-.jpg'
import IMG3 from '../../assets/what-is-the-purpose-of-criminal-law-1227x720.webp'
import IMG4 from '../../assets/Immigration.jpg'
import IMG5 from '../../assets/International-Law.jpg'
import IMG6 from '../../assets/inheritance-law.webp'
import { Link } from 'react-router-dom';


const Services = () => {
  return (
    <>
    <h1 className='services-title'>Legal Services Achieve Your Goals</h1>

    <div id='services' className='services'>      
        <div className="container portfolio__container">
            <article className='portfolio__item'>
              <Link to='/civil'>
              <div className="portfolio__item-img">
                    <img src={IMG1} alt='services'/>
              </div>
                <h2>CIVIL LAW </h2> 
              </Link>
                           
            </article>
            <article className='portfolio__item'>
              <Link to='/family'>
              <div className="portfolio__item-img">
                <img src={IMG2} alt='services'/>
              </div>
              <h2>FAMILY LAW </h2>
              </Link>
            </article>
            <article className='portfolio__item'>
              <Link to='/criminal'>
              <div className="portfolio__item-img">
                <img src={IMG3} alt='services'/>
              </div>
              <h2>CRIMINAL LAW</h2>
              </Link>
            </article>
            <article className='portfolio__item'>
            <Link to='/immigration'>
              <div className="portfolio__item-img">
                <img src={IMG4} alt='services'/>
              </div>
              <h2>CITIZENSHIP AND IMMIGRATION </h2>
              </Link>
            </article>
            <article className='portfolio__item'>
            <Link to='/international'>
              <div className="portfolio__item-img">
                <img src={IMG5} alt='services'/>
              </div>
              <h2>INTERNATIONAL LAW</h2>
              </Link>
            </article>
            <article className='portfolio__item'>
            <Link to='/inheritance'>
                <div className="portfolio__item-img">
                  <img src={IMG6} alt='services'/>
                </div>
              <h2>INHERTANCE LAW </h2>
              </Link>
            </article>
        </div>

  </div>
  </>
  )
}

export default Services
