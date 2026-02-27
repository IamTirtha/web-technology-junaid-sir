const wishtListBtns = document.querySelectorAll(".wishlist-btn-card");
let count = 0;
wishtListBtns.forEach((btn) => {
  btn.addEventListener("click", function () {
    let wishCount = document.getElementById("wishCount");
    count++;
    wishCount.innerText = count;
  });
});

const buttons = document.querySelectorAll(".add-to-cart-btn");

let cart = [];

buttons.forEach((btn) => {
  btn.addEventListener("click", function (e) {
    const card = e.target.closest(".product-cart"); //e.target → the exact element clicked. .closest(".product-cart") → moves up in DOM tree to find nearest parent with class product-cart

    const categoryName = card.querySelector(".category-name").innerText;
    const productName = card.querySelector(".product-name").innerText;
    const productPrice = parseInt(
      card.querySelector(".product-price").innerText,
    );

    const product = {
      name: productName,
      price: productPrice,
      ProductCategory: categoryName,
      quantity: 1,
    };
    addToCart(product);
  });
});

function addToCart(product) {
  const existingItem = cart.find((item) => item.name === product.name);

  //   existingItem ={name: 'Smart Watch', productPrice: 2500, ProductCategory: 'Electronics', quantity: 2}

  console.log(existingItem);

  if (existingItem) {
    existingItem.quantity++;
  } else {
    cart.push(product);
  }
  console.log(cart);
  updateCart();
}

const cartItemsDiv = document.getElementById("cartItems");
const cartCount = document.getElementById("cartCount");
const totalPrice = document.getElementById("totalPrice");

function updateCart() {
  cartItemsDiv.innerHTML = "";
  let total = 0;
  let totalItems = 0;

  cart.forEach((item) => {
    total = total + item.price * item.quantity;
    totalItems = totalItems + item.quantity;
    const div = document.createElement("div");
    div.innerHTML = `
            ${item.name} (x ${item.quantity}) - $ ${item.productPrice * item.quantity}
            <button onclick="removeFromCart('${item.name}')">Remove</button>
        `;
    cartItemsDiv.appendChild(div);
  });

  console.log(total);

  cartCount.innerText = totalItems;
  totalPrice.innerText = total;
}
