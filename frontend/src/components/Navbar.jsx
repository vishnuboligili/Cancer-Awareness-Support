import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/Navbar.css"; // Make sure the path is correct

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="nav-logo">💜 Cancer Awareness</div>

      <div className={`nav-links ${isOpen ? "open" : ""}`}>
        <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
        <Link to="/contact" onClick={() => setIsOpen(false)}>Contact</Link>
        <Link to="/" onClick={() => setIsOpen(false)}>Awareness</Link>
        <Link to="/" onClick={() => setIsOpen(false)}>Support</Link>
      </div>

      {/* Hamburger Menu for Mobile */}
      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
        <div className={`line ${isOpen ? "open" : ""}`}></div>
      </div>
    </nav>
  );
};
