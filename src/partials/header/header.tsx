import React from 'react';
import './header.css';

const Header: React.FC = () => (
  <header className="hero hero-sm">
    <nav className="navbar">
      <div className="navbar-section">
        <strong>Binary Studio Academy {new Date().getFullYear()}</strong>
      </div>
      <div className="navbar-section"></div>
    </nav>
  </header>
);

export { Header };
