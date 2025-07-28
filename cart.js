import { createProductCart } from "./createProductCart.js";
import { findProductInCart } from "./utils/findProductInCart.js";
import { createHorizontalProductCart } from "./createHorizontalProductCart.js";

let cartContainer = document.getElementById("cart");

let cart = JSON.parse(localStorage.getItem('cart')) || [] ;

cartContainer.addEventListener('click', (event) => {
  const button = event.target.closest('[data-id]');
  if (!button) return;

  const prodId = button.dataset.id;

  cart = cart.filter(({ _id }) => _id !== prodId);
  cartContainer.innerHTML = "";
  createHorizontalProductCart(cart, cartContainer, findProductInCart, "cart");
  localStorage.setItem('cart', JSON.stringify(cart));

})
//createProductCart(cart, cartContainer, findProductInCart, "cart");

createHorizontalProductCart(cart, cartContainer,findProductInCart, "cart");

const cartLength = document.querySelector(".item-count");
cartLength.innerText = JSON.parse(localStorage.getItem("cart")).length;

const productPrice = document.querySelector(".product-price");
const priceAfterDiscount = JSON.parse(localStorage.getItem("cart")).reduce((acc, cur)=> acc + cur.newPrice, 0);
productPrice.innerText= priceAfterDiscount;

const discount = document.querySelector("#discount");
const priceBeforeDiscount = JSON.parse(localStorage.getItem("cart")).reduce((acc,cur)=> acc + cur.oldPrice, 0);

const discountedAmount = priceBeforeDiscount-priceAfterDiscount;

discount.innerText = discountedAmount;


const totalAmount = document.querySelector(".total-amount");
totalAmount.innerText = priceAfterDiscount-discountedAmount+ 100;

const discount2 = document.querySelector("#discount-2");

discount2.innerText = discountedAmount;

