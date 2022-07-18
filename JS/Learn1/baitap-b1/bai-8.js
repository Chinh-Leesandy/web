var a = [0, 1, false, 2, undefined, '', 3, null]
function kt (s){
    if (s != 0 && s != false && s != undefined && s != '' && s != null)
        return 1;
    return 0
}
for (let i = 0 ; i < a.length; i++){
    if (kt(a[i]) == 1)
        console.log(a[i]);
}