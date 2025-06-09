import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import Book from './Book.jsx';
import './index.css';
import './Style.css';
import About from './About.jsx';
import Services from './Services.jsx';
import Contact from './Contact.jsx';
import Confirmed from './Confirmed.jsx';


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Book" element={<Book />} />
        <Route path="/About" element={<About />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="/Confirmed" element={<Confirmed />} />

      </Routes>
    </Router>
  );
}

export default App;