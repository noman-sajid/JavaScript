// Why JavaScript was created?
// JavaScript was created to make web pages interactive and dynamic. It allows developers to add functionality to websites, such as responding to user actions, manipulating the DOM (Document Object Model), and communicating with servers without reloading the page. JavaScript enhances the user experience by enabling features like form validation, animations, interactive maps, and real-time updates.
// Where is JavaScript used?
// JavaScript is primarily used in web development for both client-side and server-side programming. On the client side, it runs in web browsers to create interactive web pages. On the server side, JavaScript is used with platforms like Node.js to build scalable network applications. Additionally, JavaScript is used in mobile app development (e.g., React Native), desktop app development (e.g., Electron), game development, and even in IoT (Internet of Things) devices.
// What are the features of JavaScript?
// Some key features of JavaScript include:
// 1. Dynamic Typing: JavaScript is dynamically typed, meaning variable types are determined at runtime.
// 2. First-Class Functions: Functions in JavaScript are treated as first-class citizens, allowing them to be assigned to variables, passed as arguments, and returned from other functions.
// 3. Event-Driven Programming: JavaScript supports event-driven programming, enabling developers to create responsive applications that react to user actions.
// 4. Prototypal Inheritance: JavaScript uses prototypal inheritance, allowing objects to inherit properties and methods from other objects.
// 5. Asynchronous Programming: JavaScript supports asynchronous programming through callbacks, promises, and async/await, enabling non-blocking operations.
// 6. Cross-Platform: JavaScript can run on various platforms, including web browsers, servers, and mobile devices.
// 7. Rich Ecosystem: JavaScript has a vast ecosystem of libraries and frameworks (e.g., React, Angular, Vue.js) that facilitate development and enhance functionality.
// Overall, JavaScript is a versatile and powerful language that plays a crucial role in modern web development.


// Different ways to run JavaScript code in the browser:
// 1. Inline JavaScript: You can write JavaScript code directly within HTML elements using the "onclick", "onload", or other event attributes.
// Example:
// <button onclick="alert('Hello, World!')">Click Me</button>
// 2. Internal JavaScript: You can include JavaScript code within a <script> tag in the HTML document.
// Example:
// <script>
//   function greet() {
//     alert('Hello, World!');
//   }
// </script>
// 3. External JavaScript: You can create a separate JavaScript file with a .js extension and link it to your HTML document using the <script> tag with the "src" attribute.

//JavaScript console methods 
//What is console in JavaScript?
// The console in JavaScript is a built-in object that provides access to the browser's debugging console. It allows developers to log information, warnings, errors, and other messages during the execution of JavaScript code. The console is commonly used for debugging purposes, as it helps developers track the flow of their code and identify issues.

// Commonly used console methods in JavaScript:

let a = "Philomena"
console.log(a) // logs the value of a to the console

console.warn("This is a warning message") // displays a warning message in the console

console.error("This is an error message") // displays an error message in the console

console.info("This is an informational message") // displays an informational message in the console

console.object({name: "Alice", age: 25}) // displays an object in the console

console.table([{name: "Bob", age: 30}, {name: "Charlie", age: 35}]) // displays data in a tabular format in the console



// You can run JavaScript code in the browser using the browser's developer console. To open the console, you can usually press F12 or right-click on the webpage and select "Inspect" or "Inspect Element," then navigate to the "Console" tab. You can type JavaScript code directly into the console and execute it by pressing Enter.