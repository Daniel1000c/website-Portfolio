import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/siteContact';
import './App.css';

function App() {
  return (
   <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/faculty" />
      <Route path="/program" />
    </Routes>
    <ContactUs />
    <Footer />
   </Router>
  );
}

export default App;
