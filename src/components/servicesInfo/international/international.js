import React from 'react'
import './international.css'
import IMG from '../../../assets/services-infoo.jpg';
import IMG2 from '../../../assets/law99.jpg'

const International = () => {
  return (
        <div style={{ minHeight: "1200px" }}>
        <div className='civil-image'>
        <img src={IMG} alt='civil'></img>
      </div>
        <div className='container civil_container'>
          <div className='international-content'>
            <img src={IMG2} alt='civil'></img>
              <div className='info-content-text'>
                <h1>About Civil law & TANTAWI</h1>
                <h2>What the international law is?</h2>
                <p>
                international law is a collection of rules governing relations between states.
                It is a mark of how far international law has evolved that this original definition
                omits individuals and international organizations—two of the most dynamic and vital 
                elements of modern international law. Furthermore, it is no longer accurate to view 
                international law as simply a collection of rules; rather,<br/>
                it is a rapidly developing complex of rules and influential—though not directly
                binding—principles, practices, and assertions coupled with increasingly sophisticated
                structures and processes.
                </p>
                <p>
                In its broadest sense, international law provides normative guidelines as well as methods,
                mechanisms, and a common conceptual language to international actors—i.e.,
                primarily sovereign states but also increasingly international organizations and some individuals. 
                </p>
                <p>
                Although international law is a legal order and not an ethical one,
                it has been influenced significantly by ethical principles and concerns,
                particularly in the sphere of human rights.
                </p>
              </div>
          </div>
        </div>
    </div>
  )
}

export default International