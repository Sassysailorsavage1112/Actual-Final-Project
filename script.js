const menuButton = document.querySelector(".fa-bars");

const navLinks = document.querySelector(".nav__links");

menuButton.addEventListener("click", function () {
  navLinks.classList.toggle("menuOpen");
});