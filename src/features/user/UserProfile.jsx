import React, { useState } from 'react';
import './UserProfile.css';

const UserProfile = () => {
  const [activeTab, setActiveTab] = useState('profile');
  const [formData, setFormData] = useState({
    fullName: 'Nguyễn Văn An',
    email: 'an.nguyen@example.com',
    phone: '090 123 4567',
    dob: '1995-10-15', // formatted for input type="date"
    address: '123 Đường Lê Lợi, Phường Bến Thành, Quận 1, TP. Hồ Chí Minh'
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate save
    alert('Đã lưu thay đổi hồ sơ thành công!');
  };

  return (
    <div className="user-profile-page">
      <aside className="profile-sidebar">
        <h3 className="sidebar-title">TÀI KHOẢN CỦA TÔI</h3>
        <ul className="profile-menu">
          <li 
            className={`menu-item ${activeTab === 'profile' ? 'active' : ''}`}
            onClick={() => setActiveTab('profile')}
          >
            <span className="menu-icon">👤</span> Thông tin cá nhân
          </li>
          <li 
            className={`menu-item ${activeTab === 'orders' ? 'active' : ''}`}
            onClick={() => setActiveTab('orders')}
          >
            <span className="menu-icon">🕒</span> Lịch sử đơn hàng
          </li>
          <li 
            className={`menu-item ${activeTab === 'favorites' ? 'active' : ''}`}
            onClick={() => setActiveTab('favorites')}
          >
            <span className="menu-icon">❤️</span> Sách yêu thích
          </li>
          <li 
            className={`menu-item ${activeTab === 'settings' ? 'active' : ''}`}
            onClick={() => setActiveTab('settings')}
          >
            <span className="menu-icon">⚙️</span> Cài đặt
          </li>
        </ul>
      </aside>

      <main className="profile-content">
        {activeTab === 'profile' && (
          <div className="profile-edit-section">
            <div className="profile-header">
              <h1 className="font-serif page-title">Chỉnh sửa hồ sơ</h1>
              <p className="subtitle">Cập nhật thông tin của bạn để nhận được trải nghiệm tốt nhất từ BookHaven.</p>
            </div>

            <div className="avatar-section">
              <div className="avatar-preview">
                <img src="https://i.pravatar.cc/150?img=11" alt="User Avatar" />
              </div>
              <div className="avatar-actions">
                <button type="button" className="btn-change-avatar">Thay đổi ảnh</button>
                <p className="avatar-hint">JPG, PNG hoặc GIF. Tối đa 5MB.</p>
              </div>
            </div>

            <form className="profile-form" onSubmit={handleSubmit}>
              <div className="form-row-2">
                <div className="form-group">
                  <label>HỌ VÀ TÊN</label>
                  <input 
                    type="text" 
                    name="fullName" 
                    value={formData.fullName} 
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>EMAIL</label>
                  <input 
                    type="email" 
                    name="email" 
                    value={formData.email} 
                    onChange={handleChange}
                    readOnly
                    className="readonly-input"
                  />
                </div>
              </div>

              <div className="form-row-2">
                <div className="form-group">
                  <label>SỐ ĐIỆN THOẠI</label>
                  <input 
                    type="tel" 
                    name="phone" 
                    value={formData.phone} 
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label>NGÀY SINH</label>
                  <div className="input-with-icon">
                    <input 
                      type="date" 
                      name="dob" 
                      value={formData.dob} 
                      onChange={handleChange}
                    />
                  </div>
                </div>
              </div>

              <div className="form-group full-width">
                <label>ĐỊA CHỈ</label>
                <input 
                  type="text" 
                  name="address" 
                  value={formData.address} 
                  onChange={handleChange}
                />
              </div>

              <div className="form-footer-actions">
                <button type="button" className="btn-cancel">Hủy</button>
                <button type="submit" className="btn-save">Lưu thay đổi</button>
              </div>
            </form>
          </div>
        )}

        {activeTab !== 'profile' && (
          <div className="placeholder-content">
            <h1 className="font-serif page-title">Tính năng đang phát triển</h1>
            <p>Phần này sẽ được cập nhật trong phiên bản sau.</p>
          </div>
        )}
      </main>
    </div>
  );
};

export default UserProfile;
