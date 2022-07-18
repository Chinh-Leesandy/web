const students = [
    { id: 1, name: 'Nguyễn Thị Tèo', score: 9.2 },
    { id: 2, name: 'Phạm Văn Bưởi', score: 2.3 },
    { id: 3, name: 'Hoàng Văn Nam', score: 3.7 },
    { id: 4, name: 'Vũ Ngọc Duy', score: 6.9 },
    { id: 5, name: 'Nguyễn Minh Nam', score: 5.2 },
    { id: 6, name: 'Phí Duy Quân', score: 9.6 },
    { id: 7, name: 'Trần Minh Minh', score: 6.1 }
]
var s = "Duy"
function ktten (a , s){
    var res = [];
    res = a.split(' ');
    if (res[res.length - 1] == s) return 1;
    else return 0;
}
for (let i in students){
    if (ktten(students[i].name, s) == 1)
        console.log(students[i].score);
}
