import React from 'react';

const Navbar = ({ onLogin, onRegister, isLoggedIn, isAdmin, onLogout, onHome, onCategory, onCart, onProfile, onAdmin, activeView }) => {
  return (
    <nav className="navbar" style={{ padding: '20px 40px', borderBottom: '1px solid #eee' }}>
      <div 
        className="logo font-serif" 
        onClick={(e) => { e.preventDefault(); onHome(); }} 
        style={{ cursor: 'pointer', fontSize: '1.4rem', fontWeight: 'bold' }}
      >
        The Intellectual Curator
      </div>
      
      <div className="nav-actions">
        <div className="nav-links">
          <a href="#" style={{ fontWeight: activeView === 'home' ? '600' : 'normal', borderBottom: activeView === 'home' ? '2px solid #1a1a1a' : 'none' }} onClick={(e) => { e.preventDefault(); onHome(); }}>Trang chủ</a>
          <a href="#" style={{ fontWeight: activeView === 'category' ? '600' : 'normal', borderBottom: activeView === 'category' ? '2px solid #1a1a1a' : 'none', color: activeView === 'category' ? '#0a4275' : 'inherit' }} onClick={(e) => { e.preventDefault(); onCategory(); }}>Danh mục</a>
          {isLoggedIn && isAdmin && (
            <a href="#" style={{ fontWeight: activeView === 'admin' ? '600' : 'normal', borderBottom: activeView === 'admin' ? '2px solid #1a1a1a' : 'none', color: '#8b0000' }} onClick={(e) => { e.preventDefault(); onAdmin(); }}>Quản trị</a>
          )}
          <a href="#">Blog</a>
          <a href="#">Liên hệ</a>
        </div>
        
        <div className="search-bar" style={{ display: 'flex', alignItems: 'center', background: '#f5f5f5', borderRadius: '20px', padding: '5px 15px' }}>
          <input 
            type="text" 
            placeholder="Tìm kiếm chương mới theo của bạn..." 
            style={{ border: 'none', background: 'transparent', outline: 'none', fontSize: '0.85rem', width: '220px' }}
          />
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
        </div>

        <div className="nav-icons">
          <button aria-label="Favorites" style={{ color: '#444' }}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
          </button>
          <button aria-label="Shopping Bag" style={{ color: activeView === 'cart' ? '#0a4275' : '#444' }} onClick={onCart}>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/></svg>
          </button>
        </div>
        
        <div className="auth-buttons" style={{ display: 'flex', gap: '15px', alignItems: 'center' }}>
          {isLoggedIn ? (
            <>
              <div 
                className="user-avatar" 
                onClick={onProfile}
                style={{ 
                  width: '36px', height: '36px', borderRadius: '50%', background: '#eee', 
                  display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer',
                  border: activeView === 'profile' ? '2px solid #0a4275' : '1px solid #ccc',
                  overflow: 'hidden'
                }}
                title="Tài khoản của tôi"
              >
                <img src="https://i.pravatar.cc/150?img=11" alt="Avatar" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <button 
                onClick={onLogout}
                style={{ padding: '6px 16px', borderRadius: '20px', background: '#333', color: 'white', fontSize: '0.85rem', fontWeight: 'bold', cursor: 'pointer' }}
              >
                Đăng xuất
              </button>
            </>
          ) : (
            <>
              <button 
                onClick={onRegister}
                style={{ padding: '6px 16px', borderRadius: '20px', background: '#333', color: 'white', fontSize: '0.85rem', fontWeight: 'bold' }}
              >
                Đăng ký
              </button>
              <button 
                onClick={onLogin}
                style={{ padding: '6px 16px', borderRadius: '20px', border: '1px solid #333', background: 'transparent', color: '#333', fontSize: '0.85rem', fontWeight: 'bold' }}
              >
                Đăng nhập
              </button>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
