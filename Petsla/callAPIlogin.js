let datalogin = {
    "Username" : "Nguyen Mai Chinh",
    "Password" : "123456"
}
fetch("http://petsla-api.herokuapp.com/login/", {
    method : 'POST',
    headers : {
        "Content-Type": "application/json; charset=UTF-8"
    },
    body : JSON.stringify(datalogin)
})
.then(response => response.json())
.then(data =>{
    renderList(data);
})
.catch(error =>{
    alert("Thông báo có lỗi cần sửa")
})