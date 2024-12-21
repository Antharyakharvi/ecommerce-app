const wishlistContainer = document.getElementById("wishlist-container");

const wishlist = JSON.parse(localStorage.getItem("wishlistedProducts")) || [];

function displayWishlist() {
  wishlistContainer.innerHTML = "";
  if (wishlist.length === 0) {
    wishlistContainer.innerHTML = "<p>No products in wishlist!</p>";
    return;
  }

  wishlist.forEach(product => {
    const card = document.createElement("div");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
      <span>Rating: ${product.rating.rate}</span>
      <button onclick='addToCart(${JSON.stringify(product)})'>Add to Cart</button>
    `;
    wishlistContainer.appendChild(card);
  });
}

function addToCart(product) {
  const cart = JSON.parse(localStorage.getItem("cartProducts")) || [];
  cart.push(product);
  localStorage.setItem("cartProducts", JSON.stringify(cart));
  alert("Product added to cart!");
}

displayWishlist();