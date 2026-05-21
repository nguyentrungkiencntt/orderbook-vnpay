import React, { useState } from 'react';
import './CategoryPanel.css';

const initialCategories = [
  { id: 1, name: 'Văn học cổ điển', bookCount: 128 },
  { id: 2, name: 'Triết học & Tư tưởng', bookCount: 54 },
  { id: 3, name: 'Lịch sử thế giới', bookCount: 89 },
  { id: 4, name: 'Kinh tế & Chính trị', bookCount: 42 },
  { id: 5, name: 'Nghệ thuật & Thiết kế', bookCount: 35 },
  { id: 6, name: 'Khoa học & Kỹ thuật', bookCount: 27 },
];

const CategoryPanel = () => {
  const [categories, setCategories] = useState(initialCategories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingCategory, setEditingCategory] = useState(null);
  const [categoryToDelete, setCategoryToDelete] = useState(null);
  const [formData, setFormData] = useState({ name: '', description: '' });

  const handleOpenAdd = () => {
    setEditingCategory(null);
    setFormData({ name: '', description: '' });
    setIsModalOpen(true);
  };

  const handleOpenEdit = (category) => {
    setEditingCategory(category);
    setFormData({ name: category.name, description: '' });
    setIsModalOpen(true);
  };

  const handleSave = (e) => {
    e.preventDefault();
    if (editingCategory) {
      setCategories(categories.map(c => 
        c.id === editingCategory.id ? { ...c, name: formData.name } : c
      ));
    } else {
      const newCategory = {
        id: categories.length + 1,
        name: formData.name,
        bookCount: 0
      };
      setCategories([...categories, newCategory]);
    }
    setIsModalOpen(false);
  };

  const handleDelete = () => {
    setCategories(categories.filter(c => c.id !== categoryToDelete.id));
    setIsDeleteModalOpen(false);
    setCategoryToDelete(null);
  };

  return (
    <div className="category-panel">
      <div className="main-header">
        <div>
          <h1 className="font-serif page-title">Quản lý Thể loại</h1>
          <p className="page-subtitle">Phân loại và tổ chức hệ thống thư viện tri thức.</p>
        </div>
      </div>

      <div className="category-stats">
        <div className="stat-card">
          <span className="stat-label">Tổng số thể loại</span>
          <span className="stat-value">{categories.length}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Thể loại hoạt động</span>
          <span className="stat-value">{categories.length}</span>
        </div>
        <div className="stat-card">
          <span className="stat-label">Sách đã phân loại</span>
          <span className="stat-value">
            {categories.reduce((acc, curr) => acc + curr.bookCount, 0)}
          </span>
        </div>
      </div>

      <div className="toolbar">
        <div className="search-bar">
          <span className="search-icon">🔍</span>
          <input type="text" placeholder="Tìm kiếm thể loại..." />
        </div>
        <button className="btn-add-book" onClick={handleOpenAdd}>+ Thêm thể loại mới</button>
      </div>

      <div className="category-grid">
        {categories.map(category => (
          <div className="category-card" key={category.id}>
            <div className="category-info">
              <span className="category-name">{category.name}</span>
              <span className="category-count">{category.bookCount} đầu sách</span>
            </div>
            <div className="category-actions">
              <button 
                className="action-btn edit-btn" 
                onClick={() => handleOpenEdit(category)}
              >✏️</button>
              <button 
                className="action-btn delete-btn" 
                onClick={() => { setCategoryToDelete(category); setIsDeleteModalOpen(true); }}
              >🗑️</button>
            </div>
          </div>
        ))}
      </div>

      {/* Add/Edit Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content" style={{ maxWidth: '500px' }}>
            <h3 className="modal-title" style={{ textAlign: 'left', marginBottom: '20px' }}>
              {editingCategory ? 'Chỉnh sửa thể loại' : 'Thêm thể loại mới'}
            </h3>
            <form className="category-form-modal" onSubmit={handleSave}>
              <div className="form-group">
                <label>Tên thể loại</label>
                <input 
                  type="text" 
                  value={formData.name} 
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="Ví dụ: Văn học cổ điển"
                  required
                />
              </div>
              <div className="form-group">
                <label>Mô tả (tùy chọn)</label>
                <textarea 
                  placeholder="Mô tả ngắn gọn về thể loại này..."
                  value={formData.description}
                  onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                ></textarea>
              </div>
              <div className="modal-actions" style={{ flexDirection: 'row', justifyContent: 'flex-end' }}>
                <button type="button" className="btn-secondary" onClick={() => setIsModalOpen(false)}>Hủy</button>
                <button type="submit" className="btn-primary" style={{ padding: '12px 24px' }}>
                  {editingCategory ? 'Cập nhật' : 'Tạo mới'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon-wrapper">
              <span className="modal-question-icon">?</span>
            </div>
            <h3 className="modal-title">Xóa thể loại "{categoryToDelete?.name}"?</h3>
            <p style={{ color: '#666', fontSize: '0.9rem', marginBottom: '20px' }}>
              Hành động này không thể hoàn tác. Các sách thuộc thể loại này sẽ cần được phân loại lại.
            </p>
            <div className="modal-actions">
              <button className="btn-confirm-delete" onClick={handleDelete}>Xác nhận xóa</button>
              <button className="btn-cancel-delete" onClick={() => setIsDeleteModalOpen(false)}>Hủy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CategoryPanel;
