import React from 'react';
import Header from '../components/header/header'
import About from '../components/about/about'
import Contact from '../components/contact/contact'
import Services from '../components/services/services'
import Us from '../components/us/us'
import Timer from './timer/timer';

const HomePage = () => {
  return (
    <>
      <Header/>
      <About/>
      <Us/> 
      <Timer maxRange={0}/>
      <Services/> 
      <Contact/>
    </>
  )
}

export default HomePage