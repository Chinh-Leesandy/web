let a = document.getElementById("icon-cart");
let b = document.getElementsByClassName("app");
a.onclick = function(){
    document.getElementById("show-cart").style.display = "block";
    b[0].style.opacity = "0.5";
}
var c = document.getElementsByClassName("btn-close");
c[0].addEventListener("click",()=> {
    document.getElementById("show-cart").style.display = "none";
    b[0].style.opacity = "1";
})
let btn = document.getElementsByClassName("car");
let thong_bao = document.getElementsByClassName("Thong-bao");
let productCart = document.getElementsByClassName("product-cart")
// for (let i in btn){
//     btn[i].onclick = function(){
//         productCart[0].style.display = "none";
//     }
// }
for(let i = 0 ; i < btn.length; i++){
    btn[i].addEventListener("click", (event)=>{
        var btnItem = event.target;
        var product = btnItem.parentNode.parentNode.parentNode.parentNode;
        var productImg = document.querySelector("#img-avt").src;
        var productName = document.querySelector(".title").innerText;
        var productPrice = document.querySelector(".price").innerText;
        addcart(productImg, productName, productPrice);
        console.log(product);
    })
    btn[i].onclick = function(){
        productCart[0].style.display = "none";
    }
}
function addcart(productImg, productName, productPrice){
    var addcartitem = document.createElement("div");
   // var content = productImg;
    // var productSum = cartSum(sl, productPrice);
    var content = '<div class="top-cart-item"><div class="quantity-wrap"><button class="quantity-btn"><i class="bi bi-plus"></i></button><span class="quantity">1</span><button disabled="" class="quantity-btn disabled"><i class="bi bi-dash"></i></button></div><div class="product-info"><div class="product-img"><img src = "'+productImg+'" style="width: 4.5rem;" alt=""></div><div class="product-description"><div class="product-name">'+productName+'</div><div class="product-price">'+productPrice+'đ x 1</div><div class="product-total-price" style="color: #e69646;">'+productPrice+'</div></div></div><div class="action-wrap"><button type="button" class="btn-close" aria-label="Remove From Cart" style="margin-left: 1rem; margin-right: 0.5rem;"><i class="bi bi-x-lg"></i></button></div></div>'
    var cartitem = document.querySelector(".cart-body");
    addcartitem.innerHTML = content;
    cartitem.append(addcartitem);
    console.log(addcartitem);
    document.getElementById("amount").innerText = cartitem.attributes.length ;
    document.getElementById("amount-cart").innerText = cartitem.attributes.length;
    document.getElementById("amount-check").innerText = productPrice;
}
// function cartSum(sl, productPrice){
//     console.log(productPrice);
// }
let close_thong_bao = document.getElementById("close-thong-bao");
close_thong_bao.onclick = function(){
    thong_bao[0].style.display = "none";
}
function converToVND(value) {
    let s = value.toString();
    let x = s.replace(/\B(?=(\d{3})+(?!\d))/g, ".");
    return x;
}
function showNumberOfItemsInCart(){
    let cartItemList = document.querySelectorAll(".top-cart-item");
    let myArray = Array.from(cartItemList);
    let ArrayOfItemQuantity = myArray.map((element) =>{
        return element.querySelector(".product-quantity").innerText;
    })
    let numberOfItemsInCart = ArrayOfItemQuantity.reduce((a, b) =>{
        return parseFloat(a) + parseFloat(b);
    }, 0);
    let cartItemQuantityContent = document.querySelector(".quantity-wrap");
    cartItemQuantityContent.innerHTML = numberOfItemsInCart;
    let cartLogoQuantityContent = document.querySelector(".amount-cart");
    cartLogoQuantityContent.innerHTML = numberOfItemsInCart;
}
function addCart(productImg, productName, productPrice){
    let cartItemList = document.querySelectorAll(".top-cart-item");
    let myArray = Array.from(cartItemList);
    let index = myArray.findIndex((element) =>{
        return element.querySelector(".product-name").innerText === productName;
    })
    let productQuantity = 1;
    if (index !== -1){
        increaseQuantityOfDuplicatedItems(myArray[index], 1);
    }
    else{
        let addCartItem = document.createElement("div");
        addCartItem.className = "top-cart-item";
        let content = 
        `<div class="quantity-wrap"><button class="quantity-btn id-${myArray[index]}">
                <i class="bi bi-plus"></i>
            </button>
            <span class="quantity">1</span>
            <button disabled="" class="quantity-btn disabled">
                <i class="bi bi-dash"></i>
            </button>
        </div>
        <div class="product-info">
            <div class="product-img">`
                +productImg+
            `</div>
            <div class="product-description">
                <div class="product-name">`+productName+`</div>
                <div class="product-price">`+productPrice+`đ x <span class="product-quantity">`+productQuantity+`</span></div>
                <div class="product-total-price" style="color: #e69646;">`+productPrice+`đ</div>
            </div>
        </div>
        <div class="action-wrap">
            <button type="button" class="btn-close" aria-label="Remove From Cart" style="margin-left: 1rem; margin-right: 0.5rem;">
                <i class="bi bi-x-lg"></i>
            </button>
        </div>`
        addCartItem.innerHTML = content;
        let cartItems = document.querySelector(".cart-body");
        cartItems.appendChild(addCartItem);
    }
    deleteItem();
    increaseNumberOfEachItem();
    decrement();
    cartTotal();
}
function increaseQuantityOfDuplicatedItem(product, num){
    let sumNumberItem = document.querySelector(".quantity").innerText;
    if (sumNumberItem == 1 && num == -1) return;
    else{
        let productQuantity = parseFloat(product.querySelector(".quantity").innerText) + num;
        let productQuantityContent = product.querySelector(".product-quantity");
        productQuantityContent.innerHTML = productQuantity;
        let quantityNumberContent = product.querySelector(".quantity");
        quantityNumberContent.innerHTML = productQuantity;
        let productTotalPrice = (parseFloat(product.querySelector(".product-price").innerText.split(".").join("")) * productQuantity).toLocaleString() + "đ";
        let productTotalPriceContent = product.querySelector(".product-total-price");
        productTotalPriceContent.innerHTML = productTotalPrice;
    }
}
function increaseNumberOfEachItem() {
    let quantityBtn = document.querySelectorAll(".increase");
    let myArray = Array.from(quantityBtn);
    myArray.map((button) => {
      button.onclick = ((event) =>{
        let btnItem = event.target;
        let product = btnItem.parentNode.parentNode.parentNode;
        increaseQuantityOfDuplicatedItems(product, 1);
        cartTotal();
        showNumberOfItemsInCart();
      });
    });
}
function decrement() {
    let quantityBtn = document.querySelectorAll(".disabled");
    let myArray = Array.from(quantityBtn);
    myArray.map((button) => {
      button.onclick = ((event) =>{
        let btnItem = event.target;
        let product = btnItem.parentNode.parentNode.parentNode;
        increaseQuantityOfDuplicatedItems(product, -1);
        cartTotal();
        showNumberOfItemsInCart();
      });
    });
}
function cartTotal() {
    let cartItemList = document.querySelectorAll(".top-cart-item");
    let myArray = Array.from(cartItemList);
    let ArrayOfItemPrice = myArray.map((element) => {
      let productTotalPrice = element.querySelector(".product-total-price").innerText;
      return productTotalPrice
        .substring(0, productTotalPrice.length - 1)
        .split(".")
        .join("");
    });
    let cartTotalPrice = ArrayOfItemPrice.reduce((a, b) => {
      return parseFloat(a) + parseFloat(b);
    }, 0);
    let cartTotalPriceContent = document.querySelector(".cart-footer");
    cartTotalPriceContent.innerHTML = `Checkout (${cartTotalPrice.toLocaleString()}đ)`;
}
function deleteItem() {
    let cartItemDelete = document.querySelectorAll(".btn-close");
    let myArray = Array.from(cartItemDelete);
    myArray.map((button) => {
      button.addEventListener("click",((event)=> {
        let btnItem = event.target;
        let product = btnItem.parentNode.parentNode.parentNode;
        product.remove();
        cartTotal();
        showNumberOfItemsInCart();
        noProduct();
      }));
    });
}
function noProduct() {
    let cartItemList = document.querySelectorAll(".top-cart-item");
    let cartItems = document.querySelector(".cart-body");
    if (cartItemList.length == 0) {
      let noProductItem = document.querySelector(".cart-body");
      let noProductItemContent ='<div class="product-cart"><img src="https://www.leoasher.dev/static/media/sadCat.2335333f.png" style="width: 50%;"><h3 style="color: rgb(135, 135, 212) ;">There`s no item in cart!</h3> </div>';
      noProductItem.innerHTML = noProductItemContent;
    } 
    else {
      try {
        let noProductItem = document.querySelector(".product-cart");
        let divContent = noProductItem.parentNode.parentNode;
        divContent.removeChild(noProductItem.parentNode);
      } 
      catch (error) {
      }
    }
}
  
