// Callback hell in JavaScript
// Callback hell refers to the situation where multiple nested callback functions make the code hard to read and maintain. This often occurs in asynchronous programming when each operation depends on the result of the previous one.

// Example of callback hell
setTimeout(() => {
  setTimeout(() => {
    setTimeout(() => {
      console.log("Done");
    }, 1000);
  }, 1000);
}, 1000);

//Why such phenomenon occurs?
// 1. Deeply nested callbacks: When callbacks are nested within other callbacks, it creates a pyramid-like structure that is hard to follow.
// 2. Loss of context: As the nesting increases, it becomes difficult to keep track of the context and variables from outer functions.
// 3. Error handling: Managing errors in deeply nested callbacks can be cumbersome, leading to more complex code.

// Why do we need to avoid callback hell?
// 1. Readability: Code that is easy to read and understand is easier to maintain and debug.
// 2. Maintainability: Less complex code is easier to modify and extend in the future.
// 3. Error handling: Simplified error handling improves the robustness of the application.

//what is pyramid of doom?
// The "Pyramid of Doom" is a term used to describe the visual structure of deeply nested callbacks in JavaScript. It resembles a pyramid shape due to the increasing indentation levels as callbacks are nested within each other. This structure makes the code difficult to read and maintain.
  
    