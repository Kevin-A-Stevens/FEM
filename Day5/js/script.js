// store a variable
// const is a keyword to declare a new variable
//const cannot be altered later or reassigned to something else
const monthlyRent = 500;
console.log(monthlyRent);

// let will allow you to reassign a variable later
let weeklyRent = 250;
console.log(weeklyRent);

const yearlyRent = monthlyRent * 12;
console.log(yearlyRent);

// reassign a new variable to weeklyRent. We can do this using let
weeklyRent = 300;
console.log(weeklyRent);

// Need to debug your program, console.log it
console.log(monthlyRent, yearlyRent);

// Strings and String Concatenation
console.log("STRINGS");
const firstName = "Kevin";
const lastName = "Stevens";
const sentence = "Hello " + firstName + " " + lastName + "! How are you?";
// Using template strings
const sentence1 = `Hello ${firstName} ${lastName}! How are you?`;

console.log(sentence);
console.log(sentence1);

// Booleans - true or false
let isTheSkyBlue = true;
console.log(isTheSkyBlue);

// numbers
const num = 5;
// Largest integer you can have
console.log(Number.MAX_SAFE_INTEGER);
// Smallest integer you can have
console.log(Number.MIN_SAFE_INTEGER);

// Control Flow
const isSkyBlue = true;
if (isSkyBlue) {
  console.log("The sky is blue");
} else {
  console.log("The sky is not blue");
}

const myVariable = 10;
if (2 + 2 === 4) {
  console.log("Hppray! Math still works");
} else {
  console.log("Panic!");
}

// else if
const friendsAtYourParty = 4;
if (friendsAtYourParty === 0) {
  console.log("Cool, I have a lot of food to myself");
} else if (friendsAtYourParty <= 4) {
  console.log("perfect amount to play Mario Kart");
} else {
  console.log("Wow! Play the dance music");
}

//Loops
console.log("LOOPS");
let myFriends = 0;

// While loop
while (myFriends < 10) {
  myFriends = myFriends + 1;
  //   myFriends += 1; same as above
  //   myFriends++; same as above
}

console.log(myFriends);

// for loop
for (let i = 0; i <= 10; i++) {
  myFriends++;
}

console.log(myFriends);

const character = "a";
const timesToRepeat = 5;
let myString = "";

for (let i = 0; i < timesToRepeat; i++) {
  myString += character;
}

console.log(myString);

// Functions
console.log("FUNCTIONS");
// function name(input) {  -- function name takes an input
//    return input + 2;  -- returns an output
// }

function addTwo(number) {
  return number + 2;
}

const finalAnswer = addTwo(5);
const finalAnswer2 = addTwo(10);
console.log(finalAnswer);
console.log(finalAnswer2);

// Scope
// Every time you call a function, it has its own scope
// Variables defines inside a function are thrown out once that function ends
// Variables defined outside of a function are global and can be used by functions
// This is the same for loops - let i = 0 is only in scope for the for loop
// Where a variable is declared matters

// Builtin functions
const sentenceA = "This Has Weird Casing";
console.log(sentenceA.toLowerCase());
console.log(sentenceA.toUpperCase());
console.log(Math.round(5.6));
console.log(Math.floor(5.1));
console.log(Math.ceil(5.1));
console.log(Math.max(5, 6, 8, 1));
console.log(Math.min(5, 6, 8, 1));

const name = "Kevin Stevens";
console.log(name.substr(6, 3)); // (startPosition, howMany), howMany is blank = to end of string

// Objects

const person = {
  name: "Kevin Stevens",
  city: "Hampshire",
  state: "Tennessee",
  ageRange: "55-65",
};

console.log(person);
console.log(person.name);

function suggestMusic(person) {
  if (person.ageRange === "25-35") {
    console.log("Rock-N-Roll");
  } else if (person.ageRange === "65-75") {
    console.log("Country");
  } else {
    console.log("Soft Rock");
  }
}
suggestMusic(person);

const dog = {
  name: "dog",
  speak() {
    console.log("woof woof");
  },
};

dog.speak();

// Arrays

const daysOfTheWeek = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

console.log(daysOfTheWeek);
console.log(daysOfTheWeek[4]);

// Array Methods
console.log(daysOfTheWeek.length);
console.log(daysOfTheWeek.join(" | ")); // join() will use commas
daysOfTheWeek.push("January"); // Adds to end of Array
console.log(daysOfTheWeek);
daysOfTheWeek.pop(); // Removes last item from array
console.log(daysOfTheWeek);

const subarray = daysOfTheWeek.splice(2, 1);
console.log(subarray);