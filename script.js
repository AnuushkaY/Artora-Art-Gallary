// Part	                                                     What it Does
//
// addCartBtns	                                             Gets all "Add to Cart" buttons
// addEventListener("click")	                               Runs when user clicks the button
// productBox.querySelector(...)                           	 Gets product info (title, price, image)
// sessionStorage	                                           Saves the cart data in browser
// addToCart()	                                             Adds the product to the cart (or increases quantity)
// updateCartCount()	                                       Updates the cart badge with the number of items




const addCartBtns = document.querySelectorAll(".add");
addCartBtns.forEach(btn => {
  btn.addEventListener("click", e => {
    const productBox = e.target.closest(".product-box");
    addToCart(productBox);
  });
});

const addToCart = productBox => {
  const img = productBox.querySelector('img').src;
  const title = productBox.querySelector('.product-title').textContent;
  const price = parseFloat(productBox.querySelector('.price').textContent.replace(/[^0-9.-]+/g, ''));

  const cartData = JSON.parse(sessionStorage.getItem('cartData')) || [];
  const exists = cartData.find(item => item.title === title);

  if (exists) {
    exists.quantity++;
  } else {
    cartData.push({ img, title, price, quantity: 1 });
  }

  sessionStorage.setItem('cartData', JSON.stringify(cartData));
  alert('✅ Added to cart!');
  updateCartCount();
};

function updateCartCount() {
  const cartData = JSON.parse(sessionStorage.getItem("cartData")) || [];
  const totalItems = cartData.reduce((sum, item) => sum + item.quantity, 0);
  const cartCount = document.getElementById("cart-count");
  if (cartCount) {
    cartCount.textContent = totalItems;
  }
}
