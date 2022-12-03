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

var typed = new Typed(".auto-type", {
  strings: ["Welcome", "To", "Our", "CAFE"],
  typeSpeed: 100,
  backSpeed: 100,
  loop: true,
});
