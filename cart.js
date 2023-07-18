window.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.querySelector('.cart-items-container');
    const itemNum = document.getElementById('itemNum');
    let cartProductData;
    for(let i=0; i<localStorage.length;i++){
        cartProductData = JSON.parse(localStorage.getItem(`cartProductData${i}`));
    }

    
    let totalItems = JSON.parse(localStorage.length);
    itemNum.textContent = `ITEMS: ${totalItems}`;
    
  
    if (!cartProductData) {
      const noItems = document.createElement('h1');
      noItems.classList.add('no-items');
      noItems.textContent = "There are no items in the cart.";
      cartItemsContainer.appendChild(noItems);
      itemNum.textContent = `ITEMS: 0`
    } else {
        // for(let i=0;i<cartProductData.index;i++){
        for(let i=0; i<localStorage.length;i++){
           
        const cartItemDiv = document.createElement('div'); 
        cartItemDiv.classList.add('cart-div');
        // cartItemDiv.setAttribute("id", `${i}`);

        const cartItemTitle = document.createElement('p');
        cartItemTitle.classList.add('cart-title');
        cartItemTitle.textContent = cartProductData.name;
  
        cartItemPrice = document.createElement('p');
        cartItemPrice.classList.add('cart-price');
        cartItemPrice.textContent = cartProductData.price;
  
        const cartItemImage = document.createElement('img');
        cartItemImage.src = `./assets${cartProductData.image}`;
        cartItemImage.classList.add('cart-image');

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = "Delete";
        deleteBtn.classList.add('delete-btn');

        deleteBtn.addEventListener('click', () => {
          // const index = parseInt(cartItemDiv.getAttribute('id'));
          localStorage.removeItem(`cartProductData${i}`);
          cartItemDiv.remove(); // Remove the parent div when delete button is clicked

        });
        
 
        cartItemsContainer.appendChild(cartItemDiv);
        cartItemDiv.appendChild(cartItemImage);
        cartItemDiv.appendChild(cartItemTitle);
        cartItemDiv.appendChild(cartItemPrice);
        cartItemDiv.appendChild(deleteBtn);
        }
        

      }

 

 

  });