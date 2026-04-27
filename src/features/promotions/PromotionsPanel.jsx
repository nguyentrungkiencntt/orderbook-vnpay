import { useState } from 'react';
import AddPromotion from './AddPromotion';
import './PromotionsPanel.css';

const promotionsData = [
  {
    id: 1,
    product: 'Caffee Hắc',
    name: 'Khuyến mại 20/11',
    discount: 10,
    validFrom: '2023-11-20 00:00:00',
    expiresAt: '2023-11-26 00:00:00',
    createdAt: '20/11/2023 - 16:46:39',
    updatedAt: '20/11/2023 - 16:46:39'
  },
  {
    id: 2,
    product: 'Mỳ xào',
    name: 'Black Friday Mỳ',
    discount: 5,
    validFrom: '2023-11-25 00:00:00',
    expiresAt: '2023-11-28 00:00:00',
    createdAt: '25/11/2023 - 21:36:36',
    updatedAt: '25/11/2023 - 21:36:36'
  },
  {
    id: 3,
    product: 'Mỳ xào',
    name: 'Trời mưa',
    discount: 90,
    validFrom: '2023-11-30 00:00:00',
    expiresAt: '2023-11-30 00:00:00',
    createdAt: '10/12/2023 - 14:11:50',
    updatedAt: '10/12/2023 - 14:11:50'
  }
];

const PromotionsPanel = () => {
  const [openActionMenu, setOpenActionMenu] = useState(null);
  const [currentView, setCurrentView] = useState('list');
  const [editingPromo, setEditingPromo] = useState(null);

  const toggleActionMenu = (id) => {
    if (openActionMenu === id) {
      setOpenActionMenu(null);
    } else {
      setOpenActionMenu(id);
    }
  };

  return (
    <div className="promotions-panel-wrapper">
      {currentView === 'list' ? (
        <>
          <div className="promo-header-row">
        <div className="promo-title-group">
          <h1 className="font-serif page-title promo-title">Khuyến mại</h1>
          <span className="promo-subtitle">Danh sách</span>
        </div>
        <div className="promo-breadcrumb">
          <span>Home</span> {'>'} <span>Manage-promotion</span>
        </div>
      </div>

      <div className="promo-card">
        <div className="promo-toolbar">
          <button className="btn-promo-filter">
            <span className="icon"> funnel</span> Lọc
          </button>
          <div className="promo-toolbar-actions">
            <button className="btn-promo-add" onClick={() => {
              setEditingPromo(null);
              setCurrentView('add');
            }}>+ Thêm mới</button>
            <div className="btn-group">
              <button className="btn-promo-export">📥 Xuất ra</button>
              <button className="btn-promo-export-dropdown">▼</button>
            </div>
            <button className="btn-promo-grid">▤</button>
          </div>
        </div>

        <div className="promo-search-form">
          <div className="search-field">
            <label className="search-label">ID</label>
            <div className="search-input-wrapper">
              <span className="search-icon-inside">✏️</span>
              <input type="text" placeholder="ID" className="promo-input" />
            </div>
          </div>
          
          <div className="search-actions">
            <button className="btn-promo-search">🔍 Tìm kiếm</button>
            <button className="btn-promo-reset">↺ Làm mới</button>
          </div>
        </div>

        <div className="table-responsive">
          <table className="promo-table">
            <thead>
              <tr>
                <th style={{ width: '40px' }}><input type="checkbox" /></th>
                <th>Sản phẩm áp dụng</th>
                <th>Tên</th>
                <th>Giảm giá(%)</th>
                <th>Hiệu lực từ</th>
                <th>Hết hạn</th>
                <th>Ngày tạo</th>
                <th>Ngày cập nhật</th>
                <th>Hành động</th>
              </tr>
            </thead>
            <tbody>
              {promotionsData.map((promo) => (
                <tr key={promo.id}>
                  <td><input type="checkbox" /></td>
                  <td>{promo.product}</td>
                  <td>{promo.name}</td>
                  <td>{promo.discount}</td>
                  <td>{promo.validFrom}</td>
                  <td>{promo.expiresAt}</td>
                  <td>{promo.createdAt}</td>
                  <td>{promo.updatedAt}</td>
                  <td className="action-cell">
                    <button 
                      className="btn-action-dots"
                      onClick={() => toggleActionMenu(promo.id)}
                    >
                      &#8942;
                    </button>
                    {openActionMenu === promo.id && (
                      <div className="action-dropdown-menu">
                        <div 
                          className="dropdown-item"
                          onClick={() => {
                            setEditingPromo(promo);
                            setCurrentView('edit');
                            setOpenActionMenu(null);
                          }}
                        >
                          Sửa
                        </div>
                        <div className="dropdown-item">Hiển thị</div>
                        <div className="dropdown-item text-danger">Xóa</div>
                      </div>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="promo-pagination-footer">
          <div className="pagination-info">
            Hiển thị từ <strong>1</strong> đến <strong>3</strong> trong tổng số <strong>3</strong> bản ghi
          </div>
          <div className="pagination-controls">
            <span>Hiển thị</span>
            <select className="items-per-page-select">
              <option value="20">20</option>
              <option value="50">50</option>
            </select>
            <span>mục</span>
            <div className="pagination-buttons">
              <button className="page-nav-btn">{'<'}</button>
              <button className="page-nav-btn active">1</button>
              <button className="page-nav-btn">{'>'}</button>
            </div>
          </div>
        </div>
      </div>
      </>
      ) : currentView === 'edit' ? (
        <AddPromotion promo={editingPromo} onCancel={() => setCurrentView('list')} onSave={() => setCurrentView('list')} />
      ) : (
        <AddPromotion onCancel={() => setCurrentView('list')} onSave={() => setCurrentView('list')} />
      )}
    </div>
  );
};

export default PromotionsPanel;
