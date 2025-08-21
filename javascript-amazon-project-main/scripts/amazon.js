const products = [{
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image: 'images/products/athletic-cotton-socks-6-pairs.jpg',
    name: ' Black and Gray Athletic Cotton Socks - 6 Pairs',
    rating: {
        stars: 4.5,
        rating: 87
    },
    priceCents: 1090
},
{
    id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image:"images/products/intermediate-composite-basketball.jpg",
    name: 'Intermediate Size Basketball',
    rating:{
        stars: 4,
        rating: 127,
    
    },
    priceCents: 2095
},
{
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image:"images/products/adults-plain-cotton-tshirt-2-pack-teal.jpg",
    name: 'Adults Plain Cotton T-Shirt - 2 Pack',
    rating:{
        stars: 4.5,
        rating: 56
    },
    priceCents:799
},
{ 
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image:"images/products/floral-mixing-bowl-set.jpg",
    name: 'Floral mixing bowl set - 6 pieces',
    rating:{
        stars: 3.5,
        rating: 122
    },
    priceCents:25000
}];

let productsHTML = '';

products.forEach((product)=>{
    productsHTML += `<div class="product-container">
          <div class="product-image-container">
            <img class="product-image"
              src=${product.image}>
          </div>

          <div class="product-name limit-text-to-2-lines">
            ${product.name}
          </div>

          <div class="product-rating-container">
            <img class="product-rating-stars"
              src="images/ratings/rating-${product.rating.stars *10}.png">
            <div class="product-rating-count link-primary">
              ${product.rating.rating}
            </div>
          </div>

          <div class="product-price">
            $${(product.priceCents / 100).toFixed(2)}
          </div>

          <div class="product-quantity-container">
            <select>
              <option selected value="1">1</option>
              <option value="2">2</option>
              <option value="3">3</option>
              <option value="4">4</option>
              <option value="5">5</option>
              <option value="6">6</option>
              <option value="7">7</option>
              <option value="8">8</option>
              <option value="9">9</option>
              <option value="10">10</option>
            </select>
          </div>

          <div class="product-spacer"></div>

          <div class="added-to-cart">
            <img src="images/icons/checkmark.png">
            Added
          </div>

          <button class="add-to-cart-button button-primary
          js-add-to-cart-btn"
          data-product-id='${product.id}'>
            Add to Cart
          </button>
        </div>`
        
})
console.log(productsHTML)

document.querySelector('.js-products-grid').innerHTML = productsHTML

document.querySelectorAll('.js-add-to-cart-btn').forEach((button)=>{
  button.addEventListener('click',()=>{
   const productId = button.dataset.productId;
   

let matchingItem;

   cart.forEach((item)=>{
    if(productId === item.productId){
      matchingItem = item
    }
   })
   
   if(matchingItem){
    matchingItem.quantity+=1
   }else{
    cart.push({
      productId: productId,
      quantity: 1
  
     })
   }
   console.log(cart)
  
  })})