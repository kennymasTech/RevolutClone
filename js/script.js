

const btnNAvElemant = document.querySelector(".btn-mobile-nav");
const headerElement = document.querySelector(".header");

btnNAvElemant.addEventListener("click", function() {
    headerElement.classList.toggle("nav-open");
});