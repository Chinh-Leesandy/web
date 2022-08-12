const idItem = { id: 1 };
import {
  showCart,
  noProduct,
  converToVND,
  showNumberOfItemsInCart,
  addCart,
  increaseQuantityOfDuplicatedItems,
  increaseNumberOfEachItem,
  decrement,
  cartTotal,
  deleteItem,
} from "cart.js";
showProductPage();
showCart();
noProduct();
start();
function start() {
  callApi();
}
function callApi() {
  fetch("http://petsla-api.herokuapp.com/products/")
    .then(response => response.json())
    .then((data) => {
      renderHTML(data);
      onCLickAdd();
    });
}

function renderHTML(products) {
  let value = products.filter((element) => {
    return element.id === idItem.id;
  });
  let priceVND = converToVND(value[0].price);
  let stringProducts = `
    <div class="col m-6">
        <div class="product-img__wrap">
            <img src="https://petsla-api.herokuapp.com${value[0].images}" alt="">
        </div>
    </div>
    <div class="col m-6">
        <div class="product-infor">
            <h2 class="product-title">${value[0].product_name}</h2>
            <div class="product-price"><span>${priceVND}đ</span></div>
            <div class="button-wrap">
                <button type="button" class="button-item buy">
                    <span class="">Buy Now</span>
                </button>
                <button type="button" class="button-item car">
                    <span class="">Add to Cart</span>
                </button>
            </div>
            <div class="product-desc" style="border-color: rgba(0, 0, 0, 0.2);">
                <h3 class="product-desc-title">Thông tin sản phẩm</h3>
                <div class="detail">${value[0].description}</div>
        </div>
    </div>`;
  let displayProductElement = document.querySelector(".wide");
  displayProductElement.innerHTML = stringProducts;
}
function onCLickAdd() {
  let addBtn = document.querySelectorAll(".car");
  let arrOfAddBtn = Array.from(addBtn);
  arrOfAddBtn.map((button) => {
    button.addEventListener("click", ((event) => {
      let btnItem = event.target;
      let product =
        btnItem.parentNode.parentNode.parentNode.parentNode.parentNode;
      let productImg = product.querySelector(".product-img").src;
      let productName = product.querySelector(".product-title").innerText;
      let productPrice = product.querySelector(".product-price").innerText;
      addCart(productImg, productName, productPrice);
      showNumberOfItemsInCart();
      noProduct();
    }));
  });
}
function showProductPage() {
  let productinfomation = document.querySelector(".app");
  let content = `
  <div class="main">
    <div class="higher-top-nav" style="background-color: rgb(255, 255, 255); border-bottom-color: rgba(0, 0, 0, 0.2);">
        <div class="container">
            <div class="higher-top-nav-wrap">
                <div class="info-wrap">
                    <div class="info-item">
                        <i class="bi bi-envelope"></i>
                        <div class="text">petsla.vn@gmail.com</div>
                    </div>
                    <div class="info-item-divider" style="background-color: rgba(0, 0, 0, 0.2);"></div>
                    <div class="info-item">
                        <i class="bi bi-telephone"></i>
                        <div class="text">0123 456 789</div>
                    </div>
                </div>
                <div class="higher-top-nav__branch">
                    <a href="" style="color: black; text-decoration: none;">
                        <img src="https://www.leoasher.dev/static/media/logofull.f2aa3784.png" style="width:100%">
                    </a>
                </div>
                <div class="btn-wrap">
                    <div class="higher-top-nav-item__language">
                        <div class="language" style="background-image: url(/Ảnh/language.png);"></div>
                        <div class="higher-top-nav-item__title" style="background-color: rgb(68, 68, 68); color :rgb(255, 255, 255);">Toggle theme</div>
                    </div>
                    <div class="higher-top-nav__theme">
                        <i class="bi bi-moon"></i>
                        <div class="higher-top-nav-item__title" style="background-color: rgb(68, 68, 68); color :rgb(255, 255, 255);">Toggle theme</div>
                    </div>
                    <div class="auth-btn__wrap">
                        <i class="bi bi-box-arrow-left"></i>
                        <div class="higher-top-nav-item__title" style="background-color: rgb(68, 68, 68); color :rgb(255, 255, 255);">Login</div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="top-nav" style="background-color: rgb(255, 255, 255);">
        <div class="top-nav-container container">
            <div class="top-nav__branch">
                <a href="petsla.html" style="color: black;text-decoration: none;">
                    <img src="https://www.leoasher.dev/static/media/logofull.f2aa3784.png" alt="">
                </a>
            </div>
            <div class="search-wrap">
                <form>
                    <div class="d-flex">
                        <input type="text" name="search" placeholder="Everything here is better than your ex" class="input-search from-control" value style="background-color: rgb(246, 249, 252); color:black">
                        <button type="submit" class="search-btn custom-btn bg-fill btn btn-primary">
                            <i class="bi bi-search"></i>
                        </button>
                    </div>
                </form>
            </div>
            <div class="top-nav-btn-wrap">
                <div class="top-nav__cart" id="icon-cart">
                    <i class="bi bi-cart3"></i>
                    <div class="higher-top-nav-item__title" style="background-color: rgb(68, 68, 68); color :rgb(255, 255, 255);">Cart</div>
                    <span style="border: 2px solid rgb(255, 255, 255);" id="amount">0</span>
                </div>
            </div>
        </div>
    </div>
    <div class="lower-top-nav" style="background-color: rgb(255, 255, 255);box-shadow: rgb(0 0 0 / 10%) 0px 0px 20px;">
        <div class="container">
            <ul class="top-nav__list">
                <li class="top-nav-item">
                    <a href="" style="text-decoration: none;">Home</a>
                </li>
                <li class="top-nav-item">
                    <a href="" style="color: rgb(230, 150, 70); text-decoration: none;"><span> Shop </span></a>
                </li>
                <li class="top-nav-item">
                    <a href="" style="text-decoration: none;"> Cart </a>
                </li>
                <li class="top-nav-item">
                    <a href="" style="text-decoration: none;"> Contact </a>
                </li>
                <li class="top-nav-item">
                    <a href="" style="text-decoration: none;"> Account</a>
                </li>
            </ul>
        </div>
    </div>
    <div class="page">
        <div class="container">
            <div class="wide row">
                <div class="col m-6">
                    <div class="product-img__wrap">
                        <img src="	https://petsla-api.herokuapp.com/media/photos/products/p8.jpg" alt="" class="product-img">
                    </div>
                </div>
                <div class="col m-6">
                    <div class="product-infor">
                        <h2 class="product-title">Đèn cảm ứng silicon chim cánh cụt Pororo</h2>
                        <div class="product-price"><span>360,000đ</span></div>
                        <div class="button-wrap">
                            <button type="button" class="button-item buy">
                                <span class="">Buy Now</span>
                            </button>
                            <button type="button" class="button-item car">
                                <span class="">Add to Cart</span>
                            </button>
                        </div>
                        <div class="product-desc" style="border-color: rgba(0, 0, 0, 0.2);">
                            <h3 class="product-desc-title">Thông tin sản phẩm</h3>
                            <div class="detail">Chú chim Cánh Cụt Pororo đáng iu vừa ra mắt tại Meeko. Bên cạnh nhiệm vụ làm "anh hùng bảo vệ giấc ngủ cho bạn, Pororo để trang trí decor góc nào cũng cưng xỉu lun nè. 
                            
                                Mi gợi ý thêm một ưu điểm nữa của Pororo là làm quà tặng, rất tuyệt vời lun nha.
                            
                                - Kích thước: 118x110x132mm.
                            
                                - Chất liệu: Silicone mềm mại, kết cấu đàn hồi, không bị biến dạng, hạn chế bám bẩn, an toàn với sức khỏe và môi trường.</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    </div>
    </div>
    <div class="Cart" id="show-cart" role="menu" aria-modal="true" tabindex="-1" style="background-color: rgb(255, 255, 255); color: black; visibility : visible;">
    <div class="top-cart-header">
    <div class="top-cart-title">Cart: <span id="amount-cart">0</span> Items</div>
    <button type="button" aria-label="Close" class="btn-close"><i class="bi bi-x-lg"></i></button>
    </div>
    <div class="cart-body">
    </div>
    <div class="cart-footer">
        <button type="button" class="check-out">Checkout (<span id="amount-check">350.000</span>đ)</button>
        <button type="button" class="view-cart">View Cart</button>
    </div>
  `;
  productinfomation.innerHTML = content;
  console.log(productinfomation);
}
export {
  idItem,
  showProductPage,
  showCart,
  noProduct,
  converToVND,
  showNumberOfItemsInCart,
  addCart,
  increaseQuantityOfDuplicatedItems,
  increaseNumberOfEachItem,
  decrement,
  cartTotal,
  deleteItem,
  start,
  callApi,
  renderHTML,
  onCLickAdd,
};

// export { idItem, showProductPage, start, callApi, renderHTML, onCLickAdd };
