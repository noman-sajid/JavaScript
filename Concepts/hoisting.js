// Hoisting in JavaScript refers to the behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code is executed. This means that you can use variables and functions before they are declared in the code.


//Example 1: Function Hoisting
console.log(convertTemp(32));
function convertTemp(fahrenheit){
    let celsius = (fahrenheit - 32) * 5/9;
    return celsius;
}
// In this example, the function convertTemp is called before its declaration, but due to hoisting, it works correctly.
//Example 2: Variable Hoisting with var
console.log(message); // Output: undefined
var message = "Hello, World!";
// In this example, the variable message is declared using var. Due to hoisting, the declaration is moved to the top, but the assignment remains in place, resulting in undefined when logged before assignment.
//Example 3: Variable Hoisting with let and const
console.log(value); // ReferenceError: Cannot access 'value' before initialization
let value = 10;
// In this example, the variable value is declared using let. Unlike var, let and const do not allow access before initialization, resulting in a ReferenceError.


// Most common interview question related to hoisting:


// What is hoisting in JavaScript?
// What exactly gets hoisted and during which phase?

// Are var, let, and const hoisted?
// If yes, how is their hoisting behavior different?

// What happens if you access a variable before it’s declared?
// Compare:

// var

// let

// const

// What is the Temporal Dead Zone (TDZ)?
// Why does it exist and when does it start and end?


// Are function declarations hoisted?
// Can you call a function before its definition?

// Are function expressions hoisted?
// What about arrow functions?

// What’s the difference in hoisting between:

// function foo() {}


// and

// const foo = () => {}