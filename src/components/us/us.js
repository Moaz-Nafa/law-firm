import React from 'react';
import './us.css';
import IMG1 from '../../assets/us-1.png'
import IMG2 from '../../assets/us-2.png'
import IMG3 from '../../assets/us-3.png'
import IMG4 from '../../assets/us-4.png'

const Us = () => {
  return (
    <>
    <div className='us'>
        <div className='us-header'></div>
        <h1 className='us-h1'>Why Choosing Us ?</h1>
        <div className='us_paragraphe'>
        <p>
            ​Our clients witnessed the strength of our office and the confidence in dealing with us,
            and the following principles are what you will find when dealing with us:
        </p>
        </div>
        <div className='container us_container'>
            <article className='us-item'>
                <div className='us-image'>
                    <img src={IMG1} alt='usImage'/>
                </div>
                <h2>Customer Satisfaction</h2>
            </article>
            <article className='us-item'>
                <div className='us-image'>
                    <img src={IMG2} alt='usImage'/>
                </div>
                <h2>Confidentiality</h2>
            </article>
            <article className='us-item'>
                <div className='us-image'>
                    <img src={IMG3} alt='usImage'/>
                </div>
                <h2>Trust Is Our Priority</h2>
            </article>
            <article className='us-item'>
                <div className='us-image'>
                    <img src={IMG4} alt='usImage'/>
                </div>
                <h2>Quick Legal Solutions</h2>
            </article>
        </div>
        </div>
    </>
  )
}

export default Us
