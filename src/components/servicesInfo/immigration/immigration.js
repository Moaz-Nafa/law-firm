import React from 'react';
import './immigration.css'
import IMG from '../../../assets/services-infoo.jpg';
import IMG2 from '../../../assets/law99.jpg'

const Immigration = () => {
  return (
        <div style={{ minHeight: "1200px" }}>
        <div className='civil-image'>
        <img src={IMG} alt='civil'></img>
      </div>
      <div className='container civil_container'>
        <div className='immigration-content'>
          <img src={IMG2} alt='immigration'></img>
            <div className='info-content-text'>
              <h1>About Immigration & Citizenship Law</h1>
              <h2>What the Immigration law is?</h2>
              <p>
              Immigration Law relates to the attainment of citizenship and temporary or permanent
              relocation of individuals from one country to another. Immigration spans a wide range of legal issues,
              practice settings, and geographic locations.
              </p>

              <p>
              Many lawyers in immigration law are engaged in direct service work helping clients go through the right
              steps in obtaining the legal right to work or stay . Others work with the government on enforcement of
              immigration laws. 
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Immigration