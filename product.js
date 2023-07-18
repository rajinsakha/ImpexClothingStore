// JavaScript code for the product page
const addToCartButton = document.querySelector('.addCart-btn');
let index = 0;

addToCartButton.addEventListener('click', () => {

  const productContainer = document.querySelector('.detailedProduct-desc');
  const productName = productContainer.querySelector('.product-name').textContent;
  const productPrice = productContainer.querySelector('.product-price').textContent;
  const productImage = document.querySelector('#product-image').src;
  index++;


  const imagePath = productImage.substring(productImage.lastIndexOf('/'));
  

  const productData = {
    index: index,
    name: productName,
    price: productPrice,
    image: imagePath

  };

  for(let i = 0; i<index;i++){
    localStorage.setItem(`cartProductData${i}`, JSON.stringify(productData));
  }


  // localStorage.setItem('cartProductData', JSON.stringify(productData));


});
