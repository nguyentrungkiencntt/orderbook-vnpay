import React, { useState } from 'react';

const RegisterForm = ({ onToggle }) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <section className="login-section">
      <div className="login-card">
        <div className="login-left register-bg">
          <div className="login-left-content">
            <p className="quote font-serif">
              “Sách là những người bạn yên lặng nhất và trung thành nhất; chúng là những người cố vấn dễ tiếp cận và khôn ngoan nhất, và là những giáo viên kiên nhẫn nhất.”
            </p>
            <p className="quote-author">— CHARLES WILLIAM ELIOT</p>
          </div>
        </div>
        
        <div className="login-right">
          <div className="form-header">
            <h2 className="font-serif">Tạo tài khoản mới</h2>
            <p>Tham gia cộng đồng những người yêu sách và bắt đầu hành trình sưu tầm của riêng bạn.</p>
          </div>

          <form onSubmit={(e) => e.preventDefault()}>
            <div className="input-group">
              <label>HỌ VÀ TÊN</label>
              <input type="text" className="input-control" placeholder="Nguyễn Văn A" />
            </div>

            <div className="input-group">
              <label>EMAIL</label>
              <input type="email" className="input-control" placeholder="example@bibliophile.com" />
            </div>

            <div className="form-row">
              <div className="input-group">
                <label>MẬT KHẨU</label>
                <input type="password" width="100%" className="input-control" placeholder="********" />
              </div>
              <div className="input-group">
                <label>XÁC NHẬN</label>
                <input type="password" width="100%" className="input-control" placeholder="********" />
              </div>
            </div>

            <div className="checkbox-group" style={{ marginBottom: '20px', fontSize: '0.8rem' }}>
              <input type="checkbox" id="terms" />
              <label htmlFor="terms">Tôi đồng ý với các <u>Điều khoản dịch vụ</u> và <u>Chính sách bảo mật</u>.</label>
            </div>

            <button className="btn-primary">Đăng Ký →</button>
          </form>

          <div className="signup-prompt" style={{ marginTop: '30px' }}>
            Đã có tài khoản? <span onClick={onToggle}>Đăng nhập ngay</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RegisterForm;
