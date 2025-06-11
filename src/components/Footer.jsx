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
            <h3 className="footer-title">Pedidos</h3>
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
            <h3 className="footer-title">Danos like</h3>
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

        <div className="footer-section">
            <h3 className="footer-title">Síguenos</h3>
            <br />

            {/* Enlace a Instagram con su icono */}
            <a
                href="https://www.instagram.com/entrepanasburgergastrobar/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link social-link"
            >
                <svg
                className="footer-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-labelledby="instagramTitle"
                role="img"
                >
                <title id="instagramTitle">Instagram</title>
                {/* Contorno circular + círculo interior */}
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 1.366.062 2.633.346 3.608
                        1.32.975.975 1.259 2.242 1.32 3.608.058 1.266.069 1.645.069
                        4.84s-.012 3.574-.07 4.84c-.062 1.366-.345 2.633-1.32
                        3.608-.975.975-2.242 1.259-3.608 1.32-1.266.058-1.645.069-4.84.069s-3.574
                        -.012-4.84-.07c-1.366-.062-2.633-.345-3.608-1.32-.975
                        -.975-1.259-2.242-1.32-3.608-.058-1.266-.069-1.645-.069
                        -4.84s.012-3.574.07-4.84c.062-1.366.345-2.633
                        1.32-3.608.975-.975 2.242-1.259 3.608-1.32 1.266-.058
                        1.645-.069 4.84-.069m0-2.163C8.736 0 8.332.014 7.052.072
                        5.772.13 4.658.418 3.68 1.396 2.702 2.374 2.414 3.488
                        2.356 4.768.29 4.756 0 8.69 0 12c0 3.31.29 7.246
                        2.356 8.232.058 1.28.346 2.394 1.324 3.372.978.978
                        2.092 1.266 3.372 1.324C8.332 23.986 8.736 24 12 24c3.264
                        0 3.668-.014 4.948-.072 1.28-.058 2.394-.346
                        3.372-1.324.978-.978 1.266-2.092 1.324-3.372C23.71
                        19.246 24 15.31 24 12c0-3.31-.29-7.246-2.356-8.232
                        -.058-1.28-.346-2.394-1.324-3.372C19.342.418
                        18.228.13 16.948.072 15.668.014 15.264 0 12 0z"
                />
                <circle cx="12" cy="12" r="3.6" />
                </svg>
            </a>
            <br />

            {/* Etiqueta de texto */}
            <a
                href="https://www.instagram.com/entrepanasburgergastrobar/"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link social-link"
            >
                <span>Instagram</span>
            </a>
        </div>

        <div className="footer-section">
            <h3 className="footer-title">Comparte</h3>
            <br />

            {/* Enlace a TikTok con su icono */}
            <a
                href="https://www.tiktok.com/@entrepanas_21"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link social-link"
            >
                <svg
                className="footer-icon"
                viewBox="0 0 24 24"
                fill="currentColor"
                aria-labelledby="tiktokTitle"
                role="img"
                >
                <title id="tiktokTitle">TikTok</title>
                {/* Nota musical, icono oficial de TikTok (Ionicons “logo-tiktok”) */}
                <path d="M9.75 3v12.75A4.5 4.5 0 1 0 14.25 20v-7.5h3.75V9h-3.75V3H9.75z" />
                </svg>
            </a>
            <br />

            {/* Etiqueta de texto */}
            <a
                href="https://www.tiktok.com/@entrepanas_21"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link social-link"
            >
                <span>TikTok</span>
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