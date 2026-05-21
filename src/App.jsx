import { useState, useEffect } from 'react';
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
import BookDetail from './features/books/BookDetail';
import Complete from './features/cart/Complete';
import './App.css';

function App() {
  const [view, setView] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [selectedBook, setSelectedBook] = useState(null);
  const [prevView, setPrevView] = useState('home');
  const [toast, setToast] = useState({ show: false, message: '' });
  const [checkoutItems, setCheckoutItems] = useState([]);

  // Handle browser back/forward buttons
  useEffect(() => {
    const handlePopState = (event) => {
      if (event.state && event.state.view) {
        setView(event.state.view);
      } else {
        setView('home');
      }
    };

    window.addEventListener('popstate', handlePopState);
    
    // Initial state: if the app was loaded on a path like /complete, reflect it
    const pathname = window.location.pathname || '';
    if (pathname.startsWith('/complete')) {
      setView('complete');
      window.history.replaceState({ view: 'complete' }, '', pathname + window.location.search);
    } else if (!window.history.state) {
      window.history.replaceState({ view: 'home' }, '', '');
    }

    return () => window.removeEventListener('popstate', handlePopState);
  }, []);

  // Wrapper for setView that also updates history
  const navigateTo = (newView) => {
    window.history.pushState({ view: newView }, '', '');
    setView(newView);
  };

  const handleLogin = (isAdminRole = false) => {
    setIsLoggedIn(true);
    setIsAdmin(isAdminRole);
    navigateTo(isAdminRole ? 'admin' : 'home');
  };

  const handleBookClick = (book) => {
    setPrevView(view);
    setSelectedBook(book);
    navigateTo('book-detail');
    window.scrollTo(0, 0);
  };

  const handleBuyNow = (book, qty) => {
    const item = {
      id: book.id,
      title: book.title,
      price: book.price,
      img: book.img,
      qty: qty
    };
    setCheckoutItems([item]);
    if (isLoggedIn) {
      navigateTo('checkout');
    } else {
      alert('Vui lòng đăng nhập để tiến hành thanh toán.');
      navigateTo('login');
    }
  };

  // Navigate to a special complete view
  const navigateToComplete = () => {
    window.history.pushState({ view: 'complete' }, '', '/complete');
    setView('complete');
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setIsAdmin(false);
    navigateTo('login');
  };

  const showToast = (message) => {
    setToast({ show: true, message });
    setTimeout(() => setToast({ show: false, message: '' }), 3000);
  };

  return (
    <div className="main-wrapper">
      {view !== 'admin' && (
        <Navbar 
          activeView={view}
          onLogin={() => navigateTo('login')} 
          onRegister={() => navigateTo('register')}
          isLoggedIn={isLoggedIn} 
          isAdmin={isAdmin}
          onLogout={handleLogout} 
          onHome={() => navigateTo('home')}
          onCategory={() => navigateTo('category')}
          onCart={() => {
            if (isLoggedIn) {
              navigateTo('cart');
            } else {
              alert('Vui lòng đăng nhập để xem giỏ hàng và đơn hàng của bạn.');
              navigateTo('login');
            }
          }}
          onProfile={() => {
            if (isLoggedIn) {
              navigateTo('profile');
            } else {
              navigateTo('login');
            }
          }}
          onAdmin={() => {
            if (isLoggedIn && isAdmin) {
              navigateTo('admin');
            } else {
              navigateTo('login');
            }
          }}
        />
      )}
      {view === 'login' ? (
        <LoginForm onToggle={() => navigateTo('register')} onLoginSuccess={handleLogin} />
      ) : view === 'register' ? (
        <RegisterForm onToggle={() => navigateTo('login')} />
      ) : view === 'category' ? (
        <Category onBookClick={handleBookClick} />
      ) : view === 'book-detail' ? (
        <BookDetail 
          book={selectedBook} 
          onBack={() => navigateTo(prevView)} 
          onHome={() => navigateTo('home')}
          onCategory={() => navigateTo('category')}
          onAddToCart={(book, qty) => {
            showToast(`Đã thêm ${qty} cuốn "${book.title}" vào giỏ hàng thành công!`);
          }} 
          onBuyNow={handleBuyNow}
        />
      ) : view === 'cart' ? (
        isLoggedIn ? (
          <Cart onContinueShopping={() => navigateTo('category')} onCheckout={() => navigateTo('checkout')} />
        ) : (
          <LoginForm onToggle={() => navigateTo('register')} onLoginSuccess={handleLogin} />
        )
      ) : view === 'checkout' ? (
        isLoggedIn ? (
          <Checkout items={checkoutItems} />
        ) : (
          <LoginForm onToggle={() => navigateTo('register')} onLoginSuccess={handleLogin} />
        )
      ) : view === 'complete' ? (
        <Complete />
      ) : view === 'profile' ? (
        isLoggedIn ? (
          <UserProfile />
        ) : (
          <LoginForm onToggle={() => navigateTo('register')} onLoginSuccess={handleLogin} />
        )
      ) : view === 'admin' ? (
        <AdminPanel onLogout={handleLogout} onViewSite={() => navigateTo('home')} />
      ) : (
        <Home onBookClick={handleBookClick} />
      )}
      {view !== 'admin' && <Footer />}
      
      {/* Toast Notification */}
      {toast.show && (
        <div className="toast-notification">
          <div className="toast-content">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>
            <span>{toast.message}</span>
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
