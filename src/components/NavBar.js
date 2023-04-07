import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import './navbar.css';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <Link to="/" className="navbar-logo">
        Qoroshi
      </Link>
      <div className="menu-icon" onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </div>
      <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
        <li className="nav-item">
          <Link to="/dashboard" className="nav-links" onClick={toggleMenu}>
            Dashboard
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/income" className="nav-links" onClick={toggleMenu}>
            Income
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/expenses" className="nav-links" onClick={toggleMenu}>
            Expenses
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/budgets" className="nav-links" onClick={toggleMenu}>
            Budgets
          </Link>
        </li>
        <li className="nav-item">
          <Link to="/reports" className="nav-links" onClick={toggleMenu}>
            Reports
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
