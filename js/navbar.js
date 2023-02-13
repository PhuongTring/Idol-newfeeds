let navbar = document.getElementById("navbar");
const navLinks = navbar.getElementsByClassName("nav-link");
let url = window.location.href;
for (let i = 0; i < navLinks.length; i++) {
  navLinks[i].classList.remove("active");
  if (navLinks[i].href == url) {
    navLinks[i].classList.add("active");
  }
}
