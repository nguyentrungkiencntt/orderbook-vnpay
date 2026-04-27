import { useState } from 'react';

const LoginForm = ({ onToggle, onLoginSuccess }) => {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email === 'admin@gmail.com' && password === '123456') {
      setError('');
      onLoginSuccess(true); // isAdmin
    } else if (email === 'user@example.com' && password === '123456') {
      setError('');
      onLoginSuccess(false); // user
    } else {
      setError('Email hoặc mật khẩu không chính xác!');
    }
  };

  return (
    <section className="login-section">
      <div className="login-card">
        <div className="login-left">
          <div className="login-left-content">
            <p className="quote font-serif">
              “Mỗi cuốn sách là một giấc mơ bạn cầm trên tay.”
            </p>
            <p className="quote-author">— NEIL GAIMAN</p>
          </div>
        </div>
        
        <div className="login-right">
          <div className="form-header">
            <h2 className="font-serif">Chào mừng trở lại</h2>
            <p>Tiếp tục hành trình tri thức cùng chúng tôi.</p>
          </div>

          <form onSubmit={handleSubmit}>
            {error && <div style={{ color: 'red', marginBottom: '15px', fontSize: '0.9rem' }}>{error}</div>}
            <div className="input-group">
              <label>Email</label>
              <input 
                type="email" 
                className="input-control" 
                placeholder="ten@vidu.com" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>

            <div className="input-group">
              <label>Mật khẩu</label>
              <div className="password-input-wrapper">
                <input 
                  type={showPassword ? "text" : "password"} 
                  className="input-control" 
                  placeholder="********" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <button 
                  type="button" 
                  className="toggle-password"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? "👁️" : "🔒"}
                </button>
              </div>
            </div>

            <div className="remember-forgot">
              <div className="checkbox-group">
                <input type="checkbox" id="rem" />
                <label htmlFor="rem">Ghi nhớ đăng nhập</label>
              </div>
              <a href="#" className="forgot-link">Quên mật khẩu?</a>
            </div>

            <button type="submit" className="btn-primary">Đăng Nhập</button>
          </form>

          <div className="divider">HOẶC TIẾP TỤC VỚI</div>

          <div className="social-actions">
            <button className="social-btn">
              <img src="https://www.google.com/favicon.ico" width="16" alt="" /> Google
            </button>
            <button className="social-btn">
              <img src="https://www.facebook.com/favicon.ico" width="16" alt="" /> Facebook
            </button>
          </div>

          <div className="signup-prompt">
            Chưa có tài khoản? <span onClick={onToggle} style={{ cursor: 'pointer' }}>Đăng ký ngay</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;
