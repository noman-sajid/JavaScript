// Getter and Setter in JavaScript
// Getters and Setters are special methods that allow you to get and set the values of an object's properties.
// They provide a way to control access to the properties and can include additional logic when getting or setting a value.

// Book Defination --Simple
// Getters and setters allow you to control how a property is read or written, without changing how it is accessed.

// Basic Syntax 
class Employee {
  constructor(name) {
    this._name = name;
  }

  get name() {
    return this._name;
  }

  set name(value) {
    if (value === "") {
      console.log("Name cannot be empty");
    } else {
      this._name = value;
      
    }
  }
}

let e = new Employee("Alice");


console.log(e.name);   // getter
e.name = "Bob";        // setter



// Example with Validation

class Employee {
  constructor(name, role) {
    this.name = name;
    this._accessLevel = role; // private storage
  }

  // Instance method
  login() {
    console.log(`${this.name} logged in.`);
  }

  logout() {
    console.log(`${this.name} logged out.`);
  }

  // Getter: controls what access level others can see
  get accessLevel() {
    if (currentUser.role === "admin") {
      return this._accessLevel;
    } else {
      return "Restricted";
    }
  }

  // Setter: validates role before storing
  set accessLevel(role) {
    const validRoles = ["staff", "manager", "admin"];
    if (validRoles.includes(role)) {
      this._accessLevel = role;
    } else {
      console.log("Invalid role. Access denied!");
    }
  }

  // Static method: general company policy
  static companyPolicy() {
    console.log("All employees must check in at 9 AM.");
  }
}

// Child class: Programmer inherits from Employee
class Programmer extends Employee {
  constructor(name, role, language) {
    super(name, role); // initialize parent
    this.language = language;
  }

  // Method overriding
  login() {
    super.login(); // call parent method
    console.log(`${this.name} is ready to code in ${this.language}.`);
  }

  requestCoffee(cups) {
    console.log(`${this.name} requested ${cups} cup(s) of coffee.`);
  }
}

// Simulation
let currentUser = { role: "staff" };
const alice = new Programmer("Alice", "manager", "JavaScript");

alice.login();
alice.requestCoffee(2);
console.log("Access Level:", alice.accessLevel); // filtered by getter

alice.accessLevel = "admin"; // setter validates
console.log("Access Level:", alice.accessLevel);

Employee.companyPolicy(); // static method


/*
Alice logged in.
Alice is ready to code in JavaScript.
Alice requested 2 cup(s) of coffee.
Access Level: Restricted
Access Level: admin
All employees must check in at 9 AM.
*/

// In this Example , we have an Employee class with getter and setter for accessLevel, controlling how the property is accessed and modified. The Programmer class extends Employee, overriding the login method to add additional behavior. The static method companyPolicy provides general information about company rules. The example also demonstrates access control based on the current user's role.


// One Liners Notes 
/*
Class → blueprint for creating objects.

Object → a specific instance created from a class.

Constructor → function that sets up initial properties when an object is created.

Instance method → a function that belongs to an object.

Static method → a function that belongs to the class itself, not objects.

Getter → controls what is returned when a property is accessed; acts like a filter.

Setter → controls what is allowed when a property is updated; validates or transforms input.

Method overriding → redefining a parent method in a child class; optionally calls super for parent behavior.

super() → calls the parent constructor; necessary if child defines its own constructor.

_property → convention for private storage used inside getters/setters to avoid recursion.

Access control with getter/setter → allows filtering, masking, or enforcing rules based on context.
*/