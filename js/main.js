// This is a placeholder for your custom javascript
console.log("main.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    // 1. Lấy ra nút Contact
    const contactBtn = document.getElementById('contact-nav-btn');
    
    // 2. Lấy ra phần Footer (đích đến)
    const footer = document.getElementById('contact');

    // 3. Kiểm tra nếu cả hai phần tử đều tồn tại
    if (contactBtn && footer) {
        // 4. Thêm sự kiện click
        contactBtn.addEventListener('click', function(e) {
            // Ngăn chặn hành vi mặc định của thẻ <a> (ngăn chặn việc nhảy ngay lập tức)
            e.preventDefault(); 
            
            // Thực hiện cuộn mượt mà đến footer
            footer.scrollIntoView({
                behavior: 'smooth' // Yêu cầu cuộn mượt
            });
        });
    }
});


// This is a placeholder for your custom javascript
console.log("main.js loaded");

document.addEventListener('DOMContentLoaded', function() {
    
    // ==========================================
    // 1. CHỨC NĂNG CUỘN XUỐNG FOOTER (CONTACT)
    // ==========================================
    const contactBtn = document.getElementById('contact-nav-btn');
    const footer = document.getElementById('contact');

    if (contactBtn && footer) {
        contactBtn.addEventListener('click', function(e) {
            e.preventDefault(); 
            footer.scrollIntoView({
                behavior: 'smooth'
            });
        });
    }

    // ==========================================
    // 2. CHỨC NĂNG LỌC DỰ ÁN (FILTER)
    // ==========================================
    const filterButtons = document.querySelectorAll('.filter-btn');
    const projectCards = document.querySelectorAll('.project-card');

    // Chỉ chạy logic nếu tìm thấy nút filter (tránh lỗi ở trang khác không có filter)
    if (filterButtons.length > 0) {
        filterButtons.forEach(button => {
            button.addEventListener('click', () => {
                // A. Xóa class 'active' ở tất cả các nút
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // B. Thêm class 'active' vào nút vừa bấm
                button.classList.add('active');

                // C. Lấy giá trị filter
                const filterValue = button.getAttribute('data-filter');

                // D. Duyệt qua các card để ẩn/hiện
                projectCards.forEach(card => {
                    const cardCategory = card.getAttribute('data-category');

                    if (filterValue === 'all' || filterValue === cardCategory) {
                        // Hiện card
                        card.style.display = 'flex';
                        // Reset animation để hiệu ứng chạy lại
                        card.style.animation = 'none';
                        card.offsetHeight; /* trigger reflow */
                        card.style.animation = 'fadeIn 0.5s ease forwards';
                    } else {
                        // Ẩn card
                        card.style.display = 'none';
                    }
                });
            });
        });
    }
});


// ==========================================
// PAGE LOADER LOGIC (3 Seconds)
// ==========================================

// ==========================================
// PAGE LOADER LOGIC (3 Giây)
// ==========================================
window.addEventListener('load', function() {
    const loader = document.getElementById('page-loader');
    
    // Chỉ chạy nếu tìm thấy loader trong HTML
    if (loader) {
        // Đợi 1500ms
        setTimeout(function() {
            // Thêm class 'loader-hidden' để kích hoạt hiệu ứng mờ dần trong CSS
            loader.classList.add('loader-hidden');
            
            // Sau khi mờ xong thì xóa hẳn khỏi HTML cho nhẹ web
            loader.addEventListener('transitionend', function() {
                loader.remove();
            });
        }, 1500);
    }
});