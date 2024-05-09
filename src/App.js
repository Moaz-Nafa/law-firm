import React from 'react'
import HomePage from './components/homePage'
import Civil from './components/servicesInfo/civil/civil'
import Criminal from './components/servicesInfo/criminal/criminal'
import Family from './components/servicesInfo/family/family'
import Immigration from './components/servicesInfo/immigration/immigration'
import Inheritance from './components/servicesInfo/inheritance/inheritance'
import International from './components/servicesInfo/international/international'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Nav from './components/nav/nav'
import Footer from './components/footer/footer'


const App = () => {
  return (
    <> 
     <Nav/>
    <BrowserRouter>
        <Routes>    
          <Route index element={<HomePage/>}/>
          <Route path='/civil' element={<Civil/>}/>
          <Route path='/criminal' element={<Criminal/>}/>
          <Route path='/family' element={<Family/>}/>
          <Route path='/immigration' element={<Immigration/>}/>
          <Route path='/inheritance' element={<Inheritance/>}/>
          <Route path='/international' element={<International/>}/>
        </Routes>
    </BrowserRouter>
    <Footer/>
    </>
  )
}

export default App
