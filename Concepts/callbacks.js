// Callbacks in JavaScript
// Callback is a function passed into another function as an argument, which is then invoked inside the outer function to complete some kind of routine or action.

// Example of a callback function
function fetchData(callback) {  
    setTimeout(() => {
        const data = { name: "John", age: 30 };
        callback(data); // Invoking the callback function with data
    }, 2000);
}
function displayData(data) {
    console.log("Fetched Data:", data);
}
fetchData(displayData); // Passing displayData as a callback

// Another example with array methods
const numbers = [1, 2, 3, 4, 5];

// Problems 
// Problem 1: Create a funciton called greetUser that takes a username and a callback function. The function should call the callback with a greeting message that includes the username.

function greetUser(username, callback){
   const message = `Hello, ${username}! Welcome back.`;
   callback(message);
}

function showGreeting(message){
   console.log(message);
}
greetUser("Alice", showGreeting); // Output: Hello, Alice! Welcome back.

// with timeout
 
function greetUser(user, callback){
    let messege = `Hello ${user}!`

    setTimeout(()=>{
        callback(messege)
    }, 1000)
}

function greetingMsg(messege){
   console.log(messege)
}

greetUser("Alice", greetingMsg)


// Problem 2: create a fuction called calculate takes two numbers and a callback function then add the numbers and write call back one logs the sum and other one multiplies the sum by 2 and logs the result.

function calculate(a, b, callback){
  let result = a + b;
  callback(result)
}

function logFunc(result){
   console.log(result);
};

function multiplyFunc(result){
  let multiplied =  result * 2 ; 
  console.log(multiplied)
}

calculate(2, 4 ,logFunc)
calculate(2, 4 , multiplyFunc)

// Problem 3: given an array of numbers, call forEach on it and log every number, log the index of each number, and log the square of each number using callback functions.


const numbers1 = [2, 4, 6, 8];

numbers.forEach((number, index)=>{
  console.log("Number: " + number);
  console.log("Index: " + index)
  console.log("Square: " + number*number)
})


// Problem 4: create a function that takes an array of numbers and returns a new array with each number doubled and a new array with each number converted to a string using the map method and callback functions.
const nums = [1, 2, 3, 4, 5];

const doubled = nums.map((num) => num * 2);
console.log("Doubled: ", doubled);
const stringified = nums.map((num) => num.toString());
console.log("Stringified: ", stringified);

// Problem 5: create a function that takes and array of numbers and get numbers abouve a certain threshold using the filter method and a callback function.

const values = [10, 25, 30, 45, 50, 60];
const threshold = 18;

const filteredValues = values.filter((value) => value > threshold);
console.log("Filtered Values: ", filteredValues);


