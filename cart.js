import { createProductCart } from "./createProductCart.js";
import { findProductInCart } from "./utils/findProductInCart.js";

const cartContainer = document.getElementById("cart");

let cart = JSON.parse(localStorage.getItem('cart')) || [] ;

console.log(cart);
createProductCart(cart, cartContainer, findProductInCart, "cart");