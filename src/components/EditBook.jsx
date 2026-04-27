import React, { useState, useEffect } from 'react';
import './EditBook.css';

const EditBook = ({ book, onCancel, onSave }) => {
  // Initialize state with book data if available
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    category: '',
    description: '',
    price: '',
    stock: ''
  });

  useEffect(() => {
    if (book) {
      setFormData({
        title: book.title || '',
        author: book.author || '',
        category: book.category || '',
        description: book.description || 'Một bộ sưu tập các bài viết cá nhân của Hoàng đế La Mã Marcus Aurelius trình bày những ý tưởng của ông về triết học Khắc kỷ. Marcus Aurelius đã viết 12 cuốn Meditations bằng tiếng Hy Lạp Koine như một nguồn tài liệu để hướng dẫn và cải thiện bản thân.',
        price: book.price ? book.price.replace(/[^0-9]/g, '') : '600000', // Extract numbers from '245.000đ'
        stock: book.stock || '42'
      });
    }
  }, [book]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <div className="edit-book-container">
      {/* Breadcrumb Header */}
      <div className="breadcrumb-header">
        <span className="breadcrumb">Thư viện {'>'} <strong>Chỉnh sửa sách</strong></span>
      </div>

      <div className="edit-book-header">
        <div className="header-titles">
          <h1 className="font-serif page-title">Chỉnh sửa thông tin sách</h1>
          <p className="page-subtitle">Cập nhật thông tin cho mục bộ sưu tập được tuyển chọn #LIB-9942</p>
        </div>
        <div className="header-actions">
          <button className="btn-cancel" onClick={onCancel}>Hủy</button>
          <button className="btn-save" onClick={onSave}>Lưu thay đổi</button>
        </div>
      </div>

      <div className="edit-book-content">
        <div className="content-left">
          {/* General Info Card */}
          <div className="form-card">
            <h3 className="card-title">
              <span className="card-icon">ℹ️</span> Thông tin chung
            </h3>
            
            <div className="form-group">
              <label>Tên sách</label>
              <input 
                type="text" 
                name="title"
                className="form-control" 
                value={formData.title}
                onChange={handleChange}
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label>Tác giả</label>
                <input 
                  type="text" 
                  name="author"
                  className="form-control" 
                  value={formData.author}
                  onChange={handleChange}
                />
              </div>
              <div className="form-group">
                <label>Thể loại</label>
                <select 
                  name="category"
                  className="form-control"
                  value={formData.category}
                  onChange={handleChange}
                >
                  <option value="TRIẾT HỌC">Triết học</option>
                  <option value="CỔ ĐIỂN">Cổ điển</option>
                  <option value="KINH TẾ">Kinh tế</option>
                </select>
              </div>
            </div>

            <div className="form-group">
              <label>Mô tả chi tiết</label>
              <textarea 
                name="description"
                className="form-control" 
                rows="6" 
                value={formData.description}
                onChange={handleChange}
              ></textarea>
            </div>
          </div>

          {/* Stock & Price Card */}
          <div className="form-card">
            <h3 className="card-title">
              <span className="card-icon">💵</span> Kho hàng & Giá bán
            </h3>
            
            <div className="form-row">
              <div className="form-group">
                <label>Giá bán (đ)</label>
                <div className="input-with-icon left-icon">
                  <span className="input-icon">₫</span>
                  <input 
                    type="number" 
                    name="price"
                    className="form-control" 
                    value={formData.price}
                    onChange={handleChange}
                  />
                </div>
              </div>
              <div className="form-group">
                <label>Số lượng tồn kho</label>
                <input 
                  type="number" 
                  name="stock"
                  className="form-control" 
                  value={formData.stock}
                  onChange={handleChange}
                />
              </div>
            </div>
          </div>
        </div>

        <div className="content-right">
          {/* Book Cover Card */}
          <div className="form-card">
            <h3 className="card-title">Ảnh bìa sách</h3>
            
            <div className="cover-display">
              <div className="cover-image-wrapper">
                {/* Mocking the dark book cover from the screenshot */}
                <div className="mock-cover-image">
                  <div className="cover-title">Buom</div>
                  <div className="cover-subtitle">cover</div>
                </div>
              </div>
            </div>

            <div className="cover-specs">
              <div className="spec-item">
                <span className="spec-icon check">✓</span>
                <div className="spec-text">
                  <strong>Độ phân giải</strong>
                  <span>1200 x 1600 px (Lý tưởng)</span>
                </div>
              </div>
              <div className="spec-item">
                <span className="spec-icon image">🖼️</span>
                <div className="spec-text">
                  <strong>Tỷ lệ khung hình</strong>
                  <span>3:4 Chân dung chuẩn</span>
                </div>
              </div>
            </div>
          </div>

          {/* Curator's Note Card */}
          <div className="curator-note-card">
            <h4 className="note-title">
              <span className="note-icon">✨</span> Ghi chú của Curator
            </h4>
            <p className="note-content">
              Đảm bảo tên sách khớp với số đăng ký thư viện chính thức. Mọi thay đổi đối với danh mục sẽ tự động kích hoạt lập chỉ mục lại trong phần bộ sưu tập "{formData.category || 'Triết học'}".
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditBook;
