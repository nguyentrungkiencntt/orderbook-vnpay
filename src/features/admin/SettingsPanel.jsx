import React, { useState } from 'react';
import './SettingsPanel.css';

const SettingsPanel = () => {
  const [settings, setSettings] = useState({
    storeName: 'The Intellectual Curator',
    contactEmail: 'admin@intellectualcurator.com',
    address: '221B Baker Street, London, NW1 6XE, United Kingdom',
    paymentBank: true,
    paymentMoMo: true,
    paymentVNPAY: false,
    shippingFee: 15.00,
    freeShipping: true
  });

  const handleToggle = (key) => {
    setSettings(prev => ({ ...prev, [key]: !prev[key] }));
  };

  return (
    <div className="settings-container">
      <header className="settings-header">
        <h1 className="font-serif">Cài đặt hệ thống</h1>
        <p>Quản lý thông tin cửa hàng, thanh toán và vận chuyển của bạn.</p>
      </header>

      {/* General Info */}
      <section className="settings-section">
        <h2 className="section-title">
          <span className="section-icon">ⓘ</span> Thông tin chung
        </h2>
        <div className="settings-form-grid">
          <div className="settings-input-group">
            <label>Tên cửa hàng</label>
            <input 
              type="text" 
              value={settings.storeName} 
              onChange={(e) => setSettings({...settings, storeName: e.target.value})}
            />
          </div>
          <div className="settings-input-group">
            <label>Email liên hệ</label>
            <input 
              type="email" 
              value={settings.contactEmail}
              onChange={(e) => setSettings({...settings, contactEmail: e.target.value})}
            />
          </div>
          <div className="settings-input-group full-width">
            <label>Địa chỉ trụ sở</label>
            <textarea 
              rows="3" 
              value={settings.address}
              onChange={(e) => setSettings({...settings, address: e.target.value})}
            ></textarea>
          </div>
        </div>

        <div className="settings-input-group">
          <label>Logo cửa hàng</label>
          <div className="logo-upload-container">
            <div className="logo-preview">
               <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#ccc" strokeWidth="1">
                 <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
                 <circle cx="8.5" cy="8.5" r="1.5" />
                 <polyline points="21 15 16 10 5 21" />
               </svg>
            </div>
            <button className="btn-upload">Tải ảnh mới</button>
            <button className="btn-remove">Gỡ bỏ</button>
          </div>
        </div>
      </section>

      <div style={{ height: '1px', background: '#e5e7eb', margin: '10px 0' }}></div>

      {/* Payment and Shipping Grid */}
      <div className="shipping-grid">
        {/* Payment Section */}
        <section className="settings-section">
          <h2 className="section-title">
            <span className="section-icon">💳</span> Thanh toán
          </h2>
          <div className="settings-list">
            <div className="settings-row">
              <div className="row-info">
                <h4>Chuyển khoản ngân hàng</h4>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={settings.paymentBank} 
                  onChange={() => handleToggle('paymentBank')}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="settings-row">
              <div className="row-info">
                <h4>Ví điện tử MoMo</h4>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={settings.paymentMoMo} 
                  onChange={() => handleToggle('paymentMoMo')}
                />
                <span className="slider"></span>
              </label>
            </div>
            <div className="settings-row">
              <div className="row-info">
                <h4>Cổng VNPAY</h4>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={settings.paymentVNPAY} 
                  onChange={() => handleToggle('paymentVNPAY')}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </section>

        {/* Shipping Section */}
        <section className="settings-section">
          <h2 className="section-title">
            <span className="section-icon">🚚</span> Vận chuyển
          </h2>
          <div className="settings-list">
            <div className="settings-row">
              <div className="row-info">
                <h4>Phí vận chuyển đồng giá</h4>
              </div>
              <div className="shipping-value">
                ${settings.shippingFee.toFixed(2)} <span className="edit-icon">✏️</span>
              </div>
            </div>
            <div className="settings-row">
              <div className="row-info">
                <h4>Miễn phí vận chuyển</h4>
                <p>Cho đơn hàng trên $150.00</p>
              </div>
              <label className="switch">
                <input 
                  type="checkbox" 
                  checked={settings.freeShipping} 
                  onChange={() => handleToggle('freeShipping')}
                />
                <span className="slider"></span>
              </label>
            </div>
          </div>
        </section>
      </div>

      <footer className="settings-footer">
        <button className="btn-cancel">Hủy thay đổi</button>
        <button className="btn-save">Lưu tất cả thay đổi</button>
      </footer>
    </div>
  );
};

export default SettingsPanel;
