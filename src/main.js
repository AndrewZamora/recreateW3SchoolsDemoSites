var ul = document.querySelector("ul");
var menuBtn = document.getElementById("menuBtn");
var menuIsOpen = false;
// Element Variables

menuBtn.addEventListener("click", function () {
    if (menuIsOpen) {
        ul.style.display = "none";
        menuIsOpen = false;
    } else {
        ul.style.display = "flex";
        menuIsOpen = true;
    }
});
//Closes Mobile Menu