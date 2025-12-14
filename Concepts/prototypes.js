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