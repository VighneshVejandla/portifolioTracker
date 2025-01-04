import React from 'react';
import { Link } from 'react-router-dom';
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
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/portfolio">Portfolio</Link>
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
