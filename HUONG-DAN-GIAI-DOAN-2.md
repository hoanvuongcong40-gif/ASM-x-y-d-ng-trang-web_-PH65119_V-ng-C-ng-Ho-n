# HT AUTO DECAL - GIAI ĐOẠN 2 (HTML / CSS / JavaScript)

## Cấu trúc
- `index.html`: Trang chủ
- `about.html`: Giới thiệu
- `products.html`: Sản phẩm, tìm kiếm qua URL `?q=...`, sắp xếp giá
- `contact.html`: Liên hệ (thông tin demo, chưa có kênh liên hệ thật)
- `feedback.html`: Góp ý (lưu localStorage, KHÔNG gửi đến cửa hàng)
- `promotions.html`, `deals.html`: Khuyến mãi / Ưu đãi minh họa
- `login.html`, `register.html`, `forgot.html`, `profile.html`: Tài khoản demo
- `checkout.html`, `orders.html`: Đặt hàng và lịch sử đặt hàng demo
- `news.html`: Cẩm nang; `support.html`: Hỗ trợ và thông tin chính sách
- `css/style.css`: Giao diện có sẵn + định dạng các trang bổ sung
- `js/main.js`: JavaScript tương tác
- `assets/`: Ảnh sử dụng trong website

## Chạy bằng VS Code
1. Giải nén file ZIP và mở thư mục chứa `index.html` trong VS Code.
2. Cài tiện ích Live Server (nếu cần). Nhấn chuột phải vào `index.html` → Open with Live Server.
3. Mở trong Chrome/Edge. Dùng thanh menu hoặc các đường dẫn footer để thử từng trang.
4. Để thử quy trình: Đăng ký tài khoản DEMO → Đăng nhập → Tem xe → nhấn biểu tượng giỏ hàng → Điền form → Thanh toán → xem Đơn hàng.
5. Tìm kiếm: nhấn kính lúp, gõ tên tem (ví dụ: Vision), chọn OK. Trang Sản phẩm sẽ hiển thị các kết quả phù hợp.

## Đưa website lên GitHub Pages (host miễn phí)
1. Tạo một repository MỚI, ví dụ `ht-auto-decal-asm` trên github.com.
2. Upload tất cả **nội dung nằm bên trong thư mục dự án** lên thư mục gốc repo, sao cho `index.html`, `css/`, `js/`, `assets/` ở cùng cấp. Không tải lên chỉ file ZIP.
3. Mở `Settings` → `Pages` → mục `Build and deployment`: chọn `Deploy from a branch` → nhánh `main`, thư mục `/(root)` → `Save`.
4. Sau khi GitHub Pages triển khai xong, mở đường dẫn do GitHub cung cấp trong mục Pages để kiểm tra toàn bộ trang.
5. Nếu dùng tên miền riêng, chỉ cấu hình sau khi website hoạt động trên địa chỉ GitHub Pages.

## Đối chiếu mockup Giai đoạn 1
**Chưa có file mockup gốc trong ZIP này.** Bản nâng cấp giữ nguyên header/footer và thiết kế đen-đỏ của 9 trang hiện có. Cần xem file mockup của bạn để rà soát sự trùng khớp theo đúng yêu cầu "mockup thế nào, code thế đó" của giáo viên. Những trang bổ sung sử dụng cùng phong cách, chưa thể khẳng định giống mockup gốc 100%.

## Lưu ý quan trọng
- Đây là website HTML/CSS/JS tĩnh, chưa có máy chủ/database thực. Không tiếp nhận tiền, không gửi đơn hàng thực, không gửi góp ý ra ngoài. Phương thức thanh toán chỉ là minh họa.
- Dữ liệu đăng nhập/mật khẩu của bản gốc và dữ liệu đơn hàng được lưu trên `localStorage` của trình duyệt. Điều này KHÔNG AN TOÀN cho triển khai kinh doanh thật. **Không sử dụng mật khẩu thật, thông tin cá nhân nhạy cảm hoặc thông tin thanh toán thật.**
- Giá, chi tiết chương trình khuyến mãi và thời hạn hiển thị là dữ liệu mẫu có sẵn từ dự án gốc (một số mốc có thể đã hết hạn).
- Để triển khai cửa hàng thực: bắt buộc bổ sung backend, database, mã hóa mật khẩu, xác thực người dùng, xử lý đơn hàng máy chủ, bảo vệ chống gian lận, chính sách chính thức và công cụ quản trị.
