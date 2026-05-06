import React from 'react';
import './Home.css';

const books = [
  {
    id: 1,
    title: 'Muôn Kiếp Nhân Sinh',
    author: 'Nguyên Phong',
    price: '168.000đ',
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 2,
    title: 'Cây Cam Ngọt Của Tôi',
    author: 'José Mauro de Vasconcelos',
    price: '108.000đ',
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 3,
    title: 'Tư Duy Nhanh Và Chậm',
    author: 'Daniel Kahneman',
    price: '245.000đ',
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 4,
    title: 'Nhà Giả Kim',
    author: 'Paulo Coelho',
    price: '89.000đ',
    img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  },
  {
    id: 5,
    title: 'Nghệ Thuật Tư Duy Rành Mạch',
    author: 'Rolf Dobelli',
    price: '142.000đ',
    img: 'https://images.unsplash.com/photo-1589998059171-989d887dda6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80'
  }
];

const Home = ({ onBookClick }) => {
  return (
    <div className="home-container">
      {/* Hero Section */}
      <section className="hero-section">
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <div className="hero-tag">TUYỂN TẬP GIỚI HẠN</div>
          <h1 className="hero-title font-serif">
            Sách kinh điển <span>thế kỷ 21</span>
          </h1>
          <p className="hero-desc">
            Khám phá những tác phẩm định hình tư duy hiện đại, được tuyển chọn kỹ lưỡng bởi các nhà lưu trữ tri thức hàng đầu thế giới.
          </p>
          <button className="hero-btn">
            Khám phá ngay &rarr;
          </button>
        </div>
      </section>

      {/* Category Section */}
      <section className="category-section">
        <div className="category-header">
          <h2 className="font-serif">Hành lang tri thức</h2>
          <p>Duyệt qua các kho lưu trữ được phân loại theo chủ đề tâm điểm của nhân loại.</p>
        </div>
        
        <div className="category-grid">
          <div className="cat-main">
            <img src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" alt="Văn học" />
            <div className="cat-overlay">
              <h3 className="font-serif">Văn học</h3>
              <p style={{ fontSize: '0.8rem', color: '#ccc', margin: '5px 0 0 0' }}>Những câu chuyện vượt thời gian.</p>
            </div>
          </div>
          
          <div className="cat-sub-grid">
            <div className="cat-card">
              <img src="https://images.unsplash.com/photo-1553729459-efe14ef6055d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Kinh tế" />
              <div className="cat-overlay">
                <h3 className="font-serif">Kinh tế</h3>
              </div>
            </div>
            <div className="cat-card">
              <img src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Tâm lý học" />
              <div className="cat-overlay">
                <h3 className="font-serif">Tâm lý học</h3>
              </div>
            </div>
            <div className="cat-card">
              <img src="https://images.unsplash.com/photo-1532094349884-543bc11b234d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Khoa học" />
              <div className="cat-overlay">
                <h3 className="font-serif">Khoa học</h3>
              </div>
            </div>
            <div className="cat-card">
              <img src="https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80" alt="Nghệ thuật" />
              <div className="cat-overlay">
                <h3 className="font-serif">Nghệ thuật</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* New Arrivals Section */}
      <section className="new-arrivals">
        <span className="section-tag">CẬP NHẬT MỚI</span>
        <h2 className="font-serif">Vừa được lưu trữ</h2>
        
        <div className="books-grid">
          {books.map(book => (
            <div className="book-card" key={book.id} onClick={() => onBookClick(book)} style={{ cursor: 'pointer' }}>
              <div className="book-img-wrap">
                <img src={book.img} alt={book.title} />
              </div>
              <div className="book-info">
                <h4>{book.title}</h4>
                <div className="book-author">{book.author}</div>
                <div className="book-price">{book.price}</div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
