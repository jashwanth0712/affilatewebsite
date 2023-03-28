import React from 'react';
import './Header.css';

function Header() {
  return (
    <header className="header">
      <nav className="navbar">
        <div className="container">
          <div className="navbar-brand">
            <a href="/">
              <img src="/logo.png" alt="Logo" className="logo" />
            </a>
          </div>
          <ul className="navbar-menu">
            <li className="navbar-item">
              <a href="/" className="navbar-link">Home</a>
            </li>
            <li className="navbar-item">
              <a href="/products" className="navbar-link">Products</a>
            </li>
            <li className="navbar-item">
              <a href="/about" className="navbar-link">About Us</a>
            </li>
            <li className="navbar-item">
              <a href="/contact" className="navbar-link">Contact Us</a>
            </li>
          </ul>
        </div>
      </nav>
      <div className="header-content">
        <h1 className="header-title">GET PAID TO CHAT
FROM HOME</h1>
        <p className="header-description">Make up to $500 per day doing easy work online</p>
        <a href="/buy-now" className="btn-primary">Buy Now</a>
      </div>
    </header>
  );
}

export default Header;
