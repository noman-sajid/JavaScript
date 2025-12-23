// Scope in JavaScript 
// refers to the accessibility of variables, functions, and objects in different parts of the code.
// JavaScript has three types of scope: Global Scope, Function Scope, and Block Scope.

// 1. Global Scope
// Variables declared outside of any function or block are in the global scope and can be accessed from anywhere in the code.
var globalVar = "I am a global variable";
function showGlobalVar() {
    console.log(globalVar); // Output: I am a global variable
}
showGlobalVar();
console.log(globalVar); // Output: I am a global variable
// 2. Function Scope
// Variables declared within a function are in the function scope and can only be accessed within that function.
function myFunction() { 
    var functionVar = "I am a function variable";
    console.log(functionVar); // Output: I am a function variable
}
myFunction();
// console.log(functionVar); // Error: functionVar is not defined
// 3. Block Scope
// Variables declared with let or const within a block (e.g., inside curly braces {}) are in the block scope and can only be accessed within that block.
if (true) {
    let blockVar = "I am a block variable"; 
    console.log(blockVar); // Output: I am a block variable
}