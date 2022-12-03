let logo = document.querySelector(".nav-logo");
logo.addEventListener("mouseover", mouseOver);

function mouseOver() {
  menu = document.querySelector(".menu");
  menu.classList.toggle("active");

  promotions = document.querySelector(".promotions");
  promotions.classList.toggle("active");

  reviews = document.querySelector(".reviews");
  reviews.classList.toggle("active");

  contacts = document.querySelector(".contacts");
  contacts.classList.toggle("active");

  membership = document.querySelector(".membership");
  membership.classList.toggle("active");
}

const swiper = new Swiper(".swiper", {
  // Optional parameters
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },

  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
