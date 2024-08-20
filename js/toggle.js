document.addEventListener("DOMContentLoaded", function() {
    const navbarToggler = document.querySelector(".classy-navbar-toggler");
    const nav = document.querySelector("nav");

    navbarToggler.addEventListener("click", function() {
        nav.classList.toggle("active");
    });
});
