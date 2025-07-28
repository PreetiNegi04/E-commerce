import {products} from './db/products.js';
import { createProductCart } from './createProductCart.js'; 
import { findProductInCart } from './utils/findProductInCart.js';
let cart = JSON.parse(localStorage.getItem('cart'))||[];
const productContainer = document.getElementById('products');

const filterContainer = document.querySelector(".side-bar");

productContainer.addEventListener("click", (event) => {
  const cartButton = event.target.closest(".cart-btn");
  if (!cartButton) return; // Clicked outside the cart button

  const prodId = cartButton.dataset.id;
  if (!prodId) return;

  const isProductInCart = findProductInCart(cart, prodId);

  if (!isProductInCart) {
    const productToAddCart = products.filter(({ _id }) => _id === prodId);
    cart = [...cart, ...productToAddCart];
    localStorage.setItem("cart", JSON.stringify(cart));

    cartButton.innerHTML = "Go To Cart <span class='material-icons-outlined'>shopping_cart</span>";
  }
  else{
    location.href = "cart.html";
  }
});
filterContainer.addEventListener("click",(event)=>{
  const updatedProducts = products.filter(({rating})=> rating>= Number(event.target.dataset.rating));
  productContainer.innerHTML="";
  createProductCart(
    updatedProducts,
    productContainer,
    findProductInCart,
    "products"
  );
})

createProductCart(products, productContainer, findProductInCart, "products");