import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import RegisterPersonal from './components/RegisterPersonal';
import NextRegistrationDetails from './components/NextRegistrationDetails'; // This should be your next registration page component
import Navbar from './components/Navbar';
import Login from './components/Login';
import Footer from './components/Footer';
import Home from './components/Home';
function App() {
  return (
    <>
    
    <Router>
      <div>
      <Navbar/>
      </div>
      <Routes>

      <Route path="/login" element={<Login />} />
      <Route path="/" element={<Home />} />

        <Route path="/registerpersonaldata" element={<RegisterPersonal />} />
        <Route path="/nextRegistrationDetails" element={<NextRegistrationDetails />} />
      </Routes>
      <Footer/>
    </Router>
    </>
  );
}

export default App;
