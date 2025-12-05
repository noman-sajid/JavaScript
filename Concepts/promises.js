//Promises in JavaScript 
// A Promise is an object that represents the eventual completion (or failure) of an asynchronous operation and its resulting value. It allows you to write cleaner, more manageable asynchronous code compared to traditional callback functions. in simple terms, a promise is a placeholder for a value that will be available in the future.

// Creating a Promise
const myPromise = new Promise((resolve, reject) => {
  const success = true; // Simulating an asynchronous operation
    setTimeout(() => {
        if (success) {
            resolve("Operation completed successfully!");
        } else {
            reject("Operation failed.");
        }
    }, 2000);
});