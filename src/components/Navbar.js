import React, { useState } from 'react';
import './Navbar.css';

function Navbar() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleNavbar = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <nav className={`navbar ${isExpanded ? 'expanded' : ''}`} onClick={toggleNavbar}>
      <div className="navbar-container">
        <div className="navbar-logo">
          <i className="fas fa-flask"></i> {/* Puoi sostituire con il tuo logo */}
        </div>
        <ul className={`navbar-links ${isExpanded ? 'show' : ''}`}>
          <li><a href="#about">About</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#experience">Experience</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
