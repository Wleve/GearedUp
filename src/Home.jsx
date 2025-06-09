import React from 'react';
import { Link } from 'react-router-dom';
import './stylehome.css';
import './Style.css';

const Home = () => (
    <>

<div className="navbar">
    <ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/Book">Book</Link></li>
     <li><Link to="/Services">Services</Link></li>
     <li><Link to="/About">About</Link></li>
     <li><Link to="/Contact">Contact</Link></li>
     
    </ul>
</div>

    <div className="content">
        <div className="bghome">
    <div className="HomeText">
        <p className="Main">Geared up bike shop</p>
        <p className="Sub"><Link className="Book" to="/Book">Book an Appointment</Link></p>
    </div>
        </div>
    </div>

<footer className="footer">
   
        <p className="footerText">© 2025 William Levesque for SEG3125 at Uottawa
        </p>
</footer>

</>
);

export default Home;
