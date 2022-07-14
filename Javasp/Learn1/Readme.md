# Các method trong JavaScript
1. Phương thức map() 
- map()tạo một mảng mới từ việc gọi một hàm cho mọi phần tử của mảng.
- map()gọi một hàm một lần cho mỗi phần tử trong một mảng.
- map()không thực thi chức năng cho các phần tử trống.
- map()không thay đổi mảng ban đầu
- Cú pháp: array.map(function(currentValue, index, arr), thisValue). Trong đó:

    + function(currentValue, index, arr): function callback chạy cho mỗi phần tử mảng.
    + currentValue: Giá trị của phần tử hiện tại
    + index: Không bắt buộc, là vị trí của phần tử hiện tại
    + arr: Không bắt buộc, là mảng mà chứa phần tử hiện tại
- VD
```
<!DOCTYPE html>
<html >
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body> 
    <h2>JavaScript Arrays</h2>
    <p id="demo"></p>
    <script>
        const numbers = [65, 44, 12, 4];
        const newArr = numbers.map(myFunction);
        document.getElementById("demo").innerHTML = newArr;
        function myFunction(num) {
          return num * 2;
        }
        </script>
</body>
</html>
```
2. Phương thức Reduce()
- reduce() được sử dụng khi bạn muốn thực thi một callback lên từng phần tử (từ trái qua phải) với một biến được “tích lũy” để trả về một giá trị duy nhất.

- Cú pháp: array.reduce(function(total, currentValue, currentIndex, arr), initialValue). Trong đó:

    + function(total, currentValue, index, arr): Bắt buộc, là callback sẽ thực thi trên từng phần tử mảng.
    + total: Bắt buộc, là giá trị của tham số initialValue trong lần chạy đầu tiên, hoặc là giá trị trả về của callback này ở phần tử trước.
    + crrentValue: Bắt buộc, là giá trị của phần tử hiện tại
    + index: Không bắt buộc, là vị trí của phần tử hiện tại.
    + arr: Không bắt buộc, là mảng mà phần tử hiện tại thuộc về.
    + initialValue: Không bắt buộc, là giá trị ban đầu cho biến total trong callback.
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h2>JavaScript Arrays</h2>
    <p id="demo"></p>
    <script>
    const numbers = [15.5, 2.3, 1.1, 4.7];
    document.getElementById("demo").innerHTML = numbers.reduce(getSum, 0);
    function getSum(total, num) {
    return total + Math.round(num);
    }
    </script>
</body>
</html>
```
3. Phương thức Filter
- filter() được sử dụng để lọc các phần tử trong mảng theo một điều kiện mà bạn đặt ra. Phương thức này sẽ trả về một mảng mới chứa các phần tử thỏa mãn điều kiện.
- Điều kiện bạn đặt ra được thể hiện dưới dạng một callback, callback trả về true có nghĩa là thỏa mãn, trả về false là không thỏa mãn.
- Cú pháp: array.filter(function(currentValue, index, arr), thisValue). Trong đó

    + function(currentValue, index, arr): function callback chạy cho mỗi phần tử mảng.
    + currentValue: Giá trị của phần tử hiện tại
    + index: Không bắt buộc, là vị trí của phần tử hiện tại
    + arr: Không bắt buộc, là mảng mà chứa phần tử hiện tại
- VD
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>JavaScript Arrays</h1>
    <h2>The filter() Method</h2>
    <p id="demo"></p>
    <script>
    const ages = [32, 33, 16, 40];
    document.getElementById("demo").innerHTML = ages.filter(checkAdult);
    function checkAdult(age) {
    return age >= 18;
    }
    </script>
</body>
</html>
```
4. Phương thức some()
- Phương thức some() sẽ giúp bạn kiểm tra một mảng có thỏa mãn điều kiện hay không. Điều kiện được thể hiện dưới dạng một callback duyệt lần lượt các phần tử mảng, nếu kết quả callback của một trong số các phần tử mảng trả về true, thì phương thức some() trả về true, nếu callback của tất cả các phần tử mảng trả về false, phương thức some trả về false.
- Cú pháp: array.some(function(currentValue, index, arr), thisValue). Trong đó:
    + function(currentValue, index, arr): function callback chạy cho mỗi phần tử mảng.
    + currentValue: Giá trị của phần tử hiện tại
    + index: Không bắt buộc, là vị trí của phần tử hiện tại
    + arr: Không bắt buộc, là mảng mà chứa phần tử hiện tại
- VD
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>JavaScript Arrays</h1>
    <h2>The some() Method</h2>
    <p id="demo"></p>
    <script>
    const ages = [1, 2, 16, 20];
    document.getElementById("demo").innerHTML = ages.some(checkAdult);
    function checkAdult(age) {
    return age >= 18;
    }
    </script>
</body>
</html>
```
5. Phương thức every()
- every() được sử dụng khi bạn muốn kiểm tra xem tất cả các phần tử trong mảng có thỏa mãn một điều kiện do bạn đặt ra hay không. Phương thức trả về true khi tất cả các phần tử đều thỏa mãn, trả về false khi một trong số các phần tử không thỏa mãn.
- Điều kiện bạn đặt ra được thể hiện dưới dạng một callback, callback trả về true có nghĩa là thỏa mãn, trả về false là không thỏa mãn.
- Cú pháp: array.every(function(currentValue, index, arr), thisValue). Trong đó:

    + function(currentValue, index, arr): function callback chạy cho mỗi phần tử mảng.
    + currentValue: Giá trị của phần tử hiện tại
    + index: Không bắt buộc, là vị trí của phần tử hiện tại
    + arr: Không bắt buộc, là mảng mà chứa phần tử hiện tại
- vd
```
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Document</title>
</head>
<body>
    <h1>JavaScript Arrays</h1>
    <h2>The filter() Method</h2>
    <p id="demo"></p>
    <script>
    const ages = [32, 33, 16, 40];
    document.getElementById("demo").innerHTML = ages.every(checkAdult);
    function checkAdult(age) {
    return age >= 18;
    }
    </script>
</body>
</html>
```