import React from 'react';
import './civil.css';
import IMG from '../../../assets/services-infoo.jpg';
import IMG2 from '../../../assets/law99.jpg';
import { RxDotFilled } from "react-icons/rx";


const civil = () => {
  return (

    <div style={{ minHeight: "1200px" }}>
         <div className='civil-image'>
          <img src={IMG} alt='civil'></img>
        </div>
      <div className='container civil_container'>
        <div className='civil-content'>
          <img src={IMG2} alt='civil'></img>
          
            <div className='info-content-text'>
              <h1>About Civil law</h1>
              <p>
              Civil law systems, also called continental or Romano-Germanic legal systems,
              are found on all continents and cover about 60% of the world.
              It's placing more focus on individual freedom, promotes cooperation between human beings.
              </p>

              <p>
              The words civil law describe the law that pertains to persons,
              things, and relationships that develop among them,
              excluding not only criminal law but also commercial law, labor law, etc. 
              </p>

              <h2>What the civil law is:</h2>
              <p>
              <RxDotFilled/>A comprehensive system of rules and principles usually arranged in codes and easily accessible to citizens and jurists.<br/>
              <RxDotFilled/>A well organized system that favors cooperation, order, and predictability, based on a logical and dynamic taxonomy developed from Roman law and reflected in the structure of the codes.<br/>
              <RxDotFilled/>An adaptable system, with civil codes avoiding excessive detail and containing general clauses that permit adaptation to change.<br/>
              <RxDotFilled/>A primarily legislative system, yet leaving room for the judiciary to adjust rules to social change and new needs, by way of interpretation and creative jurisprudence.<br/>
              </p>

              <h2>Some salient features of the civil law:</h2>
              <p>
              <RxDotFilled/>Clear expression of rights and duties, so that remedies are self-evident.<br/>
              </p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default civil