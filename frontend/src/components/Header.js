import React from 'react';
// import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import './Header.css';

const Header = ({ onAddStockClick }) => {
  return (
    <header className="header">
  <div className="logo">
    <h1>Portfolio Tracker</h1>
  </div>
  <nav className="nav-links">
    <ul>
      <li>
        <a 
              href="https://github.com/VighneshVejandla" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <FaGithub size={16} /> GitHub
            </a>
      </li>
      <li>
      <a 
              href="https://www.linkedin.com/in/vighnesh-vejandla-59b87822b/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-link"
            >
              <FaLinkedin size={16} /> LinkedIn
            </a>
      </li>
      <li>
        <button className="add-stock-btn" onClick={onAddStockClick}>Add Stock</button>
      </li>
    </ul>
  </nav>
</header>

  );
};

export default Header;
