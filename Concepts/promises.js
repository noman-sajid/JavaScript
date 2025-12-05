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


//Problem 1 : add two numbers using promise and log the result.
function addAsync(a, b) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

addAsync(5, 10)
  .then((result) => {
    console.log("Sum:", result); // Output: Sum: 15
    })
// Problem 2 : add input validation to Problem 1

function addAsyncSafe(a, b) {
  return new Promise((resolve, reject) => {

    if (typeof a !== "number" || typeof b !== "number") {
      reject(new Error("Invalid input: Both values must be numbers"));
      return;
    }

    setTimeout(() => {
      resolve(a + b);
    }, 1000);
  });
}

addAsyncSafe(10, 20)
  .then((result) => {
    console.log(result); // 30
  })
  .catch((error) => {
    console.log(error.message);
  });

addAsyncSafe("3", 2)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error.message);
  });

    