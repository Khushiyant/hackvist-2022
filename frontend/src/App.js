import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from "./pages/home/Home"
import About from "./pages/About"
import Explore from "./pages/Explore"
import Events from "./pages/Events"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Footer from "./components/Footer"

const App = () => {
  const location = useLocation();

  return (
    <>
      {
        (
          location.pathname !== '/login' &&
          location.pathname !== '/signup'
        ) && <Navbar />
      }
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/events' element={<Events />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/register/:type/:name' element={<Signup />} />
        <Route path='/' element={<Home />} />
        <Route path='*' element={<Home />} />
      </Routes>
      {
        (
          location.pathname !== '/login' &&
          location.pathname !== '/signup'
        ) && <Footer />
      }
    </>
  )
}

export default App