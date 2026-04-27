import React, { useState } from 'react';
import './AddPromotion.css';

const AddPromotion = ({ promo, onCancel, onSave }) => {
  const isEditMode = !!promo;
  const [discount, setDiscount] = useState(promo ? promo.discount : 10);
  const [name, setName] = useState(promo ? promo.name : '');
  const [validFrom, setValidFrom] = useState(promo ? promo.validFrom.split(' ')[0] : '');
  const [expiresAt, setExpiresAt] = useState(promo ? promo.expiresAt.split(' ')[0] : '');

  const handleDecrease = () => {
    if (discount > 0) setDiscount(discount - 1);
  };

  const handleIncrease = () => {
    if (discount < 100) setDiscount(discount + 1);
  };

  return (
    <div className="add-promo-container">
      <div className="add-promo-header">
        <h1 className="add-promo-page-title">{isEditMode ? 'Sửa khuyến mãi' : 'Thêm khuyến mãi'}</h1>
        <div className="add-promo-header-actions">
           <button className="btn-back-promo" onClick={onCancel}>← Quay lại</button>
        </div>
      </div>

      <div className="add-promo-card">
        <div className="add-promo-card-header">
          <h2 className="add-promo-card-title">Thông tin chương trình</h2>
          <span className="add-promo-id-badge">ID: NEW-PROM-2024</span>
        </div>

        <div className="add-promo-form">
          <div className="form-row-2">
            <div className="form-group">
              <label>Sản phẩm áp dụng</label>
              <select className="promo-form-input">
                <option>Tất cả sản phẩm</option>
                <option>Sản phẩm cụ thể</option>
              </select>
            </div>
            <div className="form-group">
              <label>Danh mục áp dụng</label>
              <select className="promo-form-input">
                <option>Chọn danh mục</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label>Tên chương trình khuyến mãi</label>
            <div className="input-with-icon-right">
              <input 
                type="text" 
                className="promo-form-input" 
                placeholder="Ví dụ: Giảm giá mùa hè 2024" 
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span className="input-icon">✏️</span>
            </div>
          </div>

          <div className="form-row-discount">
            <div className="form-group discount-group">
              <label>Giảm giá (%)</label>
              <div className="number-input-group">
                <button type="button" className="btn-number-minus" onClick={handleDecrease}>−</button>
                <input 
                  type="number" 
                  className="number-input" 
                  value={discount} 
                  onChange={(e) => setDiscount(Number(e.target.value))}
                  min="0"
                  max="100"
                />
                <button type="button" className="btn-number-plus" onClick={handleIncrease}>+</button>
              </div>
            </div>
            <div className="discount-helper-text">
              <em>Áp dụng trực tiếp trên giá bán lẻ sản phẩm.</em>
            </div>
          </div>

          <div className="form-row-2">
            <div className="form-group">
              <label>Áp dụng từ</label>
              <div className="input-with-icon-right">
                <input 
                  type="text" 
                  className="promo-form-input" 
                  placeholder="dd/mm/yyyy" 
                  value={validFrom}
                  onChange={(e) => setValidFrom(e.target.value)}
                />
                <span className="input-icon">📅</span>
              </div>
            </div>
            <div className="form-group">
              <label>Hết hạn</label>
              <div className="input-with-icon-right">
                <input 
                  type="text" 
                  className="promo-form-input" 
                  placeholder="dd/mm/yyyy" 
                  value={expiresAt}
                  onChange={(e) => setExpiresAt(e.target.value)}
                />
                <span className="input-icon">📅</span>
              </div>
            </div>
          </div>

          <div className="form-footer-options">
            <div className="checkbox-group">
              <label className="checkbox-label">
                <input type="checkbox" defaultChecked />
                <span>Xem</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Tiếp tục tạo mới</span>
              </label>
              <label className="checkbox-label">
                <input type="checkbox" />
                <span>Tiếp tục chỉnh sửa</span>
              </label>
            </div>

            <div className="form-actions">
              <button type="button" className="btn-promo-reset" onClick={onCancel}>↺ Làm mới</button>
              <button type="button" className="btn-promo-submit" onClick={onSave}>▷ Gửi</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPromotion;
