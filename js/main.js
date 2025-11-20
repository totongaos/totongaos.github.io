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