// Classes and Objects in JavaScript
// Classes are a template for creating objects. They encapsulate data with code to work on that data. Objects are instances of classes.
// Creating a class

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}

// Creating an object (instance) of the class
const person1 = new Person("Alice", 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.

// In simple terms, a class is like a blueprint for creating objects, and an object is an individual instance of that blueprint. 
// if we think of it in terms of an analogy a class is like a train ticket template, and an object is like a specific ticket issued based on that template.

// Object Defination
// An object is a collection of properties, and a property is an association between a name (or key) and a value. The value of a property can be a function, in which case the property is known as a method.

// Creating an object using object literal syntax
const car = {
    make: "Toyota",
    model: "Camry",
    year: 2020,
    start: function() {
        console.log("Car started");
    }
};

// simple example 

class RailwayTicket {
    submit(){
        alert("Ticket Submitted");
    }
    cancel(){
        alert("Ticket Canceled");
    }
}

let alice = new RailwayTicket();
let bob = new RailwayTicket();

alice.submit();
bob.submit();
alice.cancel();

// In this example, RailwayTicket is a class with two methods: submit and cancel. Alice and Bob are objects (instances) of the RailwayTicket class, and they can call the methods defined in the class.
