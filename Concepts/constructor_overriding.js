// Constructor Override in JavaScript
// This example demonstrates how to override a constructor function in JavaScript.

// Original constructor function
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    greet() {
        console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }
}
// Creating an instance of Person
const person1 = new Person('Alice', 30);
person1.greet(); // Output: Hello, my name is Alice and I am 30 years old.
// Overriding the constructor function
class Person {
    constructor(name, age, occupation) {
        this.name = name;
        this.age = age;
        this.occupation = occupation;
    }
    greet() {
        console.log(`Hello, my name is ${this.name}, I am ${this.age} years old and I work as a ${this.occupation}.`);
    }
}
// Creating an instance of the overridden Person
const person2 = new Person('Bob', 25, 'Engineer');
person2.greet(); // Output: Hello, my name is Bob, I am 25 years old and I work as a Engineer.

// In JavaScript, child classes can inherit from parent classes using extends.
// Child classes automatically gain access to parent properties and methods.
// They can add new methods or override existing ones by defining methods with the same name.
// Inside overridden methods, super.method() can be used to call the parent’s version.
// When a child class defines its own constructor, it must call super() to initialize the parent.
// If no constructor is defined, JavaScript automatically calls super() for you.


// Parent class
class RailwayTicket {
  constructor(name) {
    this.name = name;
  }

  travel() {
    console.log(this.name + " is traveling by train");
  }
}

// Child class
class FirstClassTicket extends RailwayTicket {
  constructor(name, seat) {
    super(name); // call parent constructor
    this.seat = seat;
  }

  // method overriding
  travel() {
    super.travel(); // optional: call parent method
    console.log("Seat:", this.seat, "- First Class experience");
  }
}

// Usage
const alice = new FirstClassTicket("Alice", "A1");
alice.travel();

// extends → creates a child class

// super(name) → initializes parent properties

// Same method name travel() → method overriding

// super.travel() → reuse parent logic

// Child adds extra behavior without breaking parent