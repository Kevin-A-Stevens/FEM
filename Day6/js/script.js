// Assign your buttons to variables
const prevBtn = document.querySelector(".prev");
const nextBtn = document.querySelector(".next");
const galleryImgs = document.querySelectorAll(".gallery-image");
let currentlySelected = 0; // Keeps track of where you are in the gallery

// Add event listener to your buttons
prevBtn.addEventListener("click", function () {
  galleryImgs[currentlySelected].classList.remove("active"); // remove the active class
  currentlySelected--; // subtracts one to currentlySelected
  galleryImgs[currentlySelected].classList.add("active"); // adds the active class
  nextBtn.disabled = false; // make Next button active

  if (currentlySelected === 0) {
    prevBtn.disabled = true;
  }
});

nextBtn.addEventListener("click", function () {
  galleryImgs[currentlySelected].classList.remove("active"); // remove the active class
  currentlySelected++; // adds one to currentlySelected
  galleryImgs[currentlySelected].classList.add("active"); // adds the active class
  prevBtn.disabled = false; // make Prev button active

  if (galleryImgs.length === currentlySelected + 1) {
    nextBtn.disabled = true;
  }
});

// https://swiperjs.com/
