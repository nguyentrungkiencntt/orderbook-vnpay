import React from 'react';
import './ReportsPanel.css';

const ReportsPanel = () => {
  const stats = [
    { label: 'Lượng sách đã bán', value: '1,284', trend: '+12%', icon: '📊', subtext: 'So với tháng trước' },
    { label: 'Tổng doanh thu', value: '428.5M đ', trend: '+8.4%', icon: '💰', subtext: 'So với tháng trước' },
    { label: 'Tồn kho hiện tại', value: '5,630', trend: '-2.1%', trendDown: true, icon: '📦', subtext: 'Sách trong kho' },
    { label: 'Giá trị đơn trung bình', value: '334k đ', trend: '+5.2%', icon: '🛒', subtext: 'Mỗi giao dịch' },
  ];

  const inventoryData = [
    { id: 1, name: 'Nhà Giả Kim', category: 'Văn học', sold: 142, stock: 85, revenue: '12,650,000 đ' },
    { id: 2, name: 'Đắc Nhân Tâm', category: 'Kỹ năng', sold: 98, stock: 12, revenue: '7,450,000 đ' },
    { id: 3, name: 'Lược Sử Thời Gian', category: 'Khoa học', sold: 65, stock: 43, revenue: '9,200,000 đ' },
    { id: 4, name: 'Suối Nguồn', category: 'Văn học', sold: 54, stock: 21, revenue: '15,800,000 đ' },
  ];

  return (
    <div className="reports-container">
      {/* Header */}
      <div className="reports-header">
        <div className="header-left">
          <span className="sub-title">PHÂN TÍCH HỆ THỐNG</span>
          <h1 className="font-serif main-title">Báo cáo & Thống kê</h1>
        </div>
        <div className="header-right">
          <div className="date-picker">
            <span>📅</span> 01/10/2023 - 31/10/2023
          </div>
          <button className="btn-export">
            <span>📥</span> Xuất báo cáo
          </button>
        </div>
      </div>

      {/* Stats Grid */}
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div className="stat-card" key={index}>
            <div className="stat-icon-wrap">{stat.icon}</div>
            <span className={`stat-trend ${stat.trendDown ? 'trend-down' : 'trend-up'}`}>
              {stat.trend}
            </span>
            <div className="stat-label">{stat.label}</div>
            <div className="stat-value">{stat.value}</div>
            <div className="stat-subtext">{stat.subtext}</div>
          </div>
        ))}
      </div>

      {/* Middle Grid - Charts */}
      <div className="charts-grid">
        <div className="chart-card">
          <div className="card-header">
            <h3 className="font-serif">Xu hướng Doanh thu</h3>
            <div className="chart-tabs">
              <span className="chart-tab">Tuần</span>
              <span className="chart-tab active">Tháng</span>
              <span className="chart-tab">Năm</span>
            </div>
          </div>
          <div className="mock-chart-visual">
            <svg width="100%" height="200" viewBox="0 0 600 200">
              <path 
                d="M0,150 Q100,140 150,100 T300,80 T450,120 T600,40" 
                fill="none" 
                stroke="#1A2E35" 
                strokeWidth="3"
              />
              <path 
                d="M0,150 Q100,140 150,100 T300,80 T450,120 T600,40 L600,200 L0,200 Z" 
                fill="url(#grad1)" 
                opacity="0.1"
              />
              <defs>
                <linearGradient id="grad1" x1="0%" y1="0%" x2="0%" y2="100%">
                  <stop offset="0%" style={{stopColor:'#1A2E35', stopOpacity:1}} />
                  <stop offset="100%" style={{stopColor:'#1A2E35', stopOpacity:0}} />
                </linearGradient>
              </defs>
              <circle cx="150" cy="100" r="4" fill="#1A2E35" />
              <circle cx="300" cy="80" r="4" fill="#1A2E35" />
              <circle cx="600" cy="40" r="4" fill="#1A2E35" />
            </svg>
            <div style={{ position: 'absolute', bottom: -10, left: 0, width: '100%', display: 'flex', justifyContent: 'space-between', padding: '0 10px', fontSize: '0.7rem', color: '#888' }}>
              <span>Tuần 1</span><span>Tuần 2</span><span>Tuần 3</span><span>Tuần 4</span>
            </div>
          </div>
        </div>

        <div className="chart-card">
          <div className="card-header">
            <h3 className="font-serif">Doanh số theo Danh mục</h3>
          </div>
          <div className="category-breakdown" style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
               <svg width="120" height="120" viewBox="0 0 36 36">
                  <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#f3f4f6" strokeWidth="3"></circle>
                  <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#1A2E35" strokeWidth="3" strokeDasharray="45 100" strokeDashoffset="25"></circle>
                  <circle cx="18" cy="18" r="15.9" fill="transparent" stroke="#E6A23C" strokeWidth="3" strokeDasharray="28 100" strokeDashoffset="70"></circle>
               </svg>
            </div>
            <div className="cat-list" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#1A2E35' }}></span> Văn học cổ điển
                </span>
                <span style={{ fontWeight: 600 }}>45%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#E6A23C' }}></span> Kinh tế & Kỹ năng
                </span>
                <span style={{ fontWeight: 600 }}>28%</span>
              </div>
              <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.85rem' }}>
                <span style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ width: 8, height: 8, borderRadius: '50%', background: '#888' }}></span> Khoa học & Đời sống
                </span>
                <span style={{ fontWeight: 600 }}>15%</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Grid */}
      <div className="bottom-grid">
        <div className="inventory-table-card">
          <div className="table-header">
            <h3 className="font-serif">Báo cáo Kho hàng chi tiết</h3>
            <span className="view-all-link">Xem tất cả &rarr;</span>
          </div>
          <table className="mini-table">
            <thead>
              <tr>
                <th>Tên sách</th>
                <th>Danh mục</th>
                <th>Đã bán</th>
                <th>Tồn kho</th>
                <th>Doanh thu</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData.map(item => (
                <tr key={item.id}>
                  <td style={{ fontWeight: 600 }}>{item.name}</td>
                  <td>
                    <span className={`cat-tag ${item.category === 'Văn học' ? 'cat-literature' : 'cat-skills'}`}>
                      {item.category}
                    </span>
                  </td>
                  <td style={{ textAlign: 'center' }}>{item.sold}</td>
                  <td style={{ textAlign: 'center' }}>{item.stock}</td>
                  <td style={{ fontWeight: 700, color: '#1A2E35' }}>{item.revenue}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div className="summary-column">
          <div className="dark-card">
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.2rem' }}>
              📊 <span style={{ fontSize: '1rem', fontWeight: 600 }}>Tổng kết theo thời gian</span>
            </div>
            <div className="summary-item">
              <h4>THÁNG NÀY SO VỚI THÁNG TRƯỚC</h4>
              <div className="value">+14.2%</div>
              <div className="growth-badge">📈 Tăng trưởng doanh số</div>
            </div>
            <div style={{ height: '1px', background: 'rgba(255,255,255,0.1)' }}></div>
            <div className="summary-item">
              <h4>NĂM NAY SO VỚI NĂM TRƯỚC</h4>
              <div className="value">+28.5%</div>
              <div className="growth-badge">✅ Mục tiêu năm đạt 82%</div>
            </div>
          </div>

          <div className="alert-card">
            <h3 className="font-serif">Cảnh báo tồn kho</h3>
            <p className="alert-text">
              Có 12 đầu sách đang ở mức báo động (&lt;10 cuốn). Vui lòng kiểm tra và nhập hàng.
            </p>
            <button className="btn-restock">Nhập hàng ngay</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportsPanel;
