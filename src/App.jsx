import React, { useState } from 'react';
import Navbar from './components/common/Navbar';
import LoginForm from './features/auth/LoginForm';
import RegisterForm from './features/auth/RegisterForm';
import Home from './pages/Home';
import Category from './features/category/Category';
import Cart from './features/cart/Cart';
import Checkout from './features/cart/Checkout';
import Footer from './components/common/Footer';
import AdminPanel from './features/admin/AdminPanel';
import UserProfile from './features/user/UserProfile';
import './App.css';

function App() {
  const [view, setView] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [isAdmin, setIsAdmin] = useState(false);

  const handleLogin = (isAdminRole = false) => {
    setIsLoggedIn(true);
    setIsAdmin(isAdminRole);
    setView(isAdminRole ? 'admin' : 'home');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    setView('login');
  };

  return (
    <div className="main-wrapper">
      {view !== 'admin' && (
        <Navbar 
          activeView={view}
          onToggle={() => setView('login')} 
          isLoggedIn={isLoggedIn} 
          onLogout={handleLogout} 
          onHome={() => setView('home')}
          onCategory={() => setView('category')}
          onCart={() => setView('cart')}
          onProfile={() => setView('profile')}
        />
      )}
      {view === 'login' ? (
        <LoginForm onToggle={() => setView('register')} onLoginSuccess={handleLogin} />
      ) : view === 'register' ? (
        <RegisterForm onToggle={() => setView('login')} />
      ) : view === 'category' ? (
        <Category />
      ) : view === 'cart' ? (
        <Cart onContinueShopping={() => setView('category')} onCheckout={() => setView('checkout')} />
      ) : view === 'checkout' ? (
        <Checkout />
      ) : view === 'profile' ? (
        <UserProfile />
      ) : view === 'admin' ? (
        <AdminPanel onLogout={handleLogout} />
      ) : (
        <Home />
      )}
      {view !== 'admin' && <Footer />}
    </div>
  );
}

export default App;
