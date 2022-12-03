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

let popup = document.getElementById("popup");
function openPopup() {
  popup.classList.add("openPopup");
}

function closePopup() {
  popup.classList.remove("openPopup");
}
