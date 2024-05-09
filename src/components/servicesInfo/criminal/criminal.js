import React from 'react';
import './criminal.css';
import IMG from '../../../assets/services-infoo.jpg';
import IMG2 from '../../../assets/law99.jpg'


const Criminal = () => {
  return (
    <div style={{ minHeight: "1200px" }}>
    <div className='civil-image'>
     <img src={IMG} alt='civil'></img>
   </div>
 <div className='container civil_container'>
   <div className='criminal-content'>
     <img src={IMG2} alt='criminal'></img>
       <div className='info-content-text'>
         <h1>About Criminal law</h1>
         <p>
          The body of law that defines criminal offenses, regulates the apprehension,
          charging, and trial of suspected persons,
          and fixes penalties and modes of treatment applicable to convicted offenders.
         </p>

          <h2>what the criminal law is?</h2>
          <p>
          Criminal law is only one of the devices by which organized societies protect the security of individual interests and ensure the survival of the group.
          There are, in addition, the standards of conduct instilled by family, school, and religion; the rules of the office and factory; the regulations of civil life enforced by ordinary police powers;
          and the sanctions available through tort actions. 
          </p>
       </div>
   </div>
 </div>
</div>
  )
}

export default Criminal