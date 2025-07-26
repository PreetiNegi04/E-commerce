export const createHorizontalProductCart = (products, parentElement) =>{
  for(let product of products){
    const cardContainer = document.createElement('div');
    cardContainer.classList.add("card-horizontal", "d-flex", "shadow");

    /*Image Container */
    const imageContainer = document.createElement('div');
    imageContainer.classList.add("card-horizontal-image-container", "relative");

    const image = document.createElement('img');
    image.classList.add("card-image");
    image.setAttribute("src", product.img);
    image.setAttribute("alt", product.alt);

    imageContainer.appendChild(image);

    cardContainer.appendChild(imageContainer);

    /*Card Details Conatiner*/
    const cardDetailsContainer = document.createElement('div');
    cardDetailsContainer.classList.add('card-details', 'd-flex', 'direction-column');
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
      cardPrice.classList.add('card-price');
      cardPrice.innerText = `Rs. ${product.newPrice}`;
  
      const cardOldPrice = document.createElement('span');
      cardOldPrice.classList.add('price-strike-through');
      cardOldPrice.innerText =`Rs. ${product.oldPrice}`;
      cardPrice.appendChild(cardOldPrice);
  
      const cardDiscount = document.createElement('span');
      cardDiscount.classList.add('discount', 'padding-all-8');
      cardDiscount.innerText = `(${product.discount}% OFF)`;
      cardPrice.appendChild(cardDiscount);
  
      desrciptionContainer.appendChild(cardPrice);
      cardDetailsContainer.appendChild(desrciptionContainer);

      /** Quantity conatiner */
      const quantityContainer = document.createElement('div');
      quantityContainer.classList.add("quantity-container", "d-flex", "gap");

      const containerTitle = document.createElement('p');
      containerTitle.classList.add('q-title');
      containerTitle.innerText="Quantity";
      quantityContainer.appendChild(containerTitle);

      const quantity = document.createElement('div');
      quantity.classList.add("count-container", "d-flex", "align-center", "gap");
      const incbtn = document.createElement('button');
      incbtn.classList.add("count");
      incbtn.innerText = "+";

      const value = document.createElement('span');
      value.classList.add("count-value");
      value.innerText = "1";

      const decbtn = document.createElement('button');
      decbtn.classList.add("count");
      decbtn.innerText = "-";

      quantity.appendChild(incbtn);
      quantity.appendChild(value);
      quantity.appendChild(decbtn);

      quantityContainer.appendChild(quantity);
      cardDetailsContainer.appendChild(quantityContainer);

      /** CTA button */
      const ctaButton = document.createElement('div');
      ctaButton.classList.add('cta-btn', 'd-flex', 'gap');
      const removeButton = document.createElement('button');
      removeButton.classList.add(
        "button",
        "hori-btn",
        "btn-primary",
        "btn-icon",
        "d-flex",
        "align-center",
        "justify-center",
        "gap",
        "cursor",
        "btn-margin"
      );
  
      removeButton.setAttribute("data-id", product._id);
      removeButton.innerText = "Remove";
      const saveButton = document.createElement('button');
      saveButton.classList.add(
        "button",
        "hori-btn",
        "btn-primary",
        "btn-icon",
        "d-flex",
        "align-center",
        "justify-center",
        "gap",
        "cursor",
        "btn-margin"
      );
  
      saveButton.setAttribute("data-id", product._id);
      saveButton.innerText = "Save To Wishlist";
      ctaButton.appendChild(removeButton);
      ctaButton.appendChild(saveButton);
      cardDetailsContainer.appendChild(ctaButton);
      cardContainer.appendChild(cardDetailsContainer);

      parentElement.appendChild(cardContainer);
  }

}