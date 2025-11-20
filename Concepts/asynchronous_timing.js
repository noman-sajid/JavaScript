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
// Promises and async/await
// Promises provide a way to handle asynchronous operations more gracefully. The async/await syntax allows you to write asynchronous code that looks synchronous.
function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Data fetched");
        }, 2000);
    });
}


// Using async/await
async function getData() {
    const data = await fetchData();
    console.log(data);
}
getData(); // Logs "Data fetched" after 2 seconds

//async function example
async function example() {
    console.log("Start");
    await new Promise(resolve => setTimeout(resolve, 2000)); // Wait for 2 seconds
    console.log("End after 2 seconds");
}
// promise explanation
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to attach callbacks for success (.then) and failure (.catch) cases.


const myPromise = new Promise((resolve, reject) => {
    const success = true; // Simulate success or failure
    setTimeout(() => {
        if (success) {
            resolve("Promise resolved successfully");
        } else {
            reject("Promise rejected");
        }
    }, 1000);
});


myPromise
    .then((message) => {
        console.log(message);   
    })
    .catch((error) => {
        console.error(error);
    });


// Conclusion
// Understanding asynchronous timing is essential for building efficient and responsive web applications. By leveraging functions like setTimeout, setInterval, and Promises, developers can manage time-based operations without blocking the main execution thread.