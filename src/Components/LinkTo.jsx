import React from 'react';
import { BrowserRouter as Router,Routes,Route,Navigate } from 'react-router-dom';
import Header from './Header/Header';

import Home from '../Pages/Home';
import About from  '../Pages/About';
import Service from '../Pages/Service';
import Contact from '../Pages/Contact';


function LinkTo() {
  return (
    <div>

    <Router>
    <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="/contact" element={<Contact />} />
        <Route exact path="/services" element={<Service />} />
      </Routes>
   
    </Router>

    </div>
  )
}

export default LinkTo