import React, { useState } from 'react';
import './BookDetail.css';

const BookDetail = ({ book, onAddToCart, onBuyNow, onBack, onHome, onCategory }) => {
  const [qty, setQty] = useState(1);
  const [activeTab, setActiveTab] = useState('description');
  const [mainImage, setMainImage] = useState(book?.img || 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80');

  // Sample thumbnails - in a real app these would come from the book object
  const thumbnails = [
    book?.img || 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  ];

  const handleQtyChange = (delta) => {
    setQty(Math.max(1, qty + delta));
  };

  const defaultBook = {
    title: 'Cây cam ngọt của tôi',
    author: 'José Mauro de Vasconcelos',
    origin: 'Văn học Brazil',
    price: 86000,
    originalPrice: 108000,
    discount: '-20%',
    rating: 4.8,
    reviews: '1,248',
    status: 'Còn hàng',
    publisher: 'NXB Hội Nhà Văn',
    publishYear: 2023,
    isbn: '9786049673238',
    format: 'Bìa mềm',
    excerpt: '"Cây cam ngọt của tôi" kể về cậu bé Zezé - một đứa trẻ năm tuổi nghèo khổ, nghịch ngợm nhưng lại mang trong mình trái tim nhân hậu và trí tưởng tượng phong phú vô ngần. Zezé đã kết bạn với một cây cam ngọt và coi nó như người bạn tâm tình duy nhất, trước khi gặp được...',
    description: `Câu chuyện bắt đầu với cậu bé Zezé 5 tuổi, sinh ra trong một gia đình nghèo đông con ở Brazil. Zezé thông minh, nhạy cảm nhưng lại hay nghịch ngợm khiến cậu thường xuyên bị cha mẹ và các anh chị đánh mắng. Thế giới của cậu bé cô đơn ấy chỉ thực sự bừng sáng khi cậu phát hiện ra một cây cam ngọt sau vườn, người bạn mà cậu đặt tên là Pinkie.

Cuốn sách là một bản nhạc buồn nhưng tuyệt đẹp về sự trưởng thành, về những đau đớn đầu đời và sức mạnh của tình yêu thương. José Mauro de Vasconcelos đã viết nên một tác phẩm kinh điển của văn học hiện đại Brazil, làm tan chảy trái tim hàng triệu độc giả trên khắp thế giới bằng lối kể chuyện chân thực, giàu cảm xúc.`,
    specs: {
      'Mã hàng': '8935250704153',
      'Tên Nhà Cung Cấp': 'Nhã Nam',
      'Tác giả': 'José Mauro de Vasconcelos',
      'Người Dịch': 'Nguyễn Bích Lan',
      'Trọng lượng': '250 gr'
    }
  };

  const data = book ? { ...defaultBook, ...book, title: book.title || defaultBook.title } : defaultBook;

  const formatPrice = (p) => {
    if (typeof p === 'string') return p;
    return new Intl.NumberFormat('vi-VN').format(p) + 'đ';
  };

  return (
    <div className="book-detail-container">
      {/* Breadcrumbs & Back */}
      <div className="detail-header-actions">
        <button className="btn-back-link" onClick={onBack}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6"/></svg>
          Quay lại
        </button>
        <nav className="breadcrumb">
          <span onClick={onHome}>Trang chủ</span> &rsaquo; <span onClick={onCategory}>Văn học</span> &rsaquo; <span className="active">{data.title}</span>
        </nav>
      </div>

      <div className="book-main-layout">
        {/* Left: Images */}
        <div className="book-images-section">
          <div className="main-image-wrap">
            <img src={mainImage} alt={data.title} />
          </div>
          <div className="thumbnail-list">
            {thumbnails.map((thumb, idx) => (
              <div 
                key={idx} 
                className={`thumb-item ${mainImage === thumb ? 'active' : ''}`}
                onClick={() => setMainImage(thumb)}
              >
                <img src={thumb} alt={`Thumbnail ${idx}`} />
              </div>
            ))}
          </div>
        </div>

        {/* Right: Info */}
        <div className="book-info-section">
          <div className="editor-choice-badge">EDITOR'S CHOICE</div>
          <h1 className="book-title font-serif">{data.title}</h1>
          <div className="book-meta-top">
            <span className="author">{data.author}</span>
            <span className="separator">•</span>
            <span className="origin">{data.origin}</span>
          </div>

          <div className="rating-row">
            <div className="stars">
              {'★'.repeat(Math.floor(data.rating))}
              {'☆'.repeat(5 - Math.floor(data.rating))}
            </div>
            <span className="rating-value">{data.rating}</span>
            <span className="reviews-count">{data.reviews} nhận xét</span>
            <span className="stock-status">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
              {data.status}
            </span>
          </div>

          <div className="price-box">
            <span className="current-price">{formatPrice(data.price)}</span>
            {data.originalPrice && (
              <>
                <span className="original-price">{formatPrice(data.originalPrice)}</span>
                <span className="discount-badge">{data.discount}</span>
              </>
            )}
          </div>

          <div className="quick-specs">
            <div className="spec-item">
              <label>Nhà xuất bản:</label>
              <span>{data.publisher}</span>
            </div>
            <div className="spec-item">
              <label>Năm phát hành:</label>
              <span>{data.publishYear}</span>
            </div>
            <div className="spec-item">
              <label>ISBN:</label>
              <span>{data.isbn}</span>
            </div>
            <div className="spec-item">
              <label>Hình thức:</label>
              <span>{data.format}</span>
            </div>
          </div>

          <p className="book-excerpt">{data.excerpt}</p>

          <div className="action-row">
            <div className="qty-selector">
              <button onClick={() => handleQtyChange(-1)}>-</button>
              <input type="text" value={qty} readOnly />
              <button onClick={() => handleQtyChange(1)}>+</button>
            </div>
            <button className="btn-add-to-cart" onClick={() => onAddToCart(data, qty)}>Thêm vào giỏ hàng</button>
            <button className="btn-buy-now" onClick={() => onBuyNow(data, qty)}>Mua ngay</button>
            <button className="btn-wishlist">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.72-8.72 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
          </div>

          <div className="commitment-box">
            <div className="commitment-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#005A9E" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            </div>
            <div className="commitment-text">
              <strong>Cam kết từ The Intellectual Curator</strong>
              <p>Sách thật 100%, bọc sách miễn phí & giao hàng hỏa tốc trong 2h.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Section */}
      <div className="book-tabs-section">
        <div className="tabs-header">
          <button 
            className={activeTab === 'description' ? 'active' : ''} 
            onClick={() => setActiveTab('description')}
          >
            Mô tả chi tiết
          </button>
          <button 
            className={activeTab === 'reviews' ? 'active' : ''} 
            onClick={() => setActiveTab('reviews')}
          >
            Đánh giá khách hàng
          </button>
          <button 
            className={activeTab === 'specs' ? 'active' : ''} 
            onClick={() => setActiveTab('specs')}
          >
            Thông tin thêm
          </button>
        </div>

        <div className="tab-content">
          <div className="tab-main-text">
            {activeTab === 'description' && (
              <div className="description-text">
                {data.description.split('\n\n').map((para, i) => <p key={i}>{para}</p>)}
              </div>
            )}
            {activeTab === 'reviews' && <p>Phần đánh giá của khách hàng sẽ được hiển thị ở đây.</p>}
            {activeTab === 'specs' && <p>Thông tin bổ sung về tác phẩm và tác giả.</p>}
          </div>

          <aside className="specs-sidebar">
            <h3 className="specs-title">Thông số kỹ thuật</h3>
            <table className="specs-table">
              <tbody>
                {Object.entries(data.specs).map(([key, val]) => (
                  <tr key={key}>
                    <td className="spec-label">{key}</td>
                    <td className="spec-value">{val}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
