# Reponsive Breakpoint
## Breakpoint là gì?

- Breakpoint có nghĩa là những phạm vi giới hạn (chiều rộng màn hình của thiết bị) ở giao diện được chuyển đổi cho phù hợp với các thiết bị hiện đại. Vị trí và cách hiển thị của các yếu tố trên giao diện sẽ được thay đổi khi chạm mốc giới hạn Breakpoint.

1, Dựa vào thiết bị 
- Những độ rộng phổ biến
    + 320px (breakpoint thường dùng cho smartphone)
    + 768px (breakpoint thường dùng cho tablet)
    + 1024px (breakpoint thường dùng cho thiết bị màn hình lớn như laptop, PC, TV….). 
    + ![Hình ảnh minh họa](https://freelancervietnam.vn/wp-content/uploads/2020/02/breakpoint-dung-2.jpg)
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Test reponsive breakpoint</title>
    <style>
        body{
            background-color: orange;
            display: flex;
            height: 100vh;
        }
        .Phone ,
        .Tablet ,
        .Latop{
            margin: auto;
            font-size: 100px;
            color: #ffff;
            display: none;
        }
        @media only screen and (max-width : 739px) {
            .Phone{
                display : block;
            }
        }
        @media only screen and (min-width : 740px) and (max-width:1023px){
            .Tablet{
                display : block;
            }
        }
        @media only screen and (min-width : 1024px) {
            .Latop{
                display : block;
            }
        }
    </style>
</head>
<body>
    <h2 class="Phone">Smartphone</h2>
    <h2 class="Tablet">Tablet</h2>
    <h2 class="Latop">Latop</h2>
</body>
</html>
```
2, Dựa vào nội dung
- Đặt breakpoint theo cách này sẽ phụ thuộc vào nội dung của trang web mà bạn có, thay vì dựa vào độ rộng của thiết bị người dùng sở hữu.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <style>
        body{
            font-size: 20px;
        }
        #wrapper{
            max-width: 960px;
            margin: 0 auto;
        }
        #header,
        #footer{
            background-color: brown;
            padding: 10px;
            text-align: center;
            color: yellow;
        }
        #Content{
            background-color: antiquewhite;
            display: flex;
            flex-wrap: wrap;
        }
        @media(min-width: 576px){
            #Content{
                flex-basis: 70%;
            }
        }
        @media(min-width: 760px){
            #header{
                background-color: green;
            }
        }
    </style>
</head>
<body>
    <div id="wrapper">
        <div id="header">
            <h1>Header</h1>
        </div>
        <div id="Content">
            <h1>Content</h1>
            <p>Hôm 6/7, Apple tiết lộ tính năng Lockdown Mode sẽ được ra mắt vào mùa thu năm nay.Chế độ này được
                thiết kế nhằm ngăn chặn các cuộc tấn công tinh vi đến từ hacker, như phần mềm gián điệp Pegasus 
                từng tấn công iPhone của các quan chức cấp cao của EU vào năm 2021.</p>
            <h2>Thành phố kỳ lạ suốt nghìn năm không trồng được bất cứ cây xanh nào</h2>
            <p> Dù có diện tích lớn nhất khu tự trị Tây Tạng nhưng đây lại là thành 
                phố duy nhất ở Trung Quốc nơi cây xanh không tồn tại được suốt hàng 
                nghìn năm qua.</p>
        </div>
        <div id="footer">
            <h1>Footer</h1>
        </div>
    </div>
</body>
</html>
```
3, Dựa trên chiều rộng và chiều cao tối thiểu
- Dựa vào từng thiết bị và chiều rộng tối thiểu của phần đó mà chúng ta chọn chiều rộng và chiều cao sao cho hợp lý dựa vài (min-width) hoặc (max-width)

4, Dựa trên một số framework nổi tiếng
- Mỗi một framework sẽ có những quy ước cụ thể về các cách đặt breakpoint khác nhau, chẳng hạn với     
    + Bootstrap sẽ có breakpoint tại 576px, 768px, 992px và 1200px. 
    + Foundation thường sẽ có những breakpoint tại 40em và 60em. 
    + Bulma, breakpoint sẽ được set tại độ phân giải 768px, 769px, 1024px, 1216px và 1408px. 
    
    -->Điểm chung giữa chúng là đều dùng cách tiếp cận mobile-first.
