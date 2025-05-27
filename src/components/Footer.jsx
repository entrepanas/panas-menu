// src/components/Footer.jsx
import React from 'react';
import '../App.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
            <h3 className="footer-title">Ubicación</h3>
            <br></br>
            <a 
                href="https://maps.app.goo.gl/c8HqaFvRK6oKUZWW7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link location-link"
            >
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                <circle cx="12" cy="10" r="3"></circle>
            </svg>
            </a> 
            <br></br>
            <a 
                href="https://maps.app.goo.gl/c8HqaFvRK6oKUZWW7" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link location-link"
            >
                <span>Calle 9 # 8-99, Barrio Centro<br />Tolima, El Espinal</span>
            </a>
        </div>

        <div className="footer-section">
            <h3 className="footer-title">Contacto</h3>
            <br></br>
            <a 
                href="tel:3017177934" 
                className="footer-link phone-link"
            >
                <svg className="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
            </a>
            <br></br>
            <a 
                href="tel:3017177934" 
                className="footer-link phone-link"
            >
                
                <span>301 717 7934</span>
            </a>
        </div>

        <div className="footer-section">
            <h3 className="footer-title">Síguenos</h3>
            <br></br>
            <a 
                href="https://www.facebook.com/entrepanasburger.gastrobar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link social-link"
            >
                <svg className="footer-icon" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
            </a> 
            <br></br>
            <a 
                href="https://www.facebook.com/entrepanasburger.gastrobar" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="footer-link social-link"
            >
                <span>Facebook</span>
            </a>  
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <p className="footer-copyright">
          © 2025 Entre Panas - Todos los derechos reservados
        </p>
        <p className="footer-brand">
          Burger • Gastro • Bar
        </p>
      </div>
    </footer>
  );
};

export default Footer;