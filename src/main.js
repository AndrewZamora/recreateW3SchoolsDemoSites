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
//Closes Mobile Menu