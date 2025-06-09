import React from "react";
import './styleabout.css';
import './Style.css';
import { Link } from 'react-router-dom';

const About = () => (
  <>  <div >

    
   <div className="navbar">
       <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/Book">Book</Link></li>
        <li><Link to="/Services">Services</Link></li>
        <li><Link to="/About">About</Link></li>
        <li><Link to="/Contact">Contact</Link></li>
        
       </ul>
   </div>
    <h1 className="header">About Us</h1>
    <div className="content">
      <div className="aboutbg">
      <div className="about">
        <h1> Who we are</h1>
        <p className="abouttext">
          Welcome to Geared Up Bike Shop! We are a passionate team of bike enthusiasts dedicated to providing top-notch services and products for all your cycling needs. Whether you're a casual rider or a seasoned cyclist, we have something for everyone.
        </p>
        <h1>What we do</h1>
        <p className="abouttext">
          Our shop offers a wide range of bicycles, accessories, and apparel. We also provide expert repair services to keep your bike in perfect condition. Our knowledgeable staff is always ready to assist you with any questions or concerns you may have.
        </p>
        <h1>Where we are</h1>
        <p className="abouttext">
          You can find us at 821 Clearcrest Crescent, Cycling city, Canada. Our shop is conveniently located in the heart of the city, making it easy for you to drop by and check out our latest offerings. We are open Monday to Saturday from 9 AM to 6 PM.
        </p>
        
      </div>
    </div>
    </div>
    <footer className="footer">
      <div className="footer">
        <p className="footerText">© 2025 William Levesque for SEG3125 at Uottawa</p>
      </div>
    </footer>
    </div>
  </>
);

export default About;