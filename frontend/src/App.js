import React, { useEffect, useState } from 'react'
import {
  Routes,
  Route,
  useLocation,
  useNavigate,
} from 'react-router-dom'
import useAuthContext from './hooks/useAuthContext';

import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Navbar from './components/common/Navbar'
import About from './pages/about/About'
import Contact from './pages/contact/Contact'
import Events from './pages/events/Events'
import SingleEvent from './pages/events/SingleEvent';
import Explore from './pages/explore/Explore'
import Login from './pages/authentications/Login'
import Signup from './pages/authentications/Signup'
import NgoRegistration from './pages/registrations/NgoRegistration'
import CommunityRegistration from './pages/registrations/CommunityRegistration'
import CreateEvents from './pages/createEvents/CreateEvents';
import ChatRoom from './pages/messanger/ChatRoom';
import Home from './pages/home/Home'
import Error from './pages/Error'
import Footer from './components/common/Footer'

import { privateRoutes } from './constants/PrivateRoutes'

const App = () => {
  const navigate = useNavigate()
  const location = useLocation();
  const [tweets, setTweets] = useState([]);

  const { user, setUserDetails, logoutUser } = useAuthContext();

  const trackLocalStorage = (event) => {
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
    fetch("http://localhost:8000/tweets/milaap")
      .then((response) => (response.json()))
      .then((data) => {
        console.table(data.data[0]);
        setTweets(data.data);
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
      {/* {(tweets).map((tweet) => {
        return (
          <>
          <p key={tweet.id}>{tweet.text}</p>
          <br />
          </>
        )
      })} */}
      <Routes>
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/explore' element={<Explore />} />
        <Route path='/events/:id' element={<SingleEvent />} />
        <Route path='/explore/:id' element={<SingleEvent />} />
        <Route path='/events' element={<Events />} exact />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/registration/ngo' element={<NgoRegistration />} />
        <Route path='/registration/community' element={<CommunityRegistration />} />
        <Route path='/create/:type' element={<CreateEvents />} />
        <Route path='/chatroom' element={<ChatRoom />} />
        <Route path='/' element={<Home />} exact />
        <Route path='*' element={<Error />} />
      </Routes>
      { (privateRoutes.includes(location.pathname)) && <Footer /> }
      <ToastContainer />
    </>
  )
}

export default App