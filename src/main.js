// Global Variables
var menuButton = document.getElementById("nav-btn");
var menu = document.getElementById("menu");

// Open or Closes Menu
menuButton.addEventListener("click", menuOpenClose);

function menuOpenClose() {
    if (menu.classList) {
        menu.classList.toggle("menuOpen");
    } else {
        // For IE9 Support
        var classes = menu.className.split(" ");
        var i = classes.indexOf("menuOpen");

        if (i >= 0)
            classes.splice(i, 1);
        else
            classes.push("menuOpen");
        menu.className = classes.join(" ");
    }
}