import React from 'react';
import './inheritance.css'
import IMG from '../../../assets/services-infoo.jpg';
import IMG2 from '../../../assets/law99.jpg'

const Inheritance = () => {
  return (
        <div style={{ minHeight: "1200px" }}>
        <div className='civil-image'>
        <img src={IMG} alt='civil'></img>
      </div>
        <div className='container civil_container'>
          <div className='inheritance-content'>
            <img src={IMG2} alt='civil'></img>
              <div className='info-content-text'>
                <h1>About Inheritance Law </h1>
                  <h2>What the Inheritance law is?</h2>
                  <p>
                  Inheritance, the devolution of property on an heir or heirs upon the 
                  death of the owner. The term inheritance also designates the property itself.
                  In modern society, the process is regulated in minute detail by law.
                  </p>
                  <p>
                  In the civil law of the continental European pattern, the pertinent branch is generally called
                  the law of succession. In Anglo-American common law it was customary to distinguish between
                  descent of real estate and distribution of personal estate. The rules applicable to the two
                  kinds of property have been fused, but no common, overall name is yet universally accepted.
                  In England books dealing with the subject are varyingly titled On Wills, On Probate,
                  On Succession, or On Executors and Administrators. In the United States the term probate 
                  law is frequently, although inaccurately, applied to the field as a whole. Following the 
                  title of an important statute of the state of New York, another term,
                  law of decedents’ estates, has been gaining ground, as has the law of succession.
                  </p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default Inheritance