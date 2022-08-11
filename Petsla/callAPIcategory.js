fetch("http://petsla-api.herokuapp.com/categories/")
.then(response => response.json())
.then(data =>{
    renderList(data);
})
.catch(error =>{
    alert("Thông báo có lỗi cần sửa")
})
const renderList = (data) =>{
    let listBlock = document.getElementById("category-list");
    let htmls = data.map (item => {
        return `<ul class="list">
            <li>${'id ' + '= '}${item.id}</li>
            <li>${'category_name ' + '= '}${item.category_name}</li>
            <li>${'created_at '+ '= '}${item.created_at}</li>
        </ul>`;
    });
    listBlock.innerHTML = htmls.join('');
}
