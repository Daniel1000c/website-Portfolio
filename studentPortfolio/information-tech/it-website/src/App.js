import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import ContactUs from './components/ContactUs';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
   <Router>
    <Header />
    <Routes>
      <Route path="/" />
      <Route path="/about" />
      <Route path="/contact" />
      <Route path="/faculty" />
      <Route path="/program" />
    </Routes>
    <ContactUs />
    <Footer />
   </Router>
  );
}

export default App;
