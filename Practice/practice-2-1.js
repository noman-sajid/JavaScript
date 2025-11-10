//Practice 2-1: Strings and String methods

// Problem 1: What will be the output of the following code?
   console.log("hello\"".length)
// Answer: 6

// Problem 2 : Explore the include(), startsWith(), endsWith() methods of strings with examples.

let exampleString = "JavaScript is awesome!";
// includes() method
console.log(exampleString.includes("awesome")); // true
console.log(exampleString.includes("fun")); // false
// startsWith() method
console.log(exampleString.startsWith("Java")); // true
console.log(exampleString.startsWith("Script")); // false
// endsWith() method
console.log(exampleString.endsWith("!")); // true
console.log(exampleString.endsWith("awesome")); // false


// Problem 3 : Write a program to convert a string to LowerCase

let upperCaseString = "HELLO WORLD";
let lowerCaseString = upperCaseString.toLowerCase();
console.log(lowerCaseString); // Output: hello world

// Problem 4 : Extract the number/amount from the string "Please Give $1000"

let str = "Please Give $1000";
let amount = str.match(/\$\d+/)[0];
console.log(amount); // Output: $1000
// to do such a thing like extracting number from string we can use regex (regular expression) -- A topic We are to speak of later

