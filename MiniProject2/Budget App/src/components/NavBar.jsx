// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul>
        <li>
          <Link to="/">Budget Tracker</Link>
        </li>
        <li>
          <Link to="/about">Stock Tracker</Link>
        </li>
        <li>
          <Link to="/contact">Calculator</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
