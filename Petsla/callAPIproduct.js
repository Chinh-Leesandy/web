fetch("http://petsla-api.herokuapp.com/products/")
.then(response => response.json())
.then(data =>{
    renderList(data);
})
.catch(error =>{
    alert("Thông báo có lỗi cần sửa")
})
const renderList = (data) =>{
    let listBlock = document.getElementById("product");
    let htmls = data.map (item => {
        return `<ul class="list">
            <li>${'id ' + '= '}${item.id}</li>
            <li>${'product_name ' + '= '}${item.product_name}</li>
            <li>${'description '+ '= '}${item.description}</li>
            <li>${'price '+ '= '}${item.price}</li>
            <li>${'images '+ '= '}${item.images}</li>
            <li>${'stock '+ '= '}${item.stock}</li>
            <li>${'created_date '+ '= '}${item.created_date}</li>
            <li>${'modified_dat '+ '= '}${item.modified_dat}</li>
            <li>${'category '+ '= '}${item.category}</li>
        </ul>`;
    });
    listBlock.innerHTML = htmls.join('');
}
