import { findProductInCart } from "./utils/findProductInCart.js";

export const createProductCart = (products, parentElement, isProductInCart, pageType) => {
  for(let product of products) {
      const cardContainer = document.createElement('div');
      cardContainer.classList.add(
        "card",
        "card-vertical", "d-flex",
        "direction-column",
        "relative",
        "shadow"
      );
    
      /*Image Container*/
      const cardImageContainer = document.createElement('div');
      cardImageContainer.classList.add('card-image-container');
      const cardImage = document.createElement('img');
      cardImage.classList.add('card-image', 'cardImage');
      cardImage.setAttribute("src", product.img);
      cardImage.setAttribute("alt", product.alt);
  
      cardImageContainer.appendChild(cardImage);
  
      /*Card Details Conatiner*/
      const cardDetailsContainer = document.createElement('div');
      cardDetailsContainer.classList.add('card-details');
  
      const brandContainer = document.createElement('div');
      brandContainer.classList.add('card-title');
      brandContainer.innerText = product.brand;
      cardDetailsContainer.appendChild(brandContainer);
      
      /*Card Description Conatiner*/
      const desrciptionContainer = document.createElement('div');
      desrciptionContainer.classList.add('card-description');
  
      /*Product name*/
      const name = document.createElement('p');
      name.classList.add('card-des');
      name.innerText = product.name;
      desrciptionContainer.appendChild(name);
  
      /*Product Price*/
      const cardPrice = document.createElement('p');
      cardPrice.classList.add('card-price', 'd-flex', 'align-center', 'gap-sm');
      cardPrice.innerText = `Rs. ${product.newPrice}`;
  
      const cardOldPrice = document.createElement('span');
      cardOldPrice.classList.add('price-strike-through');
      cardOldPrice.innerText =`Rs. ${product.oldPrice}`;
      cardPrice.appendChild(cardOldPrice);
  
      const cardDiscount = document.createElement('span');
      cardDiscount.classList.add('discount');
      cardDiscount.innerText = `(${product.discount}% OFF)`;
      cardPrice.appendChild(cardDiscount);
  
      desrciptionContainer.appendChild(cardPrice);
  
      /* Rating Container*/
      const ratings = document.createElement('p');
      ratings.classList.add("d-flex", "align-center");
  
      const rating = document.createElement('span');
      rating.innerText = product.rating;
      ratings.appendChild(rating);
  
      const star = document.createElement('span');
      star.classList.add("material-icons-outlined", "star");
      star.innerText = "star";
      ratings.appendChild(star);
      desrciptionContainer.appendChild(ratings);
  
      cardDetailsContainer.appendChild(desrciptionContainer);
      /* CTA button Conatiner */
      const ctaButton = document.createElement('div');
      ctaButton.classList.add('cta-btn');
      const cartButton = document.createElement('button');
      cartButton.classList.add(
        "button",
        "btn-primary",
        "btn-icon",
        "cart-btn",
        "d-flex",
        "align-center",
        "justify-center",
        "gap",
        "cursor",
        "btn-margin"
      );
  
      cartButton.setAttribute("data-id", product._id);
      const cart = document.createElement('span');
      cart.classList.add("material-icons-outlined");
      cart.innerText = "shopping_cart";
      cartButton.appendChild(cart);
  
      const buttonText = document.createElement('span');
      const isProductInCart = findProductInCart(JSON.parse(localStorage.getItem('cart')), product._id);
      buttonText.innerText =  pageType === 'cart' ? "Remove" : pageType=== "products" &&isProductInCart ? "Go To Cart" : "Add To Cart";
      cartButton.appendChild(buttonText);
  
      ctaButton.appendChild(cartButton);
      cardDetailsContainer.appendChild(ctaButton);
  
  
      cardContainer.appendChild(cardImageContainer);
      cardContainer.appendChild(cardDetailsContainer);
      parentElement.appendChild(cardContainer);
  
    }
}