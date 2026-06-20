export function initCart() {
  const cartBtns = document.querySelectorAll(".add-to-cart-btn");
  const cartCount = document.getElementById("cart-count");
  const floatingCart = document.querySelector(".floating-cart");

  if (cartBtns && cartCount && floatingCart) {
    let count = 0;
    cartBtns.forEach((btn) => {
      btn.addEventListener("click", (e) => {
        e.preventDefault();
        count++;
        cartCount.textContent = count;

        floatingCart.style.transform = "scale(1.2)";
        setTimeout(() => {
          floatingCart.style.transform = "";
        }, 200);
      });
    });
  }
}
