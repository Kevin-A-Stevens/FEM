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
