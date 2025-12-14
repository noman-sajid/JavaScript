// Prototypes in JavaScript
// Prototypes are a fundamental feature of JavaScript that allows objects to inherit properties and methods from other objects. Every JavaScript object has a prototype, which is another object from which it can inherit properties.

// Creating a prototype

let  a = {
    name : "ali"
}

console.log(a.toString)

// We can do .toString becuse it is in its prototype. prototype is kind of one object borrwoing properties from others objects, a 'secret' link of one JavaScript object to other objects 


const parent = { greet: () => console.log("hello")};

const child = Object.create(parent);

console.log(child.greet()); // Output: "hello"

// In this example, the child object inherits the greet method from the parent object through the prototype chain.

//difference between protype and __proto__

// The prototype is the object that is used as a template for creating new objects. It is accessible via the constructor function's prototype property.

// The __proto__ is a property of an object that points to the prototype object from which it inherits properties. It is part of the object's internal [[Prototype]] chain.

// __proto__ is considered deprecated and it's recommended to use Object.getPrototypeOf() and Object.setPrototypeOf() instead for better performance and clarity.

// Example of __proto__

const first = {a:1};

const second = Object.create(first);

console.log(second.__proto__ === first); // true

//more simple problem with three functions

const grandParent = { lastName: "Smith" };

const parent1 = Object.create(grandParent);
parent1.firstName = "John";
const child1 = Object.create(parent1);
child1.age = 10;
// Accessing properties through the prototype chain
console.log(child1.firstName); // Output: "John"
console.log(child1.lastName); // Output: "Smith"

//flow of above example 
// child1 --> parent1 --> grandParent --> Object.prototype --> null

// In this example, child1 inherits the firstName property from parent1 and the lastName property from grandParent through the prototype chain.

