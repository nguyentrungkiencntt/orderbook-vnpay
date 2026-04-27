import React, { useState } from 'react';
import './Cart.css';

const initialCart = [
  {
    id: 1,
    title: 'Triết học nhập môn',
    author: 'Marcus Aurelius',
    price: 250000,
    priceStr: '250.000đ',
    qty: 1,
    totalStr: '250.000đ',
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    selected: true
  },
  {
    id: 2,
    title: 'Nghệ thuật Tư duy Chiến lược',
    author: 'Sun Tzu',
    price: 320000,
    priceStr: '320.000đ',
    qty: 2,
    totalStr: '640.000đ',
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80',
    selected: true
  }
];

const Cart = ({ onContinueShopping, onCheckout }) => {
  const [cartItems, setCartItems] = useState(initialCart);

  const formatPrice = (amount) => {
    return new Intl.NumberFormat('vi-VN').format(amount) + 'đ';
  };

  const toggleSelectAll = (e) => {
    const checked = e.target.checked;
    setCartItems(cartItems.map(item => ({ ...item, selected: checked })));
  };

  const toggleSelect = (id) => {
    setCartItems(cartItems.map(item => 
      item.id === id ? { ...item, selected: !item.selected } : item
    ));
  };

  const updateQty = (id, delta) => {
    setCartItems(cartItems.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.qty + delta);
        return {
          ...item,
          qty: newQty,
          totalStr: formatPrice(item.price * newQty)
        };
      }
      return item;
    }));
  };

  const removeItem = (id) => {
    setCartItems(cartItems.filter(item => item.id !== id));
  };

  // Calculate Subtotal for selected items
  const subtotal = cartItems
    .filter(item => item.selected)
    .reduce((sum, item) => sum + (item.price * item.qty), 0);
  
  const discount = subtotal > 0 ? 50000 : 0;
  const shipping = subtotal > 0 ? 30000 : 0;
  const total = subtotal - discount + shipping;

  const allSelected = cartItems.length > 0 && cartItems.every(item => item.selected);

  return (
    <div className="cart-page">
      <div className="cart-header">
        <h1 className="font-serif">Giỏ hàng của bạn</h1>
        <p>Lựa chọn những tri thức tinh tuyển dành riêng cho hành trình khám phá của bạn.</p>
      </div>

      <div className="cart-layout">
        
        {/* Left Side: Items List */}
        <div className="cart-items-section">
          <table className="cart-table">
            <thead>
              <tr>
                <th style={{ width: '40px' }}>
                  <input 
                    type="checkbox" 
                    className="cart-checkbox" 
                    checked={allSelected}
                    onChange={toggleSelectAll} 
                  />
                </th>
                <th>SẢN PHẨM</th>
                <th>ĐƠN GIÁ</th>
                <th style={{ textAlign: 'center' }}>SỐ LƯỢNG</th>
                <th style={{ textAlign: 'right' }}>THÀNH TIỀN</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map(item => (
                <tr key={item.id}>
                  <td>
                    <input 
                      type="checkbox" 
                      className="cart-checkbox" 
                      checked={item.selected}
                      onChange={() => toggleSelect(item.id)}
                    />
                  </td>
                  <td>
                    <div className="product-cell">
                      <img src={item.img} alt={item.title} className="product-thumb" />
                      <div className="product-details">
                        <h3 className="font-serif">{item.title}</h3>
                        <p>Tác giả: {item.author}</p>
                        <button className="btn-remove" onClick={() => removeItem(item.id)}>
                          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M3 6h18"/><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"/><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"/></svg>
                          XÓA
                        </button>
                      </div>
                    </div>
                  </td>
                  <td className="price-cell">{item.priceStr}</td>
                  <td style={{ textAlign: 'center' }}>
                    <div className="qty-control">
                      <button className="qty-btn" onClick={() => updateQty(item.id, -1)}>-</button>
                      <input type="text" value={item.qty} readOnly className="qty-input" />
                      <button className="qty-btn" onClick={() => updateQty(item.id, 1)}>+</button>
                    </div>
                  </td>
                  <td style={{ textAlign: 'right' }} className="total-cell">{item.totalStr}</td>
                </tr>
              ))}
              {cartItems.length === 0 && (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center', padding: '40px' }}>Giỏ hàng của bạn đang trống.</td>
                </tr>
              )}
            </tbody>
          </table>

          <div className="cart-actions">
            <div className="discount-section">
              <span className="discount-label">MÃ GIẢM GIÁ</span>
              <div className="discount-input-group">
                <input type="text" placeholder="Nhập mã ưu đãi của bạn..." className="discount-input" />
                <button className="btn-apply">ÁP DỤNG</button>
              </div>
            </div>
            
            <button className="btn-continue" onClick={onContinueShopping}>
              &larr; TIẾP TỤC MUA SẮM
            </button>
          </div>
        </div>

        {/* Right Side: Summary */}
        <div className="cart-summary">
          <h2 className="summary-title font-serif">Tóm tắt đơn hàng</h2>
          
          <div className="summary-row">
            <span>Tạm tính</span>
            <span style={{ fontWeight: 600, color: '#1a1a1a' }}>{formatPrice(subtotal)}</span>
          </div>
          <div className="summary-row discount-row">
            <span>Giảm giá</span>
            <span>-{formatPrice(discount)}</span>
          </div>
          <div className="summary-row">
            <span>Phí vận chuyển</span>
            <span style={{ fontWeight: 600, color: '#1a1a1a' }}>{formatPrice(shipping)}</span>
          </div>

          <div className="summary-divider"></div>

          <div className="summary-total">
            <span className="summary-total-label">Tổng cộng</span>
            <div className="summary-total-value">
              <span className="summary-total-price">{formatPrice(total)}</span>
              <span className="summary-total-tax">ĐÃ BAO GỒM VAT</span>
            </div>
          </div>

          <button className="btn-checkout" onClick={onCheckout}>
            TIẾN HÀNH THANH TOÁN &rarr;
          </button>

          <div className="secure-checkout">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            <span>THANH TOÁN AN TOÀN QUA CỔNG VNPAY & VISA</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Cart;
