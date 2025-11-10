//Strins in JavaScript

//Creating strings
let singleQuoteString = 'Hello, World!';
let doubleQuoteString = "Hello, World!";
let backtickString = `Hello, World!`;

console.log(singleQuoteString);
console.log(doubleQuoteString);
console.log(backtickString);

//String concatenation
let greeting = "Hello";
let name = "Alice";
let concatenatedString = greeting + ", " + name + "!";
console.log(concatenatedString);
    let n = parseInt(prompt("Enter the number of elements: "));
    let arr = [];
    for (let i = 0; i < n; i++) {
      let num = parseFloat(prompt(`Enter number ${i + 1}: `));
      arr.push(num);
    }
    calculateMean(arr);

    //String properties and methods
let sampleString = "JavaScript is fun!";

//Length property
console.log("Length of sampleString:", sampleString.length); // Will Print the length of the string
//toUpperCase() method
console.log("Uppercase:", sampleString.toUpperCase());
//Will print the string in uppercase
//toLowerCase() method
console.log("Lowercase:", sampleString.toLowerCase());
//Will print the string in lowercase
//charAt() method
console.log("Character at index 5:", sampleString.charAt(5));   
//Will print the character at index 5
//indexOf() method
console.log("Index of 'is':", sampleString.indexOf("is"));
//Will print the index of substring 'is'
//substring() method
console.log("Substring from index 0 to 10:", sampleString.substring(0, 10));
//Will print the substring from index 0 to 10
//trim() method
let stringWithSpaces = "   Hello, World!   ";
console.log("Trimmed string:", stringWithSpaces.trim());
//Will print the string after removing leading and trailing spaces
//split() method
let csvString = "apple,banana,cherry";
let fruitsArray = csvString.split(",");
console.log("Fruits array:", fruitsArray);
//Will print the array of fruits
//replace() method
let newString = sampleString.replace("fun", "awesome");
console.log("Replaced string:", newString);
//Will print the string after replacing 'fun' with 'awesome'
//Template literals
let userName = "Bob";
let age = 25;
let templateLiteralString = `My name is ${userName} and I am ${age} years old.`;
console.log(templateLiteralString);
//Will print the string using template literals
//Escape sequences
let stringWithEscapeSequences = "He said, \"JavaScript is awesome!\"\nLet's learn it.";
console.log(stringWithEscapeSequences);
//Will print the string with escape sequences
//Different Escape sequences
//New Line
console.log("Hello,\nWorld!");  
//Tab
console.log("Hello,\tWorld!");
//Backslash
console.log("This is a backslash: \\");
//Single Quote
console.log('It\'s a beautiful day!');
//Double Quote
console.log("She said, \"Hello!\"");
//Unicode Character
console.log("Unicode character: \u2764"); // Prints a heart symbol
