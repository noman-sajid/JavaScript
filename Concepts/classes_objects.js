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

// class RailwayTicket {
//     submit(){
//         alert("Ticket Submitted");
//     }
//     cancel(){
//         alert("Ticket Canceled");
//     }
// }

// let alice = new RailwayTicket();
// let bob = new RailwayTicket();

// alice.submit();
// bob.submit();
// alice.cancel();

// In this example, RailwayTicket is a class with two methods: submit and cancel. Alice and Bob are objects (instances) of the RailwayTicket class, and they can call the methods defined in the class.

//this keyword in context of classes and objects
// The this keyword in JavaScript refers to the object that is currently executing the code. In the context of classes and objects, this typically refers to the instance of the class that is calling a method or accessing a property.
// class RailwayTicket {
//      constructor(){
//         console.log("Constructor Called!")
//      }
//     submit(){
//         alert(this.name +  ": Your Form is submited");
//     }
//     cancel(){
//         alert(this.name +  ": Your Form is cancelled");
//     }
//     fill(name, train_no){
//       this.name = name;  
//       this.train_no = train_no;  
//     }
// }

// let alice = new RailwayTicket();
// let bob = new RailwayTicket();
// alice.fill("Alice", 121212);
// bob.fill("Bob", 1215415);
// alice.submit();
// bob.submit();
// alice.cancel();


//under the hood javaScript is doing:
  this = alice
  this.name = "Alice"
  alert(this.name +  ": Your Form is submited");


  // Intro to constructors 
  // defination: A constructor is a special method in a class that is automatically called when a new object is created, and is used to initialize the object.
  //Important points about constructors:
  //1. The constructor method is defined using the keyword constructor.
  //2. It can take parameters to initialize the object's properties.
  //3. If no constructor is defined, a default constructor is provided by JavaScript.
  //4. The constructor method is called automatically when a new instance of the class is created using the new keyword.

  //  wrong
alice.constructor("Alice");

// Example --correct
  class RailwayTicket {
     constructor(name, train_no, address){
        console.log("Constructor Called!")
         this.name = name;  
         this.train_no = train_no;  
         this.address = address; 
     }
    submit(){
        alert(this.name +  ": Your Form is submited");
    }
    cancel(){
        alert(this.name +  ": Your Form is cancelled");
    }
   
}

let alice = new RailwayTicket('Alice', 121212, "221 Bakers Street London");
let bob = new RailwayTicket('Bob', 1215415, '232 Veteran Street London');

alice.submit();
bob.submit();
alice.cancel();

//constructor is used to describe what an object should look like and also to initialize the object with some values when it is created.
// methods are used to define the behavior of the object, i.e., what actions the object can perform.

// adding new cunstructor
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    job(title) {
        this.title = title;
        console.log(`${this.name} is a ${this.title}.`);
    }
}

const person12 = new Person("Alice", 30);
person1.job("Engineer"); // Output: Alice is a Engineer.

// In this example, the Person class has a constructor that initializes the name and age properties, and a job method that sets the title property and logs a message. When we create a new instance of Person, we can call the job method to define the person's job title.

// In summary, constructors are special methods used to initialize objects when they are created, while methods define the actions that objects can perform.


// one liner! 
// Classes define the blueprint for creating objects.
// Objects are instances of classes.
// Classes can have constructors and methods.
// Constructors define what an object must have to exist.
// Methods define what an object can gain later.
// The this keyword refers to the current instance of the class.
// Together, classes and objects enable structured and reusable code in JavaScript.
// this keyword is like this === object itself inside class methods.
// this keyword inside constructor refers to the newly created object.
// this keyword could mean different things in different contexts, but inside class methods and constructors, it typically refers to the instance of the class.
