import React from 'react'
import { Routes, Route, useLocation } from 'react-router-dom'

import Navbar from "./components/Navbar"
import Home from "./pages/Home"
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
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
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