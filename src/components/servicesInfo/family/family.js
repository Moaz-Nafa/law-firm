import React from 'react';
import './family.css'
import IMG from '../../../assets/services-infoo.jpg';
import IMG2 from '../../../assets/law99.jpg'

const Family = () => {
  return (
            <div style={{ minHeight: "1200px" }}>
            <div className='civil-image'>
            <img src={IMG} alt='civil'></img>
          </div>
              <div className='container civil_container'>
                <div className='family-content'>
                  <img src={IMG2} alt='family'></img>
                    <div className='info-content-text'>
                      <h1>About Family law</h1>
                      <h2>Whet the Family Law is?</h2>
                      <p>
                      Family law, body of law regulating family relationships, including marriage and divorce,
                      the treatment of children, and related economic matters.
                      </p>

                      <h2>why we could need a family law?</h2>
                      <p>
                      Individuals often benefit from hiring an attorney when dealing with divorce,
                      child support, and especially child custody matters.
                      Emotions can run high during some family law issues.
                      Hiring an attorney for their legal knowledge and negotiating with the other party to resolve complex issues can be invaluable. 
                      </p>

                      <p>
                      Family law shares an interest in certain social issues with other areas of law,
                      including criminal law. For example, one issue that has received considerable attention since the late 20th century is the very difficult problem of violence within the family,
                      which may take the form of physical violence by one adult member on another or by an adult on a child or some other violent or abusive conduct within a family circle.
                      In serious cases the only real solution may be to terminate cohabitation or to remove an abused child from the family unit into some form of public or foster custody.
                      </p>
                    </div>
                </div>
              </div>
        </div>
  )
}

export default Family