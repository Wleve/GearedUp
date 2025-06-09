import React from "react";
import { Link } from "react-router-dom";
import './stylebook.css';
import './Style.css';
import bikerepair from './12uez2pa.png'

const Book = () => (
  <>
    <div className="navbar">
        <ul>
         <li><Link to="/">Home</Link></li>
         <li><Link to="/Book">Book</Link></li>
         <li><Link to="/Services">Services</Link></li>
         <li><Link to="/About">About</Link></li>
         <li><Link to="/Contact">Contact</Link></li>
         
        </ul>
    </div><div className='bgbook'>
    
    <h1 className="header">Book your appointment</h1>
    <div className="content"> 
      <img src={bikerepair} alt="bikerpeair" className="bikeimage" />
        <div className="booktext"><input type="date" className="date" />

        <select className="options" >
  <option value="">Select a service</option>
  <option value="tuneup">Tune-Up</option>
  <option value="repair">Repair</option>
  <option value="customization">Customization</option>
</select>
<Link to='/Confirmed'><button className="confirmbutton" >Confirm booking</button></Link>
</div>
      <div className="book">
       
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

export default Book;