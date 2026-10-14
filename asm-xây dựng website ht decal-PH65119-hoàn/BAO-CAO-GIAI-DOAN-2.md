# BÁO CÁO GIAI ĐOẠN 2 – WEBSITE HT AUTO DECAL

## 1. Thông tin chung
- Chủ đề: Website giới thiệu và đặt hàng **tem/decal xe máy, ô tô, xe điện**.
- Công nghệ: HTML5, CSS3 (Box Model, Flexbox, CSS Grid), JavaScript thuần.
- Giao diện hiện có: tông đen - đỏ, tái sử dụng header/footer và ảnh có sẵn.

## 2. Đối chiếu yêu cầu

| Yêu cầu giáo viên | Phần đã thực hiện | Trạng thái |
|---|---|---|
| HTML & CSS: Header, Menu, Footer | Header/điều hướng và footer được xây dựng trên các trang | Đã làm |
| Bố cục rõ ràng, Box Model, Flexbox hoặc Grid | Hệ CSS áp dụng Flexbox/Grid, có quy tắc responsive | Đã làm |
| Nội dung các trang đã phân tích | Trang chủ, Giới thiệu, Sản phẩm, Liên hệ, Góp ý; thêm Khuyến mãi, Ưu đãi, Tin tức, Hỗ trợ, tài khoản, thanh toán, đơn hàng | Đã xây dựng; cần đối chiếu mockup GD1 |
| Hình ảnh, bảng, biểu mẫu | Ảnh sản phẩm; các form đăng ký, đăng nhập, thanh toán, hồ sơ, góp ý | Đã làm |
| Tối ưu thẩm mỹ/dễ sử dụng | Giữ lại tông màu và bố cục cũ, tăng tính nhất quán giữa các trang; kiểm tra đường dẫn | Đã làm cơ bản; cần kiểm tra thực tế trên thiết bị |
| Triển khai host miễn phí | Có sẵn cấu trúc để đăng GitHub Pages, tài liệu các bước | **Chưa xuất bản** (cần thao tác trên tài khoản GitHub) |
| Website code giống mockup GD1 | Bản ZIP không có file mockup GD1 để so sánh | **Chưa xác minh** |

## 3. Các chức năng mẫu
- Tìm kiếm theo từ khóa trên trang sản phẩm và sắp xếp giá.
- Tài khoản demo: đăng ký, đăng nhập, xem/cập nhật hồ sơ và đổi mật khẩu demo.
- Chọn mẫu decal để thử tạo đơn hàng, theo dõi danh sách đơn và xem chi tiết.
- Góp ý: dữ liệu được lưu trên trình duyệt (không gửi đến shop).
- Các nút giỏ hàng ở trang Ưu đãi đã được liên kết với thông tin tên, giá và ảnh của sản phẩm mẫu.
- Sửa đường dẫn footer, thêm các trang Giới thiệu, Liên hệ, Góp ý, Cẩm nang và Hỗ trợ.

## 4. Đánh giá và giới hạn
- Đã kiểm tra cú pháp `js/main.js` và kiểm tra tĩnh: 15 trang HTML, tệp liên kết, đường dẫn ảnh, đường dẫn CSS/JS, giỏ hàng có thông tin sản phẩm, không phát hiện đường dẫn nội bộ thiếu.
- Chưa thể chạy kiểm thử tương tác trên trình duyệt tự động trong môi trường kiểm tra này. **Cần chạy lại trên máy bằng Live Server** để rà soát giao diện/luồng mua hàng thực tế.
- Dữ liệu mẫu đặt hàng, tài khoản, phản hồi chỉ lưu localStorage, không kết nối cơ sở dữ liệu hoặc xử lý thanh toán thực. Không sử dụng mật khẩu hoặc dữ liệu cá nhân thật.
- Thông tin khuyến mãi từ dự án gốc chỉ phục vụ minh họa; cần đối chiếu ngày tháng trước khi đưa website ra sử dụng.

## 5. Các bước còn lại trước khi nộp
1. Đối chiếu màn hình của từng trang với file/ảnh mockup GD1. Chỉnh các sai khác về vị trí, màu, kích thước chữ, hình ảnh.
2. Thử mở tất cả trang bằng Live Server và hoàn thành quy trình đăng ký → đăng nhập → chọn hàng → đặt thử → xem đơn.
3. Đăng toàn bộ mã nguồn lên GitHub Pages và lưu lại URL công khai.
4. Chụp ảnh màn hình trang chủ, sản phẩm, giới thiệu, liên hệ, góp ý, và bằng chứng triển khai trên host.
