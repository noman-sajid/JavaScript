// Arrays in JavaScript 
// An array is a data structure that allows you to store multiple values in a single variable.
//In JavaScript, arrays are ordered collections of elements — each element has an index (a number representing its position in the array).

//Example:
let fruits = ["Apple", "Banana", "Cherry"];

// Here:

// "Apple" is at index 0

// "Banana" is at index 1

// "Cherry" is at index 2

// Arrays help when you need to group related data together instead of using separate variables for each item.

// Without arrays:

let fruit1 = "Apple";
let fruit2 = "Banana";
let fruit3 = "Cherry";

// With arrays:

let fruits1 = ["Apple", "Banana", "Cherry"];

// You can loop through them, modify them, or use built-in methods to perform complex operations easily.

// Data Type of Arrays in JavaScript

// Here’s something that confuses many beginners:

// In JavaScript, arrays are technically objects.

typeof [1,2,3]; // "object"


// But arrays are a special kind of object designed for storing ordered data.
// They inherit from Array.prototype, which gives them access to many useful methods (like .push(), .map(), .filter(), etc.).

// Creating Arrays

// You can create arrays in JavaScript using:
// 1. Array Literals (most common way)
let numbers = [1, 2, 3, 4, 5];
// 2. Array Constructor
let moreNumbers = new Array(6, 7, 8, 9, 10);
// 3. Array.of() method
let evenMoreNumbers = Array.of(11, 12, 13, 14, 15);
console.log(numbers);
console.log(moreNumbers);
console.log(evenMoreNumbers);
// Accessing Array Elements
console.log(fruits[0]); // "Apple"
// Modify Array Elements 
fruits[0] = "Mango";
console.log(fruits); // ["Mango", "Banana", "Cherry"]
// Array Properties and Methods
 //Adding Removing
console.log("Length of fruits array:", fruits.length); // 3
fruits.push("Orange"); // Adds "Orange" to the end
console.log(fruits); // ["Mango", "Banana", "Cherry", "Orange"]
fruits.pop(); // Removes the last element
console.log(fruits); // ["Mango", "Banana", "Cherry"]
fruits.shift(); // Removes the first element
console.log(fruits); // ["Banana", "Cherry"]
fruits.unshift("Pineapple"); // Adds "Pineapple" to the start
console.log(fruits); // ["Pineapple", "Banana", "Cherry"]
let citrus = fruits.slice(0, 2); // Creates a new array with the first two elements
console.log(citrus); // ["Pineapple", "Banana"]
//Searching/Checking //these methods are used to check/search different elements
//includes(value) method
fruits.includes("Mango"); // false
fruits.includes("Banana"); // true 
//Includes method checks whether a specific value exists in the array and returns true or false accordingly. It is case-sensitive. Includes method is useful when you want to verify the presence of an element in an array without needing to know its index.
//indexOf(value) method
fruits.indexOf("Cherry"); // 2 
//indexOf method returns the first index at which a given element can be found in the array, or -1 if it is not present. It is also case-sensitive. IndexOf method is useful when you need to find the position of an element within an array for further operations like updating or removing it.


// lastIndexOf(value) method
fruits.push("Banana"); 
fruits.lastIndexOf("Banana"); // 3
//lastIndexOf method returns the last index at which a given element can be found in the array, or -1 if it is not present. It is useful when you want to find the position of the last occurrence of an element in an array that may contain duplicates.
// Example:
let colors = ["red", "blue", "green", "blue"];
colors.lastIndexOf("blue"); // 3

//Transforming / Iterating
//Iterating
fruits.forEach(function(item, index){
    console.log(index, item);
});
// Output:
// 0 Pineapple
// 1 Banana
// 2 Cherry
// The forEach method executes a provided function once for each array element, allowing you to easily iterate over the array and perform actions with each item.
//Mapping
let upperCaseFruits = fruits.map(function(item){
    return item.toUpperCase();
});
console.log(upperCaseFruits); // ["PINEAPPLE", "BANANA", "CHERRY"]
//The map method creates a new array populated with the results of calling a provided function on every element in the calling array. It is useful for transforming data in an array without modifying the original array.
//Filtering 
let longNamedFruits = fruits.filter(function(item){
    return item.length > 5;
}
);
console.log(longNamedFruits); // ["Pineapple"]
//The filter method creates a new array with all elements that pass the test implemented by the provided function. It is useful for extracting a subset of elements from an array based on specific criteria.

//Reducing
let totalLength = fruits.reduce(function(accumulator, item){
    return accumulator + item.length;
}, 0);
//The reduce method executes a reducer function on each element of the array, resulting in a single output value. It is useful for aggregating data, such as summing values or concatenating strings.
console.log(totalLength); // 18 (lengths of "Pineapple", "Banana", "Cherry" added together)
//toString method
fruits.toString(); // "Pineapple,Banana,Cherry"
// Converts an array into a string saperated by a coma 
console.log(fruits.toString());
//join(separator) method
fruits.join(" - "); // "Pineapple - Banana - Cherry"
// Joins all elements of an array into a string with a specified separator
console.log(fruits.join(" - "));
//sort() method
fruits.sort(); // Sorts the array elements in alphabetical order
console.log(fruits); // ["Banana", "Cherry", "Pineapple"]
//You could also pass a compare function to sort in a custom order

//Example
fruits.sort(function(a, b){
    return b.localeCompare(a); // Sorts in descending order
});
console.log(fruits); // ["Pineapple", "Cherry", "Banana"]
//reverse() method
fruits.reverse(); // Reverses the order of the array elements
console.log(fruits); // ["Banana", "Cherry", "Pineapple"]
//The reverse method reverses the order of the elements in an array in place. It is useful when you need to invert the order of items, such as displaying a list in reverse chronological order.
//splice(start, deleteCount, item1, item2, ...) method
fruits.splice(1, 1, "Grapes", "Mango"); 
//At index 1, removes 1 element and adds "Grapes" and "Mango"
console.log(fruits); // ["Banana", "Grapes", "Mango", "Pineapple"]
//The splice method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It is useful for modifying arrays dynamically based on specific conditions or user actions.
// Example:
let numbers1 = [1, 2, 3, 4, 5];
numbers1.splice(2, 2, 6, 7);
console.log(numbers1); // [1, 2, 6, 7, 5]

// find() method, some() method, every() method
let foundFruit = fruits.find(function(item){
    return item.startsWith("M");
});
console.log(foundFruit); // "Mango"
let hasLongNamedFruit = fruits.some(function(item){
    return item.length > 6;
});
console.log(hasLongNamedFruit); // true
let allFruitsHaveA = fruits.every(function(item){
    return item.includes("a") || item.includes("A");
});
console.log(allFruitsHaveA); // true
//The find method returns the value of the first element in the array that satisfies the provided testing function. It is useful for locating a specific item based on certain criteria.
//The some method tests whether at least one element in the array passes the test implemented by the provided function. It is useful for checking if any items meet a condition.
//The every method tests whether all elements in the array pass the test implemented by the provided function. It is useful for validating that all items conform to specific requirements.

//flat() method
let nestedArray = [1, 2, [3, 4], [5, [6, 7]]];
let flattenedArray = nestedArray.flat(2);
console.log(flattenedArray); // [1, 2, 3, 4, 5, 6, 7]
//The flat method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. It is useful for simplifying nested arrays into a single-level array for easier processing.


// Why we need arrays 
//Store multiple values efficiently.

// Allow iteration and easy manipulation of data.

// Are the foundation for data structures like stacks, queues, and matrices.

// Enable batch operations like filtering, mapping, sorting.

// Make code more organized and scalable.


// Interview Questions on Arrays
// Concepual
// 1. What is an array in JavaScript?
// 2. What is the datatype of an array in JavaScript? >> Object
// 3. What is the difference between and Array and an Object in JavaScript? 
// >> Arrays are ordered lists of data. While Objects are collections of unordered data.


// Coding / Logical

// Reverse an array without using .reverse().

// Find the maximum number in an array.

// Remove duplicates from an array.

// Flatten a nested array.

// Find the sum of all elements using .reduce().

// Explain the difference between forEach(), map(), filter(), and reduce().



//Advanced / Trick Questions

// What happens when you use delete arr[1]?

// Difference between slice() and splice().

// How does JavaScript sort numbers with sort()?

// What’s the difference between shallow and deep copy of an array?

// How do you copy an array? (e.g. spread operator [...arr], Array.from(arr))

// For loops with arrays
// Simple for loop
let arr = [1, 2, 3, 4, 5];

for(let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
}

// For Each 

arr.forEach((element) =>{
   console.log(element * element )
})

// Array.from 

let name = "Alice";
let nArr =  Array.from(name)
console.log(nArr); // ['A', 'l', 'i', 'c', 'e']

// Output each character in the string
nArr.forEach((char) => {
    console.log(char);
});
// Output:
// A
// l
// i
// c
// e
// The Array.from() method creates a new, shallow-copied Array instance from an array-like or iterable object. In this case, it converts the string "Alice" into an array of its individual characters.

// For ...of loop
for (let value of arr) {
    console.log(value);
}
// The for...of statement creates a loop iterating over iterable objects, including arrays. It allows you to loop through the values of an array directly without needing to access them via their index.

// For ...in loop
for (let index in arr) {
    console.log(`Index: ${index}, Value: ${arr[index]}`);
}
// The for...in statement iterates over all enumerable properties of an object. When used with arrays, it loops through the array indices (keys), allowing you to access both the index and the corresponding value.

// Note: While for...in can be used with arrays, it is generally recommended to use for...of or traditional for loops for array iteration to avoid unexpected behavior, especially if the array has additional properties added to it.