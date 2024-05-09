import React from 'react';
import './about.css';
import AIMG from '../../assets/lady11.png';
import Zoom from 'react-reveal/Fade';


const About = () => {
  return (
        <section id='About'>
        <h4>Get To Know </h4>
          <h1>About Us</h1>
        
        <div className="container about-container">
      <Zoom left>
        <div className='about__me'>
          <div className="about__me-image">
              <img src={AIMG} alt="Nafa" />
          </div>
        </div>
         
     </Zoom>

        <div className="about__content">
          <p className='paragraphe-1'>ABOUT TANTAWI & PARTNERS!</p>
          <p className='paragraphe-2'>
            Headquartered in Cairo, Egypt,<br/>
            has the honor to offer its clientele both inside and outside Egypt.
            All services related to consulting, legal and accounting work in all fields of law.<br/>
            Establishment and management of companies.
            The firm hires a high-caliber staff of lawyers and legal consultants specializing in all fields,<br/>
            for example the issues related to marine labor contracts and insurance companies,<br/>
            commercial and Marine agencies, intellectual property rights,
            trademarks and all issues of compensation, procurement and customs transactions.<br/>
            <p className='paragraphe-3'>And al legal issuse related to Individuals.</p>
          </p>
        </div>

      </div>
    </section>
  )
}

export default About
