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
