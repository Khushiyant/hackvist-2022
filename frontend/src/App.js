import React, { useEffect, useState } from 'react'
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom'
import useAuthContext from './hooks/useAuthContext';

import { toast, ToastContainer } from 'react-toastify';
import jwt_decode from "jwt-decode";
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/common/Navbar'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Events from './pages/events/Events'
import Explore from './pages/explore/Explore'
import Login from './pages/authentications/Login'
import Signup from './pages/authentications/Signup'
import NgoRegistration from './pages/registrations/NgoRegistration'
import CommunityRegistration from './pages/registrations/CommunityRegistration'
import Home from './pages/home/Home'
import Error from './pages/Error'
import Footer from './components/common/Footer'

import { privateRoutes } from './constants/PrivateRoutes'

const App = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const [tweet, setTweet] = useState("");

  const { user, setUserDetails, logoutUser } = useAuthContext();

  const trackLocalStorage = (event) => {
    console.log(event);
    if (!event.key) {
      toast.error("Something Went Wrong! Please Login Again.");
      logoutUser();
      navigate('/');
      return;
    }

    if (event.key === "authTokens" && !event.newValue) {
      toast.error("Something Went Wrong! Please Login Again.");
      logoutUser();
      navigate('/');
    }
  }

  const fetchTweets = () => {
    fetch("http://localhost:8000/tweets/ngo")
      .then((response) => (response.json()))
      .then((data) => {
        console.log(data.data[0].text);
        setTweet(data.data[0].text);
      })
  }

  useEffect(() => {
    setUserDetails()
    // fetchTweets();
    window.onstorage = event => {
      trackLocalStorage(event);
    }
  }, [])

  return (
    <>
      { (privateRoutes.includes(location.pathname)) && <Navbar /> }
      {/* <p>{tweet}</p> */}
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/events' element={<Events />} exact />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/registration/ngo' element={<NgoRegistration />} />
        <Route path='/registration/community' element={<CommunityRegistration />} />
        <Route path='/' element={<Home />} exact />
        <Route path='*' element={<Error />} />
      </Routes>
      { (privateRoutes.includes(location.pathname)) && <Footer /> }
      <ToastContainer />
    </>
  )
}

export default App