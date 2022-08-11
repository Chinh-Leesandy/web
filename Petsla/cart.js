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
// for (let i in btn){
//     btn[i].onclick = function(){
//         thong_bao[0].style.display = "block";
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
    document.getElementById("amount").innerText = cartitem.attributes.length + 1;
    document.getElementById("amount-cart").innerText = cartitem.attributes.length + 1;
}
// function cartSum(sl, productPrice){
//     console.log(productPrice);
// }
let close_thong_bao = document.getElementById("close-thong-bao");
close_thong_bao.onclick = function(){
    thong_bao[0].style.display = "none";
}
