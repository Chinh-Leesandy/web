const obj = { a: 1, b: 2, c: 3, d: 4 };
for (let i in obj){
    if (i != "a" && i != "c"){
        console.log(i + ": " + obj[i]);
    }
}