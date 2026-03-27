import React, { useState } from 'react';
import Navbar from './components/Navbar';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [view, setView] = useState('login');

  return (
    <div className="main-wrapper">
      <Navbar onToggle={() => setView('login')} />
      {view === 'login' ? (
        <LoginForm onToggle={() => setView('register')} />
      ) : (
        <RegisterForm onToggle={() => setView('login')} />
      )}
      <Footer />
    </div>
  );
}

export default App;
