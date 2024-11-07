import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        <div className="footer-left">
          <h2>Nome Cognome</h2>
          <p><i className="fas fa-envelope"></i> email@example.com</p>
          <p><i className="fas fa-phone"></i> +39 123 456 789</p>
        </div>

        <div className="footer-right">
          <div className="social-icons">
            <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="https://www.instagram.com/" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-instagram"></i>
            </a>
            <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
              <i className="fab fa-linkedin-in"></i>
            </a>
          </div>
          <p>&copy; 2024 Nome Cognome. Tutti i diritti riservati.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
