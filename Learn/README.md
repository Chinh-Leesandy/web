# Tài liệu về cách hoạt động của một trang web

##	Các thành phần của web 
![Cấu tạo của website](https://tmarketing.vn/wp-content/uploads/2021/07/cau-tao-cua-website.jpg)
1)	Web hosting
- 	Là nơi lưu chữ mã nguồn và nội dung của website.
-	Web sever được xác định bằng địa chỉ IP
-	Tuy nhiên thì web sever chỉ dùng cho trang web lớn còn trang web nhỏ và vừa sử dụng một phần tài nguyên của web sever ngoài ra có thể sử dụng shared hosting hoặc máy chủ ảo VPS
### Một số loại hosting phổ biến hiện nay
![Các loại hosting](https://tmarketing.vn/wp-content/uploads/2021/07/cac-hosting-pho-bien-hien-nay.jpg)
- Shared hosting (lưu trữ chia sẻ):Dịch vụ lưu trữ web chia sẻ là  dịch vụ lưu trữ web trong đó nhiều trang web nằm trên một máy chủ web được kết nối với Internet. Đây thường là lựa chọn kinh tế nhất cho việc lưu trữ, vì tổng chi phí bảo trì máy chủ được phân bổ cho nhiều khách hàng.
- Dedicated server hosting(lưu trữ máy chủ vật lý) : Dịch vụ lưu trữ chuyên dụng, máy chủ chuyên dụng hoặc dịch vụ lưu trữ được quản lý là một loại lưu trữ Internet trong đó khách hàng thuê toàn bộ máy chủ không được chia sẻ với bất kỳ ai khác
- VPS hosting – Virtual Private Server Hosting (Lưu trữ máy chủ ảo riêng): Máy chủ ảo là một máy ảo được một dịch vụ lưu trữ Internet bán dưới dạng dịch vụ. Máy chủ chuyên dụng ảo cũng có ý nghĩa tương tự. VPS chạy bản sao hệ điều hành của riêng mình và khách hàng có thể có quyền truy cập superuser vào phiên bản hệ điều hành đó, vì vậy họ có thể cài đặt hầu hết mọi phần mềm chạy trên HĐH đó.
- Cloud Hosting (Lưu trữ máy chủ đám mây): Điện toán đám mây, còn gọi là điện toán máy chủ ảo, là mô hình điện toán sử dụng công nghệ máy tính và phát triển dựa vào mạng Internet. Thuật ngữ “đám mây” ở đây là lối nói ẩn dụ chỉ mạng Internet và như sự liên tưởng về độ phức tạp của các cơ sở hạ tầng chứa trong nó.
2)	Tên miền
![Tên miền](https://ecpmedia.vn/wp-content/uploads/2019/06/khai-niem-domain-la-gi-va-cach-chon-domain-phu-hop.jpg)
-	Tên thay thế cho địa chỉ ip của máy chủ web do địa chỉ ip là dãy số dài khó nhớ 
-	Việc gán tên miền chi địa chỉ ip được thực hiện bởi hệ thống phân giải tên miền (DNS).
3)	Dữ liệu
-	Dữ liệu người dùng hay cơ sở dữ liệu : là những thông tin được lưu trữ về người dùng vd : tên đăng nhập, mật khẩu, nhật ký hoạt động
-	Dữ liệu website : các tập tin đa phương tiện như văn bản, hình ảnh, âm thanh, video,..được lưu chữ trên máy chủ của trang web  
4)	Mã nguồn 
-	Để dễ hình dung và mã nguồn được coi như là một phần hoàn chỉnh và nó được cài đặt trên lên web sever/ hosting nó chính là công cụ để tạo lập và quản lý nội dung của trang web 
-	Hiện nay mã nguồn web thường là các phần mềm quản trị Drupal, WordPress,..
5)	Giao diện người dùng
-	Giao diên người dung là tất cả những bố cục về màu sắc hình ảnh, nội dung văn bản,các hiệu ứng,.. thể hiện lên trang web mà khi người dung truy cập vào và có thể tương tác với nó.
##	  Cách hoạt động của một trang web 
![hình ảnh minh họa](https://tmarketing.vn/wp-content/uploads/2021/07/cach-thuc-hoat-dong-website.jpg)
1.	Đầu tiên người dùng nhập vào trình duyệt một địa chỉ có dạng: https:... , bạn có chỉ cần gõ “facebook.com” là trình duyệt sẽ tự hiểu và đổi thành đường dẫn ở trên.
2.	Sau đó trình duyệt gửi yêu cầu đến máy chủ DNS.
3.	Hệ thống DNS sẽ trả kết quả phân tích tên miền trong đường dẫn đã gửi là facebook.com, nó có địa chỉ máy chủ là 210.211.113.135
4.	Sau khi nhận được địa chỉ IP – nơi lấy dữ liệu, trình duyệt sẽ tìm đến địa chỉ IP đã nhận – tức máy chủ chứa nội dung website.
5.	Máy chủ web nhận được yêu cầu truy xuất nội dung website và nó gửi một tập hợp các file bao gồm HTML, CSS , các tập tin đa phương tiện khác như âm thanh, hình ảnh (nếu có) cho trình duyệt;
6.	Trình duyệt “dịch” các file mà máy chủ đã gửi thành trang web mà chúng ta nhìn thấy trên màn hình.
## Web tĩnh và Web động
![hình ảnh](https://mona.media/wp-content/uploads/2021/12/web-dong-va-web-tinh.png)
1. Web tĩnh 
-  Là trang web đơn thuần chỉ sử dụng hoàn toàn ngôn ngữ lập trình HTML. Nó có nhiệm vụ đăng tải các thông tin giống như một tờ báo. Sau khi tải trang HTML từ máy chủ xuống, trình duyệt sẽ hỗ trợ biên dịch mã và hiển thị nội dung của trang web. Và người dùng hầu như không thể tương tác được với website. 
2. Web động
- Là một chương trình chạy với giao thức http://. Có thể xem nó là một tập hợp các dữ liệu số hóa được tổ chức thành cơ sở dữ liệu và trình diễn trên các trang web dưới dạng văn bản, âm thanh, hình ảnh. Dynamic website được tích hợp thêm các phần xử lý thông tin và truy xuất dữ liệu.
3. Sự khác nhau
#### Khác nhau về chức năng
- Web động được tích hợp thêm các phần xử lý thông tin và truy xuất dữ liệu. Còn web tĩnh thì không. Người sở hữu trang web có quyền điều hành, chỉnh sửa và cập nhật thông tin trên trang web một cách dễ dàng. Khách hàng có được quyền trao đổi thông tin với chủ website và những khách hàng khác.
-  Web động luôn có thông tin mới được cập nhật bởi phần mềm quản trị web do các công ty thiết kế website cung cấp. Các thông tin này được lưu vào cơ sở dữ liệu của trang web và đưa ra sử dụng dựa vào yêu cầu của người dùng.
#### Khác nhau về ngôn ngữ
![khác nhau về ngôn ngữ](https://bizflyportal.mediacdn.vn/thumb_wm/1000,100/bizflyportal/images/png15875345352415.jpg)
#### Khác nhau về khả năng tương tác với khách hàng
- Đối với website tĩnh, người dùng hầu như không thể tương tác được với website. Không thể trò chuyện, giao tiếp với nó. Nội dung của Website tĩnh đã được xác định ngay từ đầu. Nếu muốn thay đổi hay thêm bớt nội dung, người quản lý phải làm lại khuôn để có thể in ra những tờ báo mới. 
- Web động lại khác, với các chương trình ứng dụng, khách hàng có được quyền trao đổi thông tin với chủ website và những khách hàng khác một cách dễ dàng nhất.
#### Khác nhau về ứng dụng giữa website động và website tĩnh
#### Khác nhau về chi phí bảo trì, nâng cấp