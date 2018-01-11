var ul = document.querySelector("ul");
var menuBtn = document.getElementById("menuBtn");
// Element Variables

menuBtn.addEventListener("click", function () {
    if (ul.style.display === "block") {
        ul.style.display = "none";
    } else {
        ul.style.display = "block";
    }
});

var menuButton = document.getElementById("nav-btn");
var menu = document.getElementById("menu");

menuButton.addEventListener("click", menuOpenClose);
function menuOpenClose() {
    menu.classList.toggle("menuOpen");
 }

//Closes Mobile Menu