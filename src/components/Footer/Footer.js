import React from "react";
import "./Footer.css";

const Footer = () => (
  <footer className="hero hero-sm">
    <div className="navbar">
      <section className="navbar-section">
        <div className="text-gray">
          Copyright © {new Date().getFullYear()} <strong>Binary Studio</strong>. All rights reserved.
        </div>
      </section>
      <section className="navbar-section">
        <div className="text-gray">
          Made with 🧠🤲💻❤️
        </div>
      </section>
    </div>
  </footer>
);

export default Footer;
