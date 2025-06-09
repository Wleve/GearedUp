import React from "react";
import './styleServices.css';
import './Style.css';
import { Link } from 'react-router-dom';

const Services = () => (
  <>
  <div></div><div className="navbar">
    <ul>
     <li><Link to="/">Home</Link></li>
     <li><Link to="/Book">Book</Link></li>
     <li><Link to="/Services">Services</Link></li>
     <li><Link to="/About">About</Link></li>
     <li><Link to="/Contact">Contact</Link></li>
     
    </ul>
</div>

    <div className="content">
      <div className="servicebg">
        <h1 className="headerservice">Services we offer</h1>
            <div className="service-images">
  <div className="service-image-container">
    <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSUALJ8EmKJkH3OGKEJJmgwjcG6h-wYxxccA&s" alt="Tune-Up" />
    <p className="service-text">Professional Tune-Up Service - 40$+</p>
  </div>
  <div className="service-image-container">
    <img src="https://i.etsystatic.com/28959621/r/il/e55f25/5593079123/il_570xN.5593079123_41uf.jpg" alt="Repair" />
    <p className="service-text">Expert Repair Service - 60$+</p>
  </div>
  <div className="service-image-container">
    <img src="https://i.etsystatic.com/16237790/r/il/ae8bf5/5655740776/il_fullxfull.5655740776_p51c.jpg" alt="Customization" />
    <p className="service-text">Customization - 100$+</p>
  </div>
</div>
        </div>
    </div>

<footer className="footer">
   
        <p className="footerText">© 2025 William Levesque for SEG3125 at Uottawa
        </p>
</footer>

  </>
);
export default Services;
