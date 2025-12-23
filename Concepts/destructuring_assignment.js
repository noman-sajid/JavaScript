// Destructuring assignment allows you to unpack values from arrays or properties from objects into distinct variables.
// Here are some examples of how to use destructuring assignment in JavaScript:

// 1. Array Destructuring   
const rgb = [255, 200, 0];
const [red, green, blue] = rgb;
console.log(red);   // Output: 255
console.log(green); // Output: 200
console.log(blue);  // Output: 0
// You can also skip elements
const [r, , b] = rgb;
console.log(r); // Output: 255
console.log(b); // Output: 0
// 2. Object Destructuring
const person = {
    name: 'Alice',
    age: 30,
    city: 'New York'
};
const { name, age } = person;
console.log(name); // Output: Alice
console.log(age);  // Output: 30
// You can also assign to new variable names
const { city: hometown } = person;
console.log(hometown); // Output: New York
// 3. Nested Destructuring
const user = {
    id: 1,
    profile: {
        username: 'alice123',
        email: 'alice@example.com'
    }
};  
const { profile: { username, email } } = user;
console.log(username); // Output: alice123
console.log(email);    // Output: alice@example.com
// 4. Default Values
const [x = 10, y = 20] = [5];
console.log(x); // Output: 5
console.log(y); // Output: 20
const { a = 1, c = 2 } = { a: 5 };
console.log(a); // Output: 5
console.log(c); // Output: 2

// Spread Operator with Destructuring
const numbers = [1, 2, 3, 4, 5];
const [first, second, ...rest] = numbers;
console.log(first); // Output: 1
console.log(second); // Output: 2
console.log(rest); // Output: [3, 4, 5]
// Explanation: The spread operator (...) collects the remaining elements into an array.
// These examples demonstrate the versatility and convenience of destructuring assignment in JavaScript.


// Note: Destructuring assignment is a powerful feature that can make your code cleaner and more readable.
// Interview Questions Related to Destructuring Assignment:
// 1. What is destructuring assignment in JavaScript?
// 2. How do you perform array destructuring?
// 3. How do you perform object destructuring?
// 4. Can you provide an example of nested destructuring?
// 5. How do you set default values in destructuring assignment?
// 6. What is the spread operator and how does it work with destructuring?

// Answers to Interview Questions:
// 1. Destructuring assignment is a syntax that allows you to unpack values from arrays or properties from objects into distinct variables.
// 2. Array destructuring is done using square brackets. For example: const [a, b] = [1, 2];
// 3. Object destructuring is done using curly braces. For example: const {name, age} = {name: 'Alice', age: 30};
// 4. Nested destructuring allows you to unpack values from nested objects or arrays. For example: const { profile: { username } } = user;
// 5. Default values can be set by assigning a value in the destructuring pattern. For example: const [x = 10] = [];
// 6. The spread operator (...) collects the remaining elements into an array when used in destructuring. For example: const [first, ...rest] = [1, 2, 3];

// One -liner Summary: Destructuring assignment in JavaScript allows for unpacking values from arrays or objects into distinct variables, enhancing code readability and conciseness.

//Difference One -liner: Destructuring assignment simplifies the extraction of values from arrays and objects, making code cleaner and more efficient.
// Spread Operator One-liner: The spread operator (...) in destructuring collects remaining elements into an array, facilitating flexible variable assignment.