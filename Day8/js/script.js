// AJAX = Asynchronous JavaScript and XML
// JSON = JavaScript Object Notation
// https://dog.ceo/dog-api/

// Screaming CAPS means this variable will never change
const BREEDS_URL = "https://dog.ceo/api/breeds/image/random";

function addDog() {
  // Request from dog.ceo server
  // fetch returns a promise
  fetch(BREEDS_URL)
    .then(function (response) {
      // Run this function once you receive back from the server
      return response.json(); // process the response into something we can use
    })
    .then(function (data) {
      // process that data. data = what the server returned
      const img = document.createElement("img"); // Create an img tag
      img.src = data.message; // img tags src to the message received back form the API
      img.alt = "Cute dog"; // Set the alt text

      document.querySelector(".doggos").appendChild(img); // append inside the HTML tag
    });
}

document.querySelector(".add-dog").addEventListener("click", addDog);

// https://developer.twitter.com/en/docs
// https://developers.facebook.com/
// Hi-light text and hold Alt + Arrow up or down to move hi-lighted text up or down
