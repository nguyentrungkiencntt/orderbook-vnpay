import React, { useState } from 'react';
import './Checkout.css';

const summaryItems = [
  {
    id: 1,
    title: 'The Art of Curation: Modern Ethics',
    qty: 1,
    priceStr: '450.000đ',
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  },
  {
    id: 2,
    title: 'Architecture of Silence',
    qty: 2,
    priceStr: '780.000đ',
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=150&q=80'
  }
];

const Checkout = () => {
  const [paymentMethod, setPaymentMethod] = useState('vnpay');

  const handleCheckout = (e) => {
    e.preventDefault();
    alert('Thanh toán thành công! Chuyển hướng...');
  };

  return (
    <div className="checkout-page">
      
      {/* Progress Bar */}
      <div className="checkout-progress">
        <div className="progress-step active">
          <div className="step-number">01</div>
          <span>Thông tin</span>
        </div>
        <div className="progress-line"></div>
        <div className="progress-step">
          <div className="step-number">02</div>
          <span>Thanh toán</span>
        </div>
        <div className="progress-line"></div>
        <div className="progress-step">
          <div className="step-number">03</div>
          <span>Hoàn tất</span>
        </div>
      </div>

      <div className="checkout-layout">
        
        {/* Left Side: Forms */}
        <div className="checkout-form-section">
          
          <h2 className="section-title font-serif">Thông tin nhận hàng</h2>
          
          <form onSubmit={handleCheckout}>
            <div className="form-row">
              <div className="form-group">
                <label>Họ và tên</label>
                <input type="text" className="form-input" placeholder="Nguyễn Văn A" defaultValue="Nguyễn Văn A" required />
              </div>
              <div className="form-group">
                <label>Số điện thoại</label>
                <input type="tel" className="form-input" placeholder="090 123 4567" defaultValue="090 123 4567" required />
              </div>
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label>Địa chỉ email</label>
              <input type="email" className="form-input" placeholder="example@curator.vn" defaultValue="example@curator.vn" required />
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label>Địa chỉ chi tiết</label>
              <input type="text" className="form-input" placeholder="Số nhà, tên đường, phường/xã..." required />
            </div>

            <div className="form-group" style={{ marginBottom: '20px' }}>
              <label>Ghi chú (Tùy chọn)</label>
              <textarea className="form-input" placeholder="Giao hàng trong giờ hành chính..." rows="3"></textarea>
            </div>

            <h2 className="section-title font-serif" style={{ marginTop: '40px' }}>Phương thức thanh toán</h2>
            
            <div className="payment-methods">
              
              {/* COD Option */}
              <div className={`payment-option ${paymentMethod === 'cod' ? 'active' : ''}`}>
                <div className="payment-header" onClick={() => setPaymentMethod('cod')}>
                  <input type="radio" name="payment" className="payment-radio" checked={paymentMethod === 'cod'} readOnly />
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#666" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/><circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/></svg>
                  <div className="payment-info">
                    <h4>Thanh toán khi nhận hàng (COD)</h4>
                    <p>Trả tiền mặt khi người giao hàng đến</p>
                  </div>
                </div>
              </div>

              {/* VNPAY Option */}
              <div className={`payment-option ${paymentMethod === 'vnpay' ? 'active' : ''}`}>
                <div className="payment-header" onClick={() => setPaymentMethod('vnpay')}>
                  <input type="radio" name="payment" className="payment-radio" checked={paymentMethod === 'vnpay'} readOnly />
                  <div style={{ width: '24px', height: '24px', background: '#005A9E', borderRadius: '4px', display: 'flex', alignItems: 'center', justify: 'center', color: 'white', fontSize: '10px', fontWeight: 'bold' }}>VN</div>
                  <div className="payment-info">
                    <h4>VNPAY</h4>
                    <p>Cổng thanh toán điện tử uy tín</p>
                  </div>
                </div>
                
                {paymentMethod === 'vnpay' && (
                  <div className="payment-details">
                    <svg width="60" height="60" viewBox="0 0 24 24" fill="none" stroke="#005A9E" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ marginBottom: '10px' }}><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
                    <h5>Thanh toán an toàn qua cổng VNPAY</h5>
                    <p>Hỗ trợ các loại thẻ ATM, Visa, Mastercard và ví điện tử</p>
                    <button type="button" className="btn-vnpay" onClick={handleCheckout}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>
                      THANH TOÁN VỚI VNPAY
                    </button>
                  </div>
                )}
              </div>

            </div>

            {/* Hidden submit button to allow form submission with enter */}
            <button type="submit" style={{ display: 'none' }}></button>
          </form>
        </div>

        {/* Right Side: Summary */}
        <div className="checkout-summary">
          <h3 className="summary-title font-serif">Tóm tắt đơn hàng</h3>
          
          <div className="summary-item-list">
            {summaryItems.map(item => (
              <div className="summary-item" key={item.id}>
                <img src={item.img} alt={item.title} className="item-thumb" />
                <div className="item-details">
                  <h4 className="font-serif">{item.title}</h4>
                  <p>Số lượng: {item.qty}</p>
                  <span>{item.priceStr}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="summary-costs">
            <div className="cost-row">
              <span>Tạm tính</span>
              <strong>1.230.000đ</strong>
            </div>
            <div className="cost-row">
              <span>Phí vận chuyển</span>
              <strong>Miễn phí</strong>
            </div>
          </div>

          <div className="total-row">
            <span className="label">Tổng cộng</span>
            <span className="value">1.230.000đ</span>
          </div>

          <div className="buyer-protection">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#2e7d32" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>
            <span>Đơn hàng của bạn được bảo vệ bởi chính sách <strong>The Intellectual Curator</strong>. Hoàn trả miễn phí trong vòng 7 ngày.</span>
          </div>

          <button className="btn-continue-checkout" onClick={handleCheckout}>
            TIẾP TỤC &rarr;
          </button>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
