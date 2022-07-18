const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nhật', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
var newArr = [], j = 0;
function ktten (s){
    var res = [];
    res = s.split(' ');
    if (res[1] == "Duy") return 0;
    return 1;
}
for (let i in students){
    if (students[i].score < 5.0 || ktten(students[i].name) == 0)
        newArr[j++]="Fail"
    else newArr[j++]="Pass"
}
console.log(newArr);