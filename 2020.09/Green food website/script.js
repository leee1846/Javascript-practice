let slideShow = document.querySelector("#slideshow");
let slides = slideShow.getElementsByTagName("img");
let slideShowText = document.querySelector("#slideshowText");
let slidesText = slideShowText.getElementsByTagName("div");
let index = 0;
let i = 0;

function prevSlide() {
  slides[index].classList.remove("active");
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add("active");
}
function nextSlide() {
  slides[index].classList.remove("active");
  index = (index + 1) % slides.length;
  slides[index].classList.add("active");
}
function prevText() {
  slidesText[i].classList.remove("active");
  i = (i - 1 + slidesText.length) % slidesText.length;
  slidesText[i].classList.add("active");
}
function nextText() {
  slidesText[i].classList.remove("active");
  i = (i + 1) % slidesText.length;
  slidesText[i].classList.add("active");
}

let left = document.querySelector(".left");
let right = document.querySelector(".right");

left.addEventListener("click", function () {
  prevSlide();
  prevText();
});
right.addEventListener("click", function () {
  nextSlide();
  nextText();
});

let menu = document.querySelector(".menuIcon");
let toggleMenu = document.querySelector('#toggleMenu');

menu.addEventListener("click", function () {
  toggleMenu.classList.toggle("active");
});
