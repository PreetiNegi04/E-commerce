import {products} from './db/products.js';

const productContainer = document.getElementById('products');

for(let product of products) {
    const cardContainer = document.createElement('div');
    cardContainer.classList.add(
      "card",
      "card-vertical", "d-flex",
      "direction-column",
      "relative",
      "shadow"
    );

    productContainer.appendChild(cardContainer);  

    const cardImageContainer = document.createElement('div');
    cardImageContainer.classList.add('card-image-container');
    const cardImage = document.createElement('img');
    cardImage.classList.add('card-image', 'cardImage');
    cardImage.src = product.img;
    cardImage.alt = product.alt;

    cardImageContainer.appendChild(cardImage);
    cardContainer.appendChild(cardImageContainer);

    const cardDetails = document.createElement('div');
    cardDetails.classList.add('card-details');

    const cardTitle = document.createElement('p');
    cardTitle.classList.add('card-title');
    cardTitle.innerText = product.name;
    cardDetails.appendChild(cardTitle);

    const cardDesrciption = document.createElement('div');
    cardDesrciption.classList.add('card-description');

    const cardDes = document.createElement('p');
    cardDes.classList.add('card-des');
    cardDes.innerText = product.name;
    cardDesrciption.appendChild(cardDes);

    const cardPrice = document.createElement('p');
    cardPrice.classList.add('card-price');
    cardPrice.innerText = product.newPrice;

    const cardOldPrice = document.createElement('span');
    cardOldPrice.classList.add('price-strike-through');
    cardOldPrice.innerText = product.oldPrice;
    const cardDiscount = document.createElement('span');
    cardDiscount.classList.add('discount');
    cardDiscount.innerText = product.discount;

    cardPrice.appendChild(cardOldPrice);
    cardPrice.appendChild(cardDiscount);
    cardDesrciption.appendChild(cardPrice);

    cardDetails.appendChild(cardDesrciption);

    const ctaBtn = document.createElement('div');
    ctaBtn.classList.add('cta-btn');
    const button = document.createElement('button');
    button.classList.add(
      'button',
      'btn-primary',
      'btn-icon',
      'cart-btn',
      'd-flex',
      'align-center',
      'justify-center',
      'gap',
      'cursor',
      'btn-margin'
    );
    const cartspan = document.createElement('span');
    cartspan.classList.add('material-icons-outlined');
    cartspan.innerText = 'shopping_cart';
    
    button.appendChild(cartspan);
    const buttonText = document.createElement('span');
    buttonText.innerText = 'Add To Cart';
    button.appendChild(buttonText);
    ctaBtn.appendChild(button);
    cardDetails.appendChild(ctaBtn);
    cardContainer.appendChild(cardDetails);


  }