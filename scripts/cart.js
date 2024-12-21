const cartContainer = document.getElementById("cart-container");
const totalPriceElement = document.getElementById("total-price");

const cart = JSON.parse(localStorage.getItem("cartProducts")) || [];

function displayCart() {
  cartContainer.innerHTML = "";
  let totalPrice = 0;

  if (cart.length === 0) {
    cartContainer.innerHTML = "<p>No products in cart!</p>";
    totalPriceElement.textContent = "Total Price: $0";
    return;
  }

  cart.forEach((product, index) => {
    totalPrice += product.price;
    const card = document.createElement("div");
    card.innerHTML = `
      <img src="${product.image}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>Price: $${product.price}</p>
      <span>Rating: ${product.rating.rate}</span>
      <button onclick='removeFromCart(${index})'>Remove</button>
    `;
    cartContainer.appendChild(card);
  });

  totalPriceElement.textContent =`Total Price: $${totalPrice.toFixed(2)}`;
}

function removeFromCart(index) {
  cart.splice(index, 1);
  localStorage.setItem("cartProducts", JSON.stringify(cart));
  displayCart();
}

document.getElementById("checkout-button").addEventListener("click", () => {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  if (confirm("Are you sure you want to checkout?")) {
    setTimeout(() => {
      alert("Thanks for shopping!");
      localStorage.removeItem("cartProducts");
      displayCart();
    }, 2000);
  }
});

displayCart();