import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Home from './components/Home';
import Category from './components/Category';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Footer from './components/Footer';
import AdminPanel from './components/AdminPanel';
import UserProfile from './components/UserProfile';
import './App.css';

function App() {
  const [view, setView] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
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
