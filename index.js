// Control for navigation bar start

const menu = document.getElementById("site-navigation");
const burgerMenu = document.getElementById("hamburger-menu");
const siteHeader = document.getElementById("site-branding");
const menuClose = document.getElementById("menu-close-icon");

function openMenu() {
  menu.classList.toggle("show");
  burgerMenu.classList.toggle("close");
  siteHeader.classList.toggle("hide");
  menuClose.classList.toggle("show");
}

menuClose.addEventListener("click", function closeMenu() {
  menu.classList.remove("show");
  burgerMenu.classList.remove("close");
  siteHeader.classList.remove("hide");
  menuClose.classList.remove("show");
});

// End control for navigation bar
