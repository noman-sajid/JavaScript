//Introduction to loops 
//In JavaScript loops are a way to minimize/automate semi-automate to be precise repetitive tasks
//There are mainly 5 types of loops in JavaScript
//1. for loop
//2. while loop
//3. do while loop
//4. for in loop
//5. for of loop

// 1. for loop

let a = []
for(let i = 0; i < 10 ; i++){
    console.log(i)
    a.push(i)
}
console.log(a)
// Why do we need for loop?
// 1. To automate repetitive tasks
// 2. To minimize code redundancy
// Common Use Cases of for loop
// 1. Iterating over arrays
// 2. Performing a task a specific number of times
// Time Complexity: O(n) where n is the number of iterations






// 2. while loop

let j = 0
while(j < 10){
    console.log(j)
    j++
}

// 3. do while loop

let k = 0
do{
    console.log(k)
    k++
}while(k < 10)

// Difference between while loop and do while loop is that in while loop the condition is checked first then the code is executed
// In do while loop the code is executed first then the condition is checked
// // So in case of do while loop the code will be executed at least once even if the condition is false
// Example:

let m = 10
do{
    console.log(m)
    m++
}while(m < 10) // Here the code will be executed once even though the condition is false

// Common Use Cases of while and do while loop and when to use which one
// 1. Use while loop when you want to execute a block of code only when a certain condition is true
// 2. Use do while loop when you want to execute a block of code at least once regardless of the condition
// Why do we need to execute a block of code at least once?
// Example: Taking user input until they provide a valid input
// Example of while loop

let password = ""
while(password !== "secret"){
    password = prompt("Enter the password: ")
} // Here the code will keep asking for the password until the correct password is entered

// Example of do while loop
let input = ""
do{
    input = prompt("Enter something (type 'exit' to quit): ")
    console.log("You entered: " + input)
}while(input !== "exit") // Here the code will execute at least once and keep executing until the user types 'exit'

// In a way we could say in normal loops code is executed based on condition whereas in do while loop code is executed based on user interaction in other words before the conditon is checked
//Time Complexity: O(n) where n is the number of iterations

// 4. for in loop
 
let obj = {
    name: "John",
    age: 30,
    city: "New York"
}

for(let key in obj){
    console.log(key + ": " + obj[key])
}

// Why do we need for in loop?
// 1. To iterate over the properties of an object
// 2. To access the keys and values of an object easily
// Common Use Cases of for in loop
// 1. When you want to iterate over the properties of an object
// 2. When you want to access the keys and values of an object easily
// Time Complexity: O(n) where n is the number of properties in the object

// 5. for of loop
 
let array = ["apple", "banana", "cherry"]

for(let value of array){
    console.log(value)
}
// Why do we need for of loop?
// 1. To iterate over the values of an iterable object (like arrays, strings, maps, sets etc.)
// 2. To access the values of an iterable object easily
// Common Use Cases of for of loop
// 1. When you want to iterate over the values of an array
// 2. When you want to access the characters of a string
// Time Complexity: O(n) where n is the number of elements in the iterable object


