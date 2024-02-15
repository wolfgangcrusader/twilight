import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; 

function Navbar() {
  return (
    <nav className="navbar">
        <div className='title'>
        <h3>TWILIGHT ONLINE</h3>
        </div>
        <div className='navbuttons'>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/quotes">Quotes</Link></li>
        <li><Link to="/characters">Character Profiles</Link></li>
        <li><Link to="/movies">About the Films</Link></li>
        <li><Link to="/photos">Lion and the Lamb</Link></li>
      </ul>
      </div>
    </nav>
  );
}

export default Navbar;
