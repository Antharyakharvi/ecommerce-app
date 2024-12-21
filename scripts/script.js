const productContainer = document.getElementById("product-container");

document.getElementById("load-products").addEventListener("click", async () => {
  try {
    const response = await fetch("https://fakestoreapi.com/products");
    const products = await response.json();

    productContainer.innerHTML = "";
    products.forEach(product => {
      const card = document.createElement("div");
      card.innerHTML = `
        <img src="${product.image}" alt="${product.title}">
        <h3>${product.title}</h3>
        <p>Price: $${product.price}</p>
        <span>Rating: ${product.rating.rate}</span>
        <button onclick='addToWishlist(${JSON.stringify(product)})'>Add to Wishlist</button>
      `;
      productContainer.appendChild(card);
    });
  } catch (error) {
    console.error("Error fetching products:", error);
  }
});

function addToWishlist(product) {
  const wishlist = JSON.parse(localStorage.getItem("wishlistedProducts")) || [];
  wishlist.push(product);
  localStorage.setItem("wishlistedProducts", JSON.stringify(wishlist));
  alert("Product added to wishlist!");
}