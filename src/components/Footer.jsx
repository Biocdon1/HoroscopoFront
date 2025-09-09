import React from 'react';
import { Link } from 'react-router-dom';

const linkColor = { color: '#b28dff' }; // Morado claro
const textColor = { color: '#aaa' };    // Gris claro reutilizado de Privacy.jsx

const Footer = () => {
  return (
    <footer className="footer">
      <p style={textColor}>
        &copy; 2025 BiocZodiac. Todos tus signos en un solo lugar.
      </p>
      <div className="footer-links">
        <Link to="/about" style={linkColor}>Sobre Nosotros</Link>{" "}
        <span style={linkColor}>|</span>{" "}
        <Link to="/contact" style={linkColor}>Contacto</Link>{" "}
        <span style={linkColor}>|</span>{" "}
        <Link to="/privacy" style={linkColor}>Privacidad</Link>
      </div>
    </footer>
  );
};

export default Footer;