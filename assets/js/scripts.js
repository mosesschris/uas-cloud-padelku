// hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#mobile-menu");

hamburger.addEventListener("click", function () {
  hamburger.classList.toggle("hamburger-active");
  navMenu.classList.toggle("hidden");
});
