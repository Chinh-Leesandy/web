var a = ['A', 'C', 'A', 'A', 'B', 'D', 'B']
var res = [];
var j = 0;
var b = new Set();
for (let i = 0 ; i < a.length; i++){
    b.add(a[i]);
}
for (let i of b.values()){
    res[j++] = i;
}
console.log(res);