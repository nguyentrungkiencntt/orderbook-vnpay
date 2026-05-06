import React, { useState, useMemo } from 'react';
import './Category.css';

const initialBooks = [
  {
    id: 1,
    title: 'Sự Im Lặng Của Bầy Cừu: Một Khảo Sát Tâm Lý',
    author: 'Thomas Harris',
    price: '185.000đ',
    originalPrice: '245.000đ',
    badge: '-24%',
    badgeClass: 'discount',
    rating: '4.8',
    reviews: '89 đánh giá',
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Văn học cổ điển',
    status: 'Còn hàng'
  },
  {
    id: 2,
    title: 'Khởi Đầu Của Mọi Thứ: Lịch Sử Nhân Loại',
    author: 'David Graeber & David Wengrow',
    price: '320.000đ',
    originalPrice: null,
    badge: null,
    badgeClass: '',
    rating: '4.9',
    reviews: '124 đánh giá',
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Lịch sử thế giới',
    status: 'Còn hàng'
  },
  {
    id: 3,
    title: 'Nghệ Thuật Của Tư Duy Rành Mạch',
    author: 'Rolf Dobelli',
    price: '142.000đ',
    originalPrice: '190.000đ',
    badge: 'Lựa chọn của biên tập',
    badgeClass: 'editor',
    rating: '4.8',
    reviews: '215 đánh giá',
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Triết học & Tư tưởng',
    status: 'Còn hàng'
  },
  {
    id: 4,
    title: 'Chủ Nghĩa Khắc Kỷ: Bí Quyết Bình Thản',
    author: 'Ryan Holiday',
    price: '215.000đ',
    originalPrice: null,
    badge: null,
    badgeClass: '',
    rating: '4.7',
    reviews: '56 đánh giá',
    img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Triết học & Tư tưởng',
    status: 'Còn hàng'
  },
  {
    id: 5,
    title: 'Lược Sử Thời Gian: Phiên Bản Mới',
    author: 'Stephen Hawking',
    price: '275.000đ',
    originalPrice: null,
    badge: 'Bán chạy',
    badgeClass: 'bestseller',
    rating: '4.9',
    reviews: '342 đánh giá',
    img: 'https://images.unsplash.com/photo-1589998059171-989d887dda6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Lịch sử thế giới',
    status: 'Sắp về'
  },
  {
    id: 6,
    title: 'Tư Duy Hệ Thống Trong Công Việc',
    author: 'Peter Senge',
    price: '198.000đ',
    originalPrice: null,
    badge: null,
    badgeClass: '',
    rating: '4.8',
    reviews: '67 đánh giá',
    img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Kinh tế & Chính trị',
    status: 'Còn hàng'
  },
  {
    id: 7,
    title: 'Sapiens: Lược Sử Loài Người',
    author: 'Yuval Noah Harari',
    price: '250.000đ',
    originalPrice: '300.000đ',
    badge: '-17%',
    badgeClass: 'discount',
    rating: '4.9',
    reviews: '1050 đánh giá',
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Lịch sử thế giới',
    status: 'Còn hàng'
  },
  {
    id: 8,
    title: 'Nhà Giả Kim',
    author: 'Paulo Coelho',
    price: '79.000đ',
    originalPrice: '95.000đ',
    badge: 'Bán chạy',
    badgeClass: 'bestseller',
    rating: '4.8',
    reviews: '2345 đánh giá',
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Văn học cổ điển',
    status: 'Còn hàng'
  },
  {
    id: 9,
    title: 'Nghệ Thuật Quản Lý Tài Chính',
    author: 'Brian Tracy',
    price: '120.000đ',
    originalPrice: null,
    badge: null,
    badgeClass: '',
    rating: '4.5',
    reviews: '112 đánh giá',
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Kinh tế & Chính trị',
    status: 'Sắp về'
  },
  {
    id: 10,
    title: 'Tư Duy Nhanh Và Chậm',
    author: 'Daniel Kahneman',
    price: '280.000đ',
    originalPrice: '350.000đ',
    badge: '-20%',
    badgeClass: 'discount',
    rating: '4.9',
    reviews: '890 đánh giá',
    img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Triết học & Tư tưởng',
    status: 'Còn hàng'
  },
  {
    id: 11,
    title: 'Bàn Về Tự Do',
    author: 'John Stuart Mill',
    price: '145.000đ',
    originalPrice: null,
    badge: 'Mới',
    badgeClass: 'editor',
    rating: '4.6',
    reviews: '34 đánh giá',
    img: 'https://images.unsplash.com/photo-1589998059171-989d887dda6e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Triết học & Tư tưởng',
    status: 'Còn hàng'
  },
  {
    id: 12,
    title: 'Lịch Sử Thiết Kế Đồ Họa',
    author: 'Philip B. Meggs',
    price: '450.000đ',
    originalPrice: '500.000đ',
    badge: null,
    badgeClass: '',
    rating: '4.9',
    reviews: '56 đánh giá',
    img: 'https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Nghệ thuật & Thiết kế',
    status: 'Còn hàng'
  },
  {
    id: 13,
    title: 'Màu Sắc Trong Mỹ Thuật',
    author: 'Johannes Itten',
    price: '180.000đ',
    originalPrice: null,
    badge: null,
    badgeClass: '',
    rating: '4.7',
    reviews: '89 đánh giá',
    img: 'https://images.unsplash.com/photo-1512820790803-83ca734da794?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Nghệ thuật & Thiết kế',
    status: 'Còn hàng'
  },
  {
    id: 14,
    title: 'Kinh Tế Vĩ Mô',
    author: 'N. Gregory Mankiw',
    price: '380.000đ',
    originalPrice: null,
    badge: 'Giáo trình',
    badgeClass: 'bestseller',
    rating: '4.5',
    reviews: '210 đánh giá',
    img: 'https://images.unsplash.com/photo-1589829085413-56de8ae18c73?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Kinh tế & Chính trị',
    status: 'Còn hàng'
  },
  {
    id: 15,
    title: 'Sự Cứu Rỗi Của Cái Đẹp',
    author: 'Byung-Chul Han',
    price: '110.000đ',
    originalPrice: '135.000đ',
    badge: '-18%',
    badgeClass: 'discount',
    rating: '4.8',
    reviews: '45 đánh giá',
    img: 'https://images.unsplash.com/photo-1544947950-fa07a98d237f?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Triết học & Tư tưởng',
    status: 'Còn hàng'
  },
  {
    id: 16,
    title: 'Đồi Gió Hú',
    author: 'Emily Brontë',
    price: '95.000đ',
    originalPrice: null,
    badge: null,
    badgeClass: '',
    rating: '4.6',
    reviews: '430 đánh giá',
    img: 'https://images.unsplash.com/photo-1543002588-bfa74002ed7e?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&q=80',
    category: 'Văn học cổ điển',
    status: 'Còn hàng'
  }
];

const Category = ({ onBookClick }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategories, setSelectedCategories] = useState(['Văn học cổ điển']);
  const [maxPrice, setMaxPrice] = useState(1000000);
  const [selectedAuthor, setSelectedAuthor] = useState('Tất cả tác giả');
  const [selectedRating, setSelectedRating] = useState(5);
  const [selectedStatus, setSelectedStatus] = useState('Còn hàng');
  const [sortBy, setSortBy] = useState('Mới nhất');

  const handleCategoryChange = (cat) => {
    setSelectedCategories(prev => 
      prev.includes(cat) ? prev.filter(c => c !== cat) : [...prev, cat]
    );
  };

  const getPriceNumber = (priceStr) => parseInt(priceStr.replace(/\D/g, ''));

  const filteredAndSortedBooks = useMemo(() => {
    let result = initialBooks.filter(book => {
      // Search logic
      if (searchQuery && !book.title.toLowerCase().includes(searchQuery.toLowerCase())) {
        return false;
      }
      
      // Category filter
      if (selectedCategories.length > 0 && !selectedCategories.includes(book.category)) {
        return false;
      }

      // Price filter
      const price = getPriceNumber(book.price);
      if (price > maxPrice) {
        return false;
      }

      // Author filter
      if (selectedAuthor !== 'Tất cả tác giả' && book.author !== selectedAuthor) {
        return false;
      }

      // Rating filter
      if (selectedRating && parseFloat(book.rating) < selectedRating) {
        return false;
      }

      // Status filter
      if (selectedStatus && book.status !== selectedStatus) {
        return false;
      }

      return true;
    });

    // Sorting logic
    result.sort((a, b) => {
      const priceA = getPriceNumber(a.price);
      const priceB = getPriceNumber(b.price);
      
      if (sortBy === 'Giá tăng dần') return priceA - priceB;
      if (sortBy === 'Giá giảm dần') return priceB - priceA;
      // Mock logic for "Mới nhất" and "Bán chạy" since we don't have those fields
      if (sortBy === 'Bán chạy') return parseInt(b.reviews) - parseInt(a.reviews);
      return 0; // Default Mới nhất
    });

    return result;
  }, [searchQuery, selectedCategories, maxPrice, selectedAuthor, selectedRating, selectedStatus, sortBy]);

  return (
    <div className="category-page">
      
      {/* Sidebar Filters */}
      <aside className="category-sidebar">
        <h2 className="sidebar-title font-serif">Bộ lọc tinh tuyển</h2>
        
        {/* Thể loại */}
        <div className="filter-section">
          <div className="filter-title">THỂ LOẠI</div>
          <div className="checkbox-list">
            {['Văn học cổ điển', 'Triết học & Tư tưởng', 'Lịch sử thế giới', 'Kinh tế & Chính trị', 'Nghệ thuật & Thiết kế'].map(cat => (
              <label className="checkbox-item" key={cat}>
                <input 
                  type="checkbox" 
                  checked={selectedCategories.includes(cat)}
                  onChange={() => handleCategoryChange(cat)}
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Khoảng giá */}
        <div className="filter-section">
          <div className="filter-title">KHOẢNG GIÁ</div>
          <div className="price-slider-wrap">
            <input 
              type="range" 
              min="0" 
              max="1000000" 
              value={maxPrice} 
              onChange={(e) => setMaxPrice(parseInt(e.target.value))}
              className="price-slider" 
            />
            <div className="price-labels">
              <span>0đ</span>
              <span>{maxPrice.toLocaleString('vi-VN')}đ</span>
            </div>
          </div>
        </div>

        {/* Tác giả */}
        <div className="filter-section">
          <div className="filter-title">TÁC GIẢ</div>
          <select 
            className="author-select"
            value={selectedAuthor}
            onChange={(e) => setSelectedAuthor(e.target.value)}
          >
            <option>Tất cả tác giả</option>
            <option>Thomas Harris</option>
            <option>David Graeber & David Wengrow</option>
            <option>Rolf Dobelli</option>
            <option>Ryan Holiday</option>
            <option>Stephen Hawking</option>
            <option>Peter Senge</option>
          </select>
        </div>

        {/* Đánh giá */}
        <div className="filter-section">
          <div className="filter-title">ĐÁNH GIÁ</div>
          <div className="rating-list">
            <label className="rating-item">
              <input 
                type="radio" 
                name="rating" 
                checked={selectedRating === 5} 
                onChange={() => setSelectedRating(5)}
              />
              <div className="stars">★★★★★</div>
              <span className="rating-text">(5.0)</span>
            </label>
            <label className="rating-item">
              <input 
                type="radio" 
                name="rating" 
                checked={selectedRating === 4}
                onChange={() => setSelectedRating(4)}
              />
              <div className="stars">★★★★☆</div>
              <span className="rating-text">Từ 4 sao</span>
            </label>
          </div>
        </div>

        {/* Tình trạng */}
        <div className="filter-section">
          <div className="filter-title">TÌNH TRẠNG</div>
          <div className="status-buttons">
            <button 
              className={`status-btn ${selectedStatus === 'Còn hàng' ? 'active' : ''}`}
              onClick={() => setSelectedStatus(selectedStatus === 'Còn hàng' ? null : 'Còn hàng')}
            >Còn hàng</button>
            <button 
              className={`status-btn ${selectedStatus === 'Sắp về' ? 'active' : ''}`}
              onClick={() => setSelectedStatus(selectedStatus === 'Sắp về' ? null : 'Sắp về')}
            >Sắp về</button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="category-content">
        
        {/* Search Bar */}
        <div className="category-search-container">
          <div className="search-bar-large">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/></svg>
            <input 
              type="text" 
              placeholder="Tìm kiếm sách, tác giả, thể loại..." 
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
          </div>
          {searchQuery && (
            <div className="search-results-title font-serif">
              KẾT QUẢ TÌM KIẾM CHO "{searchQuery}"
            </div>
          )}
        </div>

        <div className="content-header">
          <div className="results-count">
            Hiển thị <strong>1 - {filteredAndSortedBooks.length}</strong> của <strong>{filteredAndSortedBooks.length}</strong> tác phẩm
          </div>
          <div className="sort-options">
            <span className="sort-label">SẮP XẾP:</span>
            {['Mới nhất', 'Bán chạy', 'Giá giảm dần', 'Giá tăng dần'].map(sortOption => (
              <button 
                key={sortOption}
                className={`sort-btn ${sortBy === sortOption ? 'active' : ''}`}
                onClick={() => setSortBy(sortOption)}
              >
                {sortOption}
              </button>
            ))}
          </div>
        </div>

        <div className="products-grid">
          {filteredAndSortedBooks.length > 0 ? filteredAndSortedBooks.map((book) => (
            <div className="product-card" key={book.id} onClick={() => onBookClick(book)} style={{ cursor: 'pointer' }}>
              <div className="product-img-wrap">
                {book.badge && (
                  <div className={`product-badge ${book.badgeClass}`}>
                    {book.badge}
                  </div>
                )}
                <img src={book.img} alt={book.title} className="product-img" />
              </div>
              
              <div className="product-rating">
                <span className="star">★</span>
                <span style={{ fontSize: '0.8rem', fontWeight: 'bold' }}>{book.rating}</span>
                <span className="reviews">({book.reviews})</span>
              </div>
              
              <h3 className="product-title font-serif">{book.title}</h3>
              <div className="product-author">{book.author}</div>
              
              <div className="product-prices">
                <span className={`price-current ${book.originalPrice ? 'sale' : 'normal'}`}>
                  {book.price}
                </span>
                {book.originalPrice && (
                  <span className="price-original">{book.originalPrice}</span>
                )}
              </div>
            </div>
          )) : (
            <div className="no-results" style={{ gridColumn: '1 / -1', textAlign: 'center', padding: '40px', color: '#666' }}>
              Không tìm thấy tác phẩm nào phù hợp với điều kiện lọc.
            </div>
          )}
        </div>
      </main>

    </div>
  );
};

export default Category;
