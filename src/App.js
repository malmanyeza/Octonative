import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import GlobalStyles from './components/GlobalStyles';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import AboutUs from './components/AboutUs';
import Services from './components/Services';
import Contact from './components/Contact';
import Footer from './components/Footer';

const App = () => {
  return (
    <Router>
      <GlobalStyles />
      <Navbar />  {/* Navbar is rendered here */}
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
