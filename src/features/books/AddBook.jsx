import React from 'react';
import './AddBook.css';

const AddBook = ({ onCancel, onSave }) => {
  return (
    <div className="add-book-container">
      <div className="add-book-header">
        <div className="header-titles">
          <h1 className="font-serif page-title">Thêm mới sách</h1>
          <p className="page-subtitle">Cập nhật tài liệu mới vào bộ sưu tập tri thức của thư viện.</p>
        </div>
        <div className="header-actions">
          <button className="btn-cancel" onClick={onCancel}>Hủy</button>
          <button className="btn-save" onClick={onSave}>Lưu sách</button>
        </div>
      </div>

      <div className="add-book-content">
        <div className="content-left">
          {/* Basic Info Card */}
          <div className="form-card">
            <h3 className="card-title">
              <span className="card-icon">📄</span> Thông tin cơ bản
            </h3>
            
            <div className="form-group">
              <label>Tên sách</label>
              <input type="text" className="form-control" placeholder="Ví dụ: Triết Học Nhập Môn" />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Tác giả</label>
                <div className="input-with-icon">
                  <input type="text" className="form-control" placeholder="Tên tác giả" />
                  <span className="input-icon">✍️</span>
                </div>
              </div>
              <div className="form-group">
                <label>Thể loại</label>
                <select className="form-control">
                  <option>Chọn thể loại</option>
                  <option>Kinh tế</option>
                  <option>Triết học</option>
                  <option>Cổ điển</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Mô tả chi tiết</label>
              <textarea 
                className="form-control" 
                rows="4" 
                placeholder="Nhập tóm tắt nội dung, các điểm nổi bật của cuốn sách..."
              ></textarea>
            </div>
          </div>

          {/* Stock & Price Card */}
          <div className="form-card">
            <h3 className="card-title">
              <span className="card-icon">📦</span> Kho & Giá
            </h3>
            
            <div className="form-row">
              <div className="form-group">
                <label>Giá bán (VNĐ)</label>
                <div className="input-with-icon left-icon">
                  <span className="input-icon">₫</span>
                  <input type="number" className="form-control" placeholder="0" />
                </div>
              </div>
              <div className="form-group">
                <label>Số lượng tồn kho</label>
                <div className="input-with-icon right-icon">
                  <input type="number" className="form-control" placeholder="0" />
                  <span className="input-icon">🧮</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="content-right">
          {/* Image Upload Card */}
          <div className="form-card">
            <h3 className="card-title">
              <span className="card-icon">🖼️</span> Ảnh bìa sách
            </h3>
            
            <div className="upload-area">
              <div className="upload-placeholder">
                <div className="upload-icon">📸</div>
                <div className="upload-text">Tải ảnh lên</div>
                <div className="upload-subtext">Kéo và thả file hoặc click để chọn ảnh</div>
              </div>
            </div>

            <div className="technical-requirements">
              <h4>YÊU CẦU KỸ THUẬT</h4>
              <ul>
                <li><span className="req-icon check">✓</span> Độ phân giải tối thiểu: 1200 x 1600 pixels</li>
                <li><span className="req-icon check">✓</span> Tỉ lệ khung hình (Aspect Ratio): 3:4</li>
                <li><span className="req-icon check">✓</span> Định dạng: JPG, PNG, WebP (Tối đa 5MB)</li>
                <li><span className="req-icon warning">!</span> Nên sử dụng ảnh bìa có độ tương phản cao để hiển thị tốt nhất trên mọi màn hình.</li>
              </ul>
            </div>
          </div>

          {/* Display Status Card */}
          <div className="form-card">
            <h3 className="card-title">
              TRẠNG THÁI HIỂN THỊ
            </h3>
            
            <div className="status-options">
              <label className="status-radio">
                <input type="radio" name="status" defaultChecked />
                <div className="radio-content">
                  <span className="radio-title">Công khai</span>
                  <span className="radio-desc">Hiển thị ngay lập tức trong thư viện</span>
                </div>
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddBook;
