// Asynchronous Timing Concepts in JavaScript
// What is Asynchronous Timing?
// Asynchronous timing in JavaScript refers to the ability to execute code at a later time without blocking the main thread. This is crucial for maintaining a responsive user interface, especially when dealing with operations that take time to complete, such as network requests or timers.
// Key Functions for Asynchronous Timing

// setTimeout
// The setTimeout function allows you to schedule a function to be executed after a specified delay (in milliseconds).
setTimeout(() => {
    console.log("This message is displayed after 2 seconds");
}, 2000);
// setInterval
// The setInterval function repeatedly executes a function at specified intervals (in milliseconds).
let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`This message is displayed every 1 second. Count: ${count}`);
    if (count >= 5) {
        clearInterval(intervalId); // Stop the interval after 5 executions
    }
}, 1000);
// clearTimeout and clearInterval
// These functions are used to cancel a timeout or interval that was previously set.
const timeoutId = setTimeout(() => {
    console.log("This message will not be displayed");
}, 3000);
clearTimeout(timeoutId); // Cancels the timeout before it executes
