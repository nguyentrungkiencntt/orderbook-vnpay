import React from 'react';
import './OrdersPanel.css';

const ordersData = [
  {
    id: '#DH001',
    customer: 'Lê Minh Anh',
    date: '15/10/2023',
    total: '450.000 đ',
    status: 'Đã thanh toán',
    statusColor: 'success' // maps to a CSS class
  },
  {
    id: '#DH002',
    customer: 'Trần Hoàng Nam',
    date: '16/10/2023',
    total: '1.250.000 đ',
    status: 'Chờ xử lý',
    statusColor: 'warning'
  },
  {
    id: '#DH003',
    customer: 'Nguyễn Văn Dũng',
    date: '16/10/2023',
    total: '275.000 đ',
    status: 'Đang giao',
    statusColor: 'info'
  }
];

const OrdersPanel = () => {
  return (
    <>
      <div className="main-header">
        <div>
          <h1 className="font-serif page-title">Quản lý đơn hàng</h1>
          <p className="page-subtitle">Theo dõi và quản lý các giao dịch khách hàng trong hệ thống.</p>
        </div>
      </div>

      <div className="toolbar orders-toolbar">
        <div className="search-group">
          <label className="toolbar-label">TÌM KIẾM ĐƠN HÀNG</label>
          <div className="search-bar">
            <span className="search-icon">🔍</span>
            <input type="text" placeholder="Mã đơn hàng, tên khách hàng..." />
          </div>
        </div>
        
        <div className="filter-group">
          <label className="toolbar-label">TRẠNG THÁI</label>
          <div className="filters">
            <select className="filter-select">
              <option>Tất cả</option>
              <option>Chờ xử lý</option>
              <option>Đang giao</option>
              <option>Đã thanh toán</option>
            </select>
            <button className="btn-filter">Lọc dữ liệu</button>
          </div>
        </div>
      </div>

      <div className="table-container">
        <table className="orders-table">
          <thead>
            <tr>
              <th>MÃ ĐƠN</th>
              <th>TÊN KHÁCH HÀNG</th>
              <th>NGÀY ĐẶT</th>
              <th>TỔNG TIỀN</th>
              <th>TRẠNG THÁI</th>
              <th>TÙY CHỌN</th>
            </tr>
          </thead>
          <tbody>
            {ordersData.map((order, index) => (
              <tr key={index}>
                <td className="order-id">{order.id}</td>
                <td className="order-customer">{order.customer}</td>
                <td>{order.date}</td>
                <td className="order-total">{order.total}</td>
                <td>
                  <span className={`order-status-badge ${order.statusColor}`}>
                    {order.status}
                  </span>
                </td>
                <td>
                  <div className="order-actions">
                    <button className="action-link view">Xem chi tiết</button>
                    <button className="action-link cancel">Hủy</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="pagination-container">
        <span className="pagination-info"></span>
        <div className="pagination">
          <button className="page-btn nav-btn">{'<'}</button>
          <button className="page-btn active">1</button>
          <button className="page-btn">2</button>
          <button className="page-btn">3</button>
          <button className="page-btn nav-btn">{'>'}</button>
        </div>
      </div>
    </>
  );
};

export default OrdersPanel;
