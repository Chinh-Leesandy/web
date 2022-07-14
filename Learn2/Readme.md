# Độ ưu tiên và các loại đơn vị dài trong CSS

## Độ ưu tiên
1. Tìm hiểu về Inline, Internal, External
    - Inline (nhúng trực tiếp vào phần tử HTML bằng việc sử dụng thuộc tính style của phần tử
    - Internal (tạo các bộ chọn trực tiếp trên trang bằng cách đặt trong thẻ <style></style>
    - External (tạo file css nằm riêng và nhúng vào trang sử dụng thẻ <link> để nhúng vào trang
2. Độ ưu tiên của External và Internal

    -  Giữa Internal và External không có sự ưu tiên mà là trang web sẽ nhận cái mới nhất được cập nhập 
    - vd sau 
    ```<!DOCTYPE html>
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Lear Css</title>
        <link rel="stylesheet" href="test.css">
        <style>
            h1 {
                color: red;
            }
        </style>
    </head>
    <body>
        <h1>Xin chào đến với lập trình ptit</h1>
    </body>
    </html>
    ```
    - chúng ta đã cập nhập h1 có màu đỏ sau đó chúng ta dùng External thiết lập cho h1 có màu xanh 
    ```
    h1{
        color: green;
    }
    ```
    - Kết quả là h1 sẽ có màu xanh do cập nhập cái mới nhất. 
    ![Kết quả vd trên](/File%20%E1%BA%A2nh/vd1.png)
3. Chồng chéo giữa các loại rule khác nhau:

    - Thứ tự ưu tiên giữa các loại ruler

      ![Hình ảnh](/File%20%E1%BA%A2nh/ha.png)
    - Nhận xét: Thứ tự ưu tiên tỉ lệ nghịch với phạm vi tác động. Dạng rule có phạm vi tác động càng cao thì ưu tiên càng thấp, ngược lại dạng rule có phạm vi tác động càng thấp thì ưu tiên càng cao.
    - ví dụ minh họa
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lear Css</title>
        <link rel="stylesheet" href="test.css">
        <!-- <style>
            h1 {
                color: red;
            }
        </style> -->
    </head>
    <body>
        <h1 id="test-id" class="test-class">Xin chào đến với lập trình ptit</h1>
    </body>
    </html>
    ```
    CSS
    ```
    #test-id {
    color: aquamarine;
    }
    .test-class {
        color: blue;
    }
    ```
    - Kết quả sẽ cho ra màu aquamarine vì id được ưu tiên hơn so với class
4. Chồng chéo nhiều loại rule

    - Chồng chéo do nhiều rule của cùng một loại nào đó.
    - Nhận xét: Khi có sự chồng chéo của các rule cùng một loại thì các thuộc tính trong cùng rule sẽ lấy thuộc tính sau cùng, các thuộc tính khác nhau thì sẽ hợp lại.
    vd sau
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lear Css</title>
        <link rel="stylesheet" href="test.css">
        <!-- <style>
            h1 {
                color: red;
            }
        </style> -->
    </head>
    <body>
        <h1 id="test-id" class="test-class">Xin chào đến với lập trình ptit</h1>
    </body>
    </html>
    <!-- CSS -->
    #test-id {
    color: aquamarine;
    }
    #test-id.test-class{
        color: rebeccapurple;
    }
    .test-class {
        color: blue;
    }
    ```
    - Kết quả cho thấy là khi ID kết hợp với Class thì sẽ được ưu tiên hơn so vs ID
    ![Hình ảnh](/File%20%E1%BA%A2nh/h2.png)
5. Thuộc tính đánh dấu quan trọng trong CSS

    - Thuộc tính để đánh dấu tầm quan trọng trong css đó là: ```!important```
    - Thuộc tính này được thêm trực tiếp vào thuộc tính css như sau: ```thuộc_tính: giá_trị !important;```
    - vd
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lear Css</title>
        <link rel="stylesheet" href="test.css">
        <!-- <style>
            h1 {
                color: red;
            }
        </style> -->
    </head>
    <body>
        <h1 id="test-id" class="test-class">Xin chào đến với lập trình ptit</h1>
    </body>
    </html>
    <!-- CSS -->
    #test-id {
    color: red !important;
    }
    #test-id.test-class{
        color: rebeccapurple;
    }
    .test-class {
        color: blue;
    }
    ```
    - Dù là ID có độ ưu tiên thấp hơn ID kết hợp vs Class nhưng ID có thêm important nên nó sẽ được ưu tiên hơn
    - ![Hình ảnh kq](/File%20%E1%BA%A2nh/h3.png)
## Các đơn vị đo độ dài trong css

1. Đơn vị đo tuyệt đối - Absolute

    - Absolute là loại đơn vị có giá trị cố định và thể hiện chính xác chiều dài kích thước nó hiển thị, không phụ thuộc cũng như không thay đổi bởi bất kỳ tác động bên ngoài nào
    - ![Hình ảnh](/File%20%E1%BA%A2nh/h4.png)
2. Đơn vị đo tương đối - Relative
    - Relative là đơn vị đo lường được sử dụng trong CSS ở mức tương đối, thường phụ thuộc vào 1 thành phần nào đó thì mới xác định được giá trị của nó.
    ![hình ảnh](/File%20%E1%BA%A2nh/h5.png)
    - % (percentages): Đơn vị tương đối về kích thước của phần tử con so với phần tử cha. Ví dụ: Nếu phần tử cha có thuộc tính width:500px, phần tử con có thuộc tính width:50% thì có nghĩa là phần tử con có thuộc tính width:250px
    ```
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Lear Css</title>
        <link rel="stylesheet" href="test.css">
        <style>
            .box{
                width: 50%;
                height: 100px;
                background-color: red;
            }
        </style>
    </head>
    <body>
        <div class="box"></div>
    </body>
    </html>
    ```
    - em: Là đơn vị tương đối dựa vào thuộc tính font-size của phần tử cha gần nó nhất. Ví dụ: Nếu phần tử cha có thuộc tính font-size:16px, phần tử con có thuộc tính font-size:2em thì có nghĩa là phần tử con có thuộc tính font-size:32px
    - rem(root em): Là đơn vị tương đối dựa vào thuộc tính font-size của phần html (root element). Ví dụ: Nếu phần tử html có thuộc tính font-size:12px phần tử cha có thuộc tính font-size:16px, phần tử con có thuộc tính font-size:2 rem thì có nghĩa là phần tử con có thuộc tính font-size:24px; Tức là đơn vị rem không phụ thuộc vào phần tử cha.


