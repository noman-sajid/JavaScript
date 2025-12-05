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


