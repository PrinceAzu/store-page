// Owl Carousel
$(document).ready(function () {
    $(".owl-carousel").owlCarousel({
        items: 1,
        loop: true,
        autoplay:true,
        dots:true,
        autoplaySpeed: 2000,
        smartSpeed: 15000,
        autoplayHoverPause: true,
    });  
});

// Navbar
const openMenu = document.querySelector(".nav-open");
const closeMenu = document.querySelector(".nav-close");
const navBar = document.querySelector("nav");

openMenu.addEventListener("click", show);
closeMenu.addEventListener("click", close);

function show() {
    navBar.style.display = "flex";
    navBar.style.left = "0";

    closeMenu.style.display = "block"
}

function close() {
    navBar.style.left = "-300px";
    closeMenu.style.display = "none"
}


// Cart
let cartIcon = document.querySelector("#cart-icon");
let cart = document.querySelector(".cart");
let closeCart = document.querySelector("#close-cart");

cartIcon.addEventListener("click", openCart());
closeCart.addEventListener("click", cartClose());

function openCart() {
    cart.classList.add("active")
}


