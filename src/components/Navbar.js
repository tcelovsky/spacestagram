import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <nav>
        <ul className="navbar">
          <li className="nav-item">
            <NavLink className="nav-link" to='/' exact>Home</NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to='/about' exact>About</NavLink>
          </li>
        </ul>
    </nav>
  );
};

export default Navbar;