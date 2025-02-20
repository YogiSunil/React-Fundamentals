import React from 'react';
import './Footer.css';

function Footer() {
  return (
    <footer className="Footer">
      <p>© {new Date().getFullYear()} Sunil Nath </p>
    </footer>
  );
}

export default Footer;
