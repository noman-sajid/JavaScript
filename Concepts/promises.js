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

//Promise Consumption
myPromise
    .then((result) => {
        console.log(result); // Output: Operation completed successfully!
    })
    .catch((error) => {
        console.log(error); // Output: Operation failed.
    })
    .finally(() => {
        console.log("Promise has been settled (either resolved or rejected).");
    });

// Promise API Methods
const promise1 = Promise.resolve(42);
const promise2 = Promise.reject("An error occurred.");
const promise3 = new Promise((resolve) => setTimeout(() => resolve("Done after 1 second"), 1000));
Promise.all([promise1, promise3])
    .then((results) => {
        console.log("All promises resolved:", results); // Output: All promises resolved: [42, "Done after 1 second"]
    })
    .catch((error) => {
        console.log("One of the promises rejected:", error);
    });

Promise.race([promise3, promise2])
    .then((result) => {
        console.log("First promise resolved:", result);
    })
    .catch((error) => {
        console.log("First promise rejected:", error); // Output: First promise rejected: An error occurred.
    });
  //list of promice api methods and their uses
  // 1. Promise.resolve(value): Returns a Promise that is resolved with the given value.
  // 2. Promise.reject(reason): Returns a Promise that is rejected with the given reason.
  // 3. Promise.all(iterable): Returns a Promise that resolves when all of the Promises in the iterable have resolved, or rejects if any of them reject.
  // 4. Promise.race(iterable): Returns a Promise that resolves or rejects as soon as one of the Promises in the iterable resolves or rejects.
  // 5. Promise.allSettled(iterable): Returns a Promise that resolves after all of the given Promises have either resolved or rejected, with an array of objects that each describes the outcome of each Promise.
  // 6. Promise.any(iterable): Returns a Promise that resolves as soon as any of the Promises in the iterable resolves, or rejects if all of them reject.      


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



// problem 3 : Return a Promise Resolve with "Done" after 2 seconds with a function

function waitAndResolve() {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve("Done")
        }, 2000)
    })
}

waitAndResolve().then(msg => console.log(msg));


// Problem : check if age is appropriatte and then return a promise based on that 

function checkAge(age) {
    return new Promise((resolve, reject) => {
        if (age >= 18) {
            resolve("Access granted")
        } else {
            reject(new Error("Acess Denied"));
            return
        }
    })
}

checkAge(15).then((res) => res).catch((error) => { console.log(error.message) })



// Problem 5 : divide two numbers using promise and handle division by zero error and Nan error

function divideAsync(a, b) {
    return new Promise((resolve, reject) => {
        if (typeof a !== 'number' || typeof b !== 'number') {
            reject(new Error("Invalid input"))
        }
        else if (b === 0) {
            reject(new Error("Cannot divide by zero"))
            return;
        } else {
            resolve(a / b)
        }
    })
}

divideAsync(10, 2).then((res) => { console.log(res) }).catch((error) => { console.log(error.message) });
divideAsync(10, 0).then((res) => { console.log(res) }).catch((error) => { console.log(error.message) });




// Promise Api Problems 

// Problem : Create two async functions use promise api to return result of both

   function addAsync(a, b){
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 1000);
      })
   }

   function addAsync(a, b){
      return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve(a + b)
        }, 2000);
      })
   }

async function addAll(){
    const result = await Promise.all([addAsync(2, 3), addAsync(5, 5)])
    console.log(result)
}  

addAll()