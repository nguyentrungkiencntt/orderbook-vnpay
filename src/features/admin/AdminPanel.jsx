import { useState } from 'react';
import AddBook from '../books/AddBook';
import EditBook from '../books/EditBook';
import PromotionsPanel from '../promotions/PromotionsPanel';
import './AdminPanel.css';
import OrdersPanel from './OrdersPanel';
import ReportsPanel from './ReportsPanel';
import SettingsPanel from './SettingsPanel';
import UsersPanel from './UsersPanel';

const initialBooksData = [
  {
    id: 1,
    title: 'Tội Ác Và Hình Phạt',
    isbn: '978-1-234-5678',
    category: 'CỔ ĐIỂN',
    author: 'Fyodor Dostoevsky',
    price: '245.000đ',
    stock: 128,
    stockColor: '#2D4633', // Green
    status: '', // Empty in the screenshot
    image: 'https://via.placeholder.com/40x60?text=Book'
  },
  {
    id: 2,
    title: 'Thiên Chúa Giáo & Triết Học',
    isbn: '978-0-987-6543',
    category: 'TRIẾT HỌC',
    author: 'Saint Augustine',
    price: '312.000đ',
    stock: 12,
    stockColor: '#E6A23C', // Orange
    status: 'Đang ẩn',
    image: 'https://via.placeholder.com/40x60?text=Book'
  },
  {
    id: 3,
    title: 'Nguyên Lý Tiếp Thị',
    isbn: '978-5-432-1098',
    category: 'KINH TẾ',
    author: 'Philip Kotler',
    price: '450.000đ',
    stock: 542,
    stockColor: '#2D4633', // Green
    status: 'Hiển thị',
    image: 'https://via.placeholder.com/40x60?text=Book'
  }
];

const AdminPanel = ({ onLogout, onViewSite }) => {
  const [activeMenu, setActiveMenu] = useState('Kho hàng');
  const [currentView, setCurrentView] = useState('list');
  const [editingBook, setEditingBook] = useState(null);
  const [books, setBooks] = useState(initialBooksData);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [bookToDelete, setBookToDelete] = useState(null);

  const confirmDelete = () => {
    setBooks(books.filter(b => b.id !== bookToDelete.id));
    setIsDeleteModalOpen(false);
    setBookToDelete(null);
  };

  const menuItems = [
    { name: 'Bảng điều khiển', icon: '📊' },
    { name: 'Kho hàng', icon: '📚' },
    { name: 'Đơn hàng', icon: '🛍️' },
    { name: 'Khuyến mãi', icon: '🎁' },
    { name: 'Khách hàng', icon: '👥' },
    { name: 'Báo cáo', icon: '📈' },
    { name: 'Cài đặt', icon: '⚙️' },
    { name: 'Hỗ trợ', icon: '❓' }
  ];

  return (
    <div className="admin-container">
      {/* Sidebar */}
      <aside className="admin-sidebar">
        <div className="sidebar-header">
          <h2 className="font-serif">The Intellectual<br/>Curator</h2>
        </div>
        
        <nav className="sidebar-nav">
          {menuItems.map(item => (
            <div 
              key={item.name} 
              className={`nav-item ${activeMenu === item.name ? 'active' : ''}`}
              onClick={() => setActiveMenu(item.name)}
            >
              <span className="nav-icon">{item.icon}</span>
              <span className="nav-text">{item.name}</span>
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <div className="view-site-link" onClick={onViewSite} style={{ cursor: 'pointer', padding: '10px 20px', fontSize: '0.85rem', color: '#666', borderTop: '1px solid #eee', marginBottom: '10px', display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span>🌐</span> Xem trang web
          </div>
          <div className="admin-profile">
            <div className="profile-avatar">
              <img src="https://ui-avatars.com/api/?name=Admin&background=2D4633&color=fff" alt="Admin" />
            </div>
            <div className="profile-info">
              <span className="profile-name">Quản trị viên</span>
              <span className="profile-role" onClick={onLogout} style={{cursor: 'pointer', color: '#888'}}>Đăng xuất</span>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="admin-main">
        {activeMenu === 'Khuyến mãi' ? (
          <PromotionsPanel />
        ) : activeMenu === 'Khách hàng' ? (
          <UsersPanel />
        ) : activeMenu === 'Cài đặt' || activeMenu === 'Cấu hình' ? (
          <SettingsPanel />
        ) : activeMenu === 'Đơn hàng' ? (
          <OrdersPanel />
        ) : activeMenu === 'Báo cáo' || activeMenu === 'Dashboard' ? (
          <ReportsPanel />
        ) : (
          <>
            {currentView === 'list' ? (
              <>
                <div className="main-header">
          <div>
            <h1 className="font-serif page-title">Quản lý Sách</h1>
            <p className="page-subtitle">Lưu trữ và điều phối thư viện tri thức của bạn.</p>
          </div>
        </div>

        <div className="toolbar">
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Tìm kiếm theo tên sách hoặc tác giả..." />
          </div>
          <div className="filters">
            <select className="filter-select">
              <option>Tất cả thể loại</option>
            </select>
            <select className="filter-select">
              <option>Trạng thái kho</option>
            </select>
            <button className="btn-add-book" onClick={() => setCurrentView('add')}>+ Thêm sách mới</button>
          </div>
        </div>

        <div className="table-container">
          <table className="books-table">
            <thead>
              <tr>
                <th>THÔNG TIN SÁCH</th>
                <th>TÁC GIẢ</th>
                <th>GIÁ BÁN</th>
                <th>TỒN KHO</th>
                <th>TRẠNG THÁI</th>
                <th>THAO TÁC</th>
              </tr>
            </thead>
            <tbody>
              {books.map(book => (
                <tr key={book.id}>
                  <td>
                    <div className="book-info-col">
                      <div className="book-cover-wrapper">
                        <div className="book-cover-placeholder"></div>
                      </div>
                      <div className="book-details">
                        <div className="book-title">{book.title}</div>
                        <div className="book-isbn">ISBN: {book.isbn}</div>
                        <div className="book-category">{book.category}</div>
                      </div>
                    </div>
                  </td>
                  <td>{book.author}</td>
                  <td className="book-price">{book.price}</td>
                  <td>
                    <div className="stock-info">
                      <span className="stock-number">{book.stock}</span>
                      <div className="stock-bar-bg">
                        <div 
                          className="stock-bar-fill" 
                          style={{ width: `${Math.min(book.stock, 100)}%`, backgroundColor: book.stockColor }}
                        ></div>
                      </div>
                    </div>
                  </td>
                  <td>
                    {book.status && (
                      <span className={`status-badge ${book.status === 'Hiển thị' ? 'active' : 'inactive'}`}>
                        <span className="status-dot"></span>
                        {book.status}
                      </span>
                    )}
                  </td>
                  <td>
                    <div className="actions-col">
                      <button className="action-btn edit-btn" onClick={() => { setEditingBook(book); setCurrentView('edit'); }}>✏️</button>
                      <button className="action-btn delete-btn" onClick={() => { setBookToDelete(book); setIsDeleteModalOpen(true); }}>🗑️</button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

            <div className="pagination-container">
              <span className="pagination-info">Hiển thị 1 - 3 trong số 1.250 đầu sách</span>
              <div className="pagination">
                <button className="page-btn nav-btn">{'<'}</button>
                <button className="page-btn active">1</button>
                <button className="page-btn">2</button>
                <button className="page-btn">3</button>
                <button className="page-btn nav-btn">{'>'}</button>
              </div>
            </div>
          </>
        ) : currentView === 'edit' ? (
          <EditBook book={editingBook} onCancel={() => setCurrentView('list')} onSave={() => setCurrentView('list')} />
            ) : (
              <AddBook onCancel={() => setCurrentView('list')} onSave={() => setCurrentView('list')} />
            )}
          </>
        )}
      </main>

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="modal-overlay">
          <div className="modal-content">
            <div className="modal-icon-wrapper">
              <span className="modal-question-icon">?</span>
            </div>
            <h3 className="modal-title">Bạn có chắc muốn xóa mục này?</h3>
            <div className="modal-actions">
              <button className="btn-confirm-delete" onClick={confirmDelete}>Gửi</button>
              <button className="btn-cancel-delete" onClick={() => setIsDeleteModalOpen(false)}>Hủy</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default AdminPanel;
