// Writing many small functions are preferable to one large function
// A function should do one thing and do it well

// Keep source of truth out of the DOM and in JS

// Keep track of numbers
let runningTotal = 0;

let buffer = "0"; // Keep track of what is on screen

let previousOperator; // represent what operator they clicked last (+ - / *)

const screen = document.querySelector(".screen"); // What we will be writing out to

function buttonClick(value) {
  if (isNaN(value)) {
    // this is not a number
    handleSymbol(value);
  } else {
    // This is a number
    handleNumber(value);
  }
  screen.innerText = buffer; // Add pressed number strings to screen
}

function handleSymbol(symbol) {
  if (symbol === "C") {
    buffer = "0";
    runningTotal = "0";
  }
}

function handleNumber(numberString) {
  if (buffer === "0") {
    buffer = numberString;
  } else {
    buffer += numberString;
  }
}

function init() {
  document
    .querySelector(".calc-buttons") // grabs the section with class of calc-buttons
    .addEventListener("click", function (event) {
      // on click event, run this function
      buttonClick(event.target.innerText);
    });
}

init();
