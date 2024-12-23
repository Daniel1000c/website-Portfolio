import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/siteContact';
import Programs from './components/Programs';
import './App.css';

function App() {
  return (
   <Router basename="/website-Portfolio/information-tech/it-website/">
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/program" element={<Programs />}/>
    </Routes>
    <ContactUs />
    <Footer />
   </Router>
  );
}

export default App;
