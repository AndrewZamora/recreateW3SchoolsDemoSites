// Global Variables
var menuButton = document.getElementById("nav-btn");
var menu = document.getElementById("menu");

// Open or Closes Menu
menuButton.addEventListener("click", menuOpenClose);
function menuOpenClose() {
    menu.classList.toggle("menuOpen");
 }