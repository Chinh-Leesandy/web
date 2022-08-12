let productApi = 'http://petsla-api.herokuapp.com/products/';
let listCart = JSON.parse(localStorage.getItem("data")) || [];
function converToVND(value) {
    let s = value.toString();
    let x = s.replace(/\B(?=(\d{3})+(?!\d))/g, '.')
    return x;
}
function start() {
    getData(renderHTML);
}
start();
function getData(callback) {
    fetch(productApi)
        .then((response) => {
            return response.json();
        })
        .then(callback)
        .catch((err) => {
            console.log("Thông báo có lỗi")
        })
}
function renderHTML(products) {
    let listBlock = document.getElementsByClassName("wide row");
    let htmls = products.map(function (product) {
        let price = converToVND(product.price);
        return `
            <div class="col l-3 m-4 c-6 id-${product.id}">
                <div class="product-item">
                    <a href="">
                        <div class="avt">
                            <img id="img-avt" src="https://petsla-api.herokuapp.com${product.images}" alt="" style="width: 100%;">
                        </div>
                    </a>
                    <div class="product-content">
                        <div class="text-product-content">
                            <a href="productInformation.html">
                                <span class="title">${product.product_name}</span>
                            </a>
                            <div class="price">${price}</div>
                        </div>
                        <div class="btn-product-content">
                            <div class="buy button-wrap">
                                <i class="bi bi-bag" id="icon-buy"></i>&nbsp;
                                <span>Buy now</span>
                            </div>
                            <div class="car button-wrap">
                                <i class="bi bi-cart3"></i>&nbsp;
                                <span class="text-cart">Add to Cart</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `;
    });
    listBlock.innerHTML = htmls.join('');
}



