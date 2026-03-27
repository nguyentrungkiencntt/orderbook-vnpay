import React from 'react';

const Navbar = ({ onToggle }) => {
  return (
    <nav className="navbar">
      <div className="logo font-serif">The Digital Bibliophile</div>
      
      <div className="nav-actions">
        <div className="nav-links">
          <a href="#">Collections</a>
          <a href="#">Rare Finds</a>
          <a href="#">Essays</a>
        </div>
        <div className="nav-icons">
          <button aria-label="Shopping Bag">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
          <button aria-label="User Account">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
          </button>
        </div>
        <div className="home-link" onClick={onToggle} style={{ cursor: 'pointer', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase', opacity: 0.6 }}>
          Trở lại trang chủ
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
