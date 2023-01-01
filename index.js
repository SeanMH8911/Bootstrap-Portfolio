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

// Loading bar
let i = 0;
function move() {
  if (i == 0) {
    i = 1;
    const elem = document.getElementById("myBar");
    let width = 1;
    let id = setInterval(frame, 10);
    function frame() {
      if (width >= 100) {
        clearInterval(id);
        i = 0;
      } else {
        width++;
        elem.style.width = width + "%";
      }
    }
  }
}

if (document.readyState == "loading") {
  // still loading, wait for the event
  console.log("loaded");
} else {
  // DOM is ready!
  move();
}
