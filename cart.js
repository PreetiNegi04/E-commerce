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
  createHorizontalProductCart(cart, cartContainer);
  localStorage.setItem('cart', JSON.stringify(cart));

})
//createProductCart(cart, cartContainer, findProductInCart, "cart");

createHorizontalProductCart(cart, cartContainer);