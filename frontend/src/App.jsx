import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Event from './pages/Event/Event'
import Candidate from './pages/Candidate/Candidate'
import Footer from './components/Footer/Footer'
import LoginPopup from './components/LoginPopup/LoginPopup'
const App = () => {

   const [showLogin,setShowLogin]=useState(false)

  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/event' element={<Event/>}/>
        <Route path='/candidate' element={<Candidate/>}/>
      </Routes>
    </div>
    <Footer/>
    </>
  )
}

export default App
