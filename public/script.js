// Interações sutis para simular comportamento de e-commerce.
const cartCount = document.querySelector(".cart-count");
const addButtons = document.querySelectorAll(".ghost-button");

let count = 0;

addButtons.forEach((button) => {
  button.addEventListener("click", () => {
    count += 1;
    cartCount.textContent = count.toString();
  });
});
