// Inheritance in JavaScript
// Inheritance is a fundamental concept in object-oriented programming that allows a class (called a subclass or derived class) to inherit properties and methods from another class (called a superclass or base class). This promotes code reusability and establishes a hierarchical relationship between classes.

// Example of Inheritance 
class Ticket {
    constructor(name, train_no) {
        this.name = name;
        this.train_no = train_no;
    }
    submit() {
        alert(this.name + ": Your Form is submitted for train number " + this.train_no);
    }
    cancel() {
        alert(this.name + ": Your Form is cancelled for train number " + this.train_no);
    }
}

class RailwayTicket extends Ticket {
    constructor(name, train_no, seat_no) {
        super(name, train_no); // Call the constructor of the parent class
        this.seat_no = seat_no; // Additional property for RailwayTicket
    }
    displaySeat() {
        alert(this.name + ": Your seat number is " + this.seat_no);
    }
}

let alice = new RailwayTicket("Alice", 121212, "A1");
let bob = new RailwayTicket("Bob", 1215415, "B2");

alice.submit(); // Inherited method from Ticket
bob.submit(); // Inherited method from Ticket
alice.displaySeat(); // Method from RailwayTicket
bob.displaySeat(); // Method from RailwayTicket
// In this example, we have a base class Ticket with methods submit and cancel. The RailwayTicket class extends the Ticket class, inheriting its properties and methods while also adding its own property seat_no and method displaySeat. Alice and Bob are instances of the RailwayTicket class and can use both inherited and their own methods.
