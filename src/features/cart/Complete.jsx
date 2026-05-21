import React, { useEffect, useState } from 'react';
import './Checkout.css';

const Complete = () => {
  const [loading, setLoading] = useState(true);
  const [session, setSession] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sessionId = params.get('session_id');
    if (!sessionId) {
      setError('Không tìm thấy thông tin giao dịch.');
      setLoading(false);
      return;
    }

    const fetchSession = async () => {
      try {
        const res = await fetch(`http://localhost:4242/checkout-session?sessionId=${encodeURIComponent(sessionId)}`);
        if (!res.ok) throw new Error('Lỗi server');
        const data = await res.json();
        setSession(data);
      } catch (err) {
        console.error(err);
        setError('Không thể lấy thông tin giao dịch.');
      } finally {
        setLoading(false);
      }
    };

    fetchSession();
  }, []);

  const formatVND = (amount) => {
    try {
      return new Intl.NumberFormat('vi-VN').format(Number(amount)) + 'đ';
    } catch { return amount; }
  }

  return (
    <div className="checkout-page">
      <div className="checkout-layout" style={{ maxWidth: 900, margin: '40px auto' }}>
        <div style={{ flex: 1 }}>
          <h2 className="section-title font-serif">Thanh toán thành công</h2>

          {loading && <p>Đang tải thông tin giao dịch...</p>}
          {error && <p style={{ color: 'red' }}>{error}</p>}

          {session && (
            <div className="complete-card">
              <p><strong>Mã phiên:</strong> {session.id}</p>
              <p><strong>Trạng thái thanh toán:</strong> {session.payment_status}</p>
              <p><strong>Tổng:</strong> {session.amount_total ? formatVND(session.amount_total) : '—'}</p>

              {session.customer_details && (
                <div style={{ marginTop: 12 }}>
                  <h4>Thông tin khách hàng</h4>
                  <p>{session.customer_details.name}</p>
                  <p>{session.customer_details.email}</p>
                  <p>{session.customer_details.phone}</p>
                </div>
              )}

              {session.line_items && session.line_items.data && (
                <div style={{ marginTop: 12 }}>
                  <h4>Hàng đã mua</h4>
                  {session.line_items.data.map((li) => (
                    <div key={li.id} style={{ display: 'flex', justifyContent: 'space-between', padding: '8px 0', borderBottom: '1px solid #eee' }}>
                      <div>
                        <div>{li.description || (li.price && li.price.product) || li.price?.nickname || 'Sản phẩm'}</div>
                        <small>Số lượng: {li.quantity}</small>
                      </div>
                      <div>{formatVND(li.amount_total || (li.price && li.price.unit_amount))}</div>
                    </div>
                  ))}
                </div>
              )}

            </div>
          )}

          <div style={{ marginTop: 20 }}>
            <button className="btn-continue-checkout" onClick={() => window.location.href = '/'}>Về trang chủ</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Complete;
