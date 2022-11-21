
const menuMobileButton = document.querySelector('.menu-mobile-button');
const primaryMenu = document.querySelector('.primary-menu');
const header = document.querySelector('.header');
const main = document.querySelector('main');


menuMobileButton.addEventListener("click", () => {
  primaryMenu.toggleAttribute("data-visible");
  menuMobileButton.toggleAttribute('visibility');
  header.toggleAttribute('data-overlay');
  main.toggleAttribute('menu-clicked');
});