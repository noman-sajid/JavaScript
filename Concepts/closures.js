// Closures in JavaScript

// A closure is a feature in JavaScript where an inner function has access to the outer (enclosing) function's variables and parameters, even after the outer function has returned. Closures are created every time a function is created, at function creation time.

// Example 1: Basic Closure
function outerFunction(outerVariable) {
    return function innerFunction(innerVariable) {
        console.log('Outer Variable: ' + outerVariable);
        console.log('Inner Variable: ' + innerVariable);
    }
}

const newFunction = outerFunction('outside');
newFunction('inside');

// Example 2: Closure with Private Variables
function counter() {
    let count = 0; // private variable
    return function() {
        count++;
        return count;
    }   
}

const increment = counter();
console.log(increment()); // Output: 1
console.log(increment()); // Output: 2
console.log(increment()); // Output: 3


// Example 3: Closure in a Loop
function createFunctions() {
    let functions = [];
    for (let i = 0; i < 3; i++) {
        functions.push(function() {
            console.log(i);
        });
    }
    return functions;
}
const funcs = createFunctions();
funcs[0](); // Output: 0
funcs[1](); // Output: 1
funcs[2](); // Output: 2