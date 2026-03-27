import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div>
        <div className="logo font-serif" style={{ fontSize: '1rem', marginBottom: '5px' }}>The Digital Bibliophile</div>
        <p>© 2024 The Digital Bibliophile. All rights reserved.</p>
      </div>
      <div className="footer-links">
        <a href="#">Our Story</a>
        <a href="#">Shipping Policy</a>
        <a href="#">Contact</a>
        <a href="#">Terms of Service</a>
      </div>
    </footer>
  );
};

export default Footer;
