// Writing many small functions are preferable to one large function
// A function should do one thing and do it well

// Keep source of truth out of the DOM and in JS

// Keep track of numbers
let runningTotal = 0;

let buffer = "0"; // Keep track of what is on screen

let previousOperator = null; // represent what operator they clicked last (+ - / *)

const screen = document.querySelector(".screen"); // What we will be writing out to

function buttonClick(value) {
  //   debugger;
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
  switch (symbol) {
    case "C":
      buffer = "0";
      runningTotal = "0";
      break;
    case "=":
      if (previousOperator === null) {
        // need two numbers to do math
        return;
      }
      flushOperation(parseInt(buffer));
      previousOperator = null;
      buffer = runningTotal;
      runningTotal = 0;
      break;
    case "←":
      if (buffer.length === 1) {
        buffer === "0";
      } else {
        buffer = buffer.substring(0, buffer.length - 1);
      }
      break;
    case "+":
    case "−":
    case "×":
    case "÷":
      handleMath(symbol);
      break;
  }
}

function handleMath(symbol) {
  if (buffer === "0") {
    // do nothing
    return;
  }

  const intBuffer = parseInt(buffer); // converts number string to a number

  if (runningTotal === 0) {
    runningTotal = intBuffer;
  } else {
    flushOperation(intBuffer);
  }

  previousOperator = symbol;
  buffer = "0";
}

// function flushOperation(intBuffer) {
//   switch (previousOperator) {
//     case "+":
//       runningTotal += intBuffer;
//       break;
//     case "−":
//       runningTotal -= intBuffer;
//       break;
//     case "×":
//       runningTotal *= intBuffer;
//       break;
//     case "÷":
//       runningTotal /= intBuffer;
//       break;
//   }
// }

function flushOperation(intBuffer) {
  if (previousOperator === "+") {
    runningTotal += intBuffer;
  } else if (previousOperator === "−") {
    runningTotal -= intBuffer;
  } else if (previousOperator === "×") {
    runningTotal *= intBuffer;
  } else {
    runningTotal /= intBuffer;
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
