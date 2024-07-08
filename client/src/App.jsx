import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Profile from './pages/Profile';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Contact from './pages/Contact';

const App = () => {
  const [profilePhoto, setProfilePhoto] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <Router>
      <div className="min-h-screen flex flex-col">
        {isLoggedIn && <Header profilePhoto={profilePhoto} setIsLoggedIn={setIsLoggedIn} />}
        <div className="flex-grow">
          <Routes>
            <Route path="/" element={isLoggedIn ? <Home /> : <Navigate to="/signup" />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/signin" element={<SignIn setIsLoggedIn={setIsLoggedIn} />} />
            <Route path="/home" element={isLoggedIn ? <Home /> : <Navigate to="/signin" />} />
            <Route path="/profile" element={isLoggedIn ? <Profile setProfilePhoto={setProfilePhoto} /> : <Navigate to="/signin" />} />
            <Route path="/contact" element={isLoggedIn ? <Contact /> : <Navigate to="/signin" />} />
            {!isLoggedIn && <Route path="*" element={<Navigate to="/signin" />} />}
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
};

export default App;
