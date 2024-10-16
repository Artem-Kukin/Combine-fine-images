const menu = document.querySelector(".header__nav");
const mobileMenuOpen = document.querySelector(".header__logo-mobile-menu");
const mobileMenuClose = document.querySelector(".header__nav-close-btn")

mobileMenuOpen.addEventListener('click', () => {
menu.classList.add("header__nav--mobile-menu");
}) ;


mobileMenuClose.addEventListener('click', () => {
menu.classList.remove("header__nav--mobile-menu");
}) ;
