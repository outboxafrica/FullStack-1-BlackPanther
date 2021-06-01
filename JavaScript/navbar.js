// NAVIGATION BAR
const toggle = document.querySelector(".toggle");
const menu = document.querySelector(".menu");
// Event Listener
toggle.addEventListener("click", toggleMenu, false);
// Toggle Mobile menu
function toggleMenu() {
    if (menu.classList.contains("active")) {
        menu.classList.remove("active");
        // adds the hamburger menu icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-bars'></i>";
    }else{
        menu.classList.add("active");

        // adds the close (x) icon
        toggle.querySelector("a").innerHTML = "<i class='fas fa-times'></i>";
    }
}