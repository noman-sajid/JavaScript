// Functions in JavaScript 
// Functions are reusable blocks of code that perform a specific task
// They help in minimizing code redundancy and improving code organization
// Functions can take inputs, called parameters, and can return an output
// There are mainly 3 types of functions in JavaScript
// 1. Function Declaration
// 2. Function Expression
// 3. Arrow Function
 
// 1. Function Declaration

function greet(name){
    return `Hello, ${name}!`
}
console.log(greet("Alice")) // Output: Hello, Alice!

// Why do we need Function Declaration?
// 1. To create reusable code blocks
// 2. To improve code organization
// Common Use Cases of Function Declaration
// 1. When you need to define a function that will be used multiple times in your code
// 2. When you want to create named functions for better readability
// Time Complexity: O(1) for simple functions, can vary based on the operations inside the function
// 2. Function Expression

const add = function(a, b){
    return a + b
}
console.log(add(5, 3)) // Output: 8

// Why do we need Function Expression?
// 1. To create functions that can be assigned to variables
// 2. To create anonymous functions
// Common Use Cases of Function Expression
// 1. When you want to pass a function as an argument to another function
// 2. When you want to create immediately invoked function expressions (IIFE)
// Time Complexity: O(1) for simple functions, can vary based on the operations inside the function
// 3. Arrow Function

const multiply = (x, y) => {
    return x * y
}   
console.log(multiply(4, 6)) // Output: 24

// Why do we need Arrow Function?   
// 1. To create shorter syntax for writing functions
// 2. To lexically bind the 'this' value
// Common Use Cases of Arrow Function
// 1. When you need a concise function for simple operations
// 2. When working with higher-order functions like map, filter, and reduce
// Time Complexity: O(1) for simple functions, can vary based on the operations inside the function

// Example of Higher-Order Function using Arrow Function
const numbers = [1, 2, 3, 4, 5]
const squaredNumbers = numbers.map(num => num * num)
console.log(squaredNumbers) // Output: [1, 4, 9, 16, 25]
// For example, when prompting a user for input, you want to ensure that the prompt appears at least once
// Time Complexity: O(n) where n is the number of iterations needed to get valid input