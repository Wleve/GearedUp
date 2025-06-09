import React from "react";
import { Link } from "react-router-dom";
import './Style.css';
import './stylecontact.css';

const Contact = () => (
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
    <h1 className="header">Contact us</h1>
    <div className="content">
      <div className="contact">
      <h1 className="contacttext">
          Feel Free to reach out at any of the following methods:
        </h1>
        <div className='imagetextpair'>
          <img src="https://pngimg.com/d/phone_PNG48972.png" className="contactimg" alt="Phone" />
          <p className="imagetexttext">555 123 4567</p>
        </div>
         <div className='imagetextpair'>
          <img src="https://www.iconpacks.net/icons/2/free-instagram-logo-icon-3497-thumb.png" className="contactimg" alt="Insta" />
          <p className="imagetexttext">@GearedupForyou</p>
        </div>

 <div className='imagetextpair'>
          <img src="https://static-00.iconduck.com/assets.00/globe-icon-2048x2048-la3vxx3a.png" className="contactimg" alt="Web" />
          <p className="imagetexttext">GearedupForyou.com</p>
        </div>


      
        
        
      </div>
    </div>
    <footer className="footer">
      <div className="footer">
        <p className="footerText">© 2025 William Levesque for SEG3125 at Uottawa</p>
      </div>
    </footer>
  </>
);

export default Contact;