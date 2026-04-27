import React, { useState } from 'react';
import './UsersPanel.css';

const initialUsersData = [
  { id: '01', avatar: 'A', name: 'admin', role: 'Admin', roleColor: 'admin' },
  { id: '02', avatar: 'U1', name: 'useraccount1', role: 'Khách hàng', roleColor: 'customer' },
  { id: '03', avatar: 'U2', name: 'useraccount2', role: 'Khách hàng', roleColor: 'customer' },
];

const UsersPanel = () => {
  const [activeTab, setActiveTab] = useState('Users');
  const [users, setUsers] = useState(initialUsersData);
  const [isRoleModalOpen, setIsRoleModalOpen] = useState(false);
  const [selectedUserForRole, setSelectedUserForRole] = useState(null);
  const [selectedRole, setSelectedRole] = useState('');

  const tabs = ['Dashboard', 'Users', 'Permissions', 'Logs'];

  const handleSaveRole = () => {
    setUsers(users.map(u => {
      if (u.id === selectedUserForRole.id) {
        return {
          ...u,
          role: selectedRole,
          roleColor: selectedRole === 'Admin' ? 'admin' : 'customer'
        };
      }
      return u;
    }));
    setIsRoleModalOpen(false);
  };

  return (
    <div className="users-panel-wrapper">
      {/* Sub Navigation */}
      <div className="users-sub-nav">
        {tabs.map(tab => (
          <div 
            key={tab} 
            className={`sub-nav-item ${activeTab === tab ? 'active' : ''}`}
            onClick={() => setActiveTab(tab)}
          >
            {tab}
          </div>
        ))}
      </div>

      <div className="users-header-row">
        <h1 className="font-serif page-title">Quản Lý Tài Khoản</h1>
        <button className="btn-back">Trở lại →</button>
      </div>

      <div className="table-container">
        <table className="users-table">
          <thead>
            <tr>
              <th>MÃ USER</th>
              <th>TÊN NGƯỜI DÙNG</th>
              <th>ROLE</th>
              <th className="text-right">TÙY CHỌN</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id}>
                <td className="user-id">{user.id}</td>
                <td>
                  <div className="user-name-col">
                    <div className={`user-avatar ${user.roleColor}`}>
                      {user.avatar}
                    </div>
                    <span className="user-name">{user.name}</span>
                  </div>
                </td>
                <td>
                  <span className={`role-badge ${user.roleColor}`}>
                    {user.role}
                  </span>
                </td>
                <td className="text-right">
                  <div className="user-actions">
                    <button className="btn-action-user" onClick={() => {
                      setSelectedUserForRole(user);
                      setSelectedRole(user.role);
                      setIsRoleModalOpen(true);
                    }}>Cấp quyền</button>
                    <button className="btn-action-user delete">Xóa</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-container users-pagination">
        <span className="pagination-info">Hiển thị 3 trên tổng số 42 người dùng</span>
        <div className="pagination">
          <button className="page-btn nav-btn">{'<'}</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn nav-btn">{'>'}</button>
        </div>
      </div>

      {/* Role Change Modal */}
      {isRoleModalOpen && (
        <div className="modal-overlay">
          <div className="role-modal-content">
            <h3 className="modal-title role-modal-title">Thay đổi vai trò</h3>
            <p className="role-modal-warning">
              Bạn đang thay đổi vai trò của người dùng này. Việc này sẽ ảnh hưởng đến quyền truy cập của họ trong hệ thống.
            </p>
            
            <div className="role-options">
              <label className={`role-radio-label ${selectedRole === 'Khách hàng' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="role" 
                  value="Khách hàng" 
                  checked={selectedRole === 'Khách hàng'}
                  onChange={(e) => setSelectedRole(e.target.value)}
                />
                <div className="role-radio-text">
                  <strong>Khách hàng</strong>
                  <span>(có thể xem và mua sách)</span>
                </div>
              </label>

              <label className={`role-radio-label ${selectedRole === 'Admin' ? 'selected' : ''}`}>
                <input 
                  type="radio" 
                  name="role" 
                  value="Admin" 
                  checked={selectedRole === 'Admin'}
                  onChange={(e) => setSelectedRole(e.target.value)}
                />
                <div className="role-radio-text">
                  <strong>Admin</strong>
                  <span>(quản lý toàn bộ hệ thống)</span>
                </div>
              </label>
            </div>

            <div className="role-modal-actions">
              <button className="btn-cancel-role" onClick={() => setIsRoleModalOpen(false)}>Hủy</button>
              <button className="btn-save-role" onClick={handleSaveRole}>Lưu thay đổi</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default UsersPanel;
