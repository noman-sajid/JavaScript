// Static Methods in JavaScript 
// A static method belongs to the class itself, not to the objects created from it.

//syntax
class Employee {
  static companyPolicy() {
    console.log("Office opens at 9 AM");
  }
}

// Calling the static method
Employee.companyPolicy(); // Output: Office opens at 9 AM

const e = new Employee();
e.companyPolicy() // inorrect

// Differences between Instance Methods and Static Methods

// Instance methods → what a ticket can do

// Static methods → rules of the railway system


class RailwayTicket {
  constructor(name) {
    this.name = name;
  }

  travel() {
    console.log(this.name + " is traveling");
  }

  static generalRules() {
    console.log("Tickets are non-refundable");
  }
}

RailwayTicket.generalRules(); // ✅

// But
let alice = new RailwayTicket("Alice");
alice.generalRules(); // ❌ 

// Static methods cannot access instance properties or methods directly 

// Static methods + Inheritance

class Parent {
  static parentStaticMethod() {
    console.log("This is a static method from Parent class");
  }
}

class Child extends Parent {   }

Parent.parentStaticMethod(); // Output: This is a static method from Parent class
Child.parentStaticMethod();  // Output: This is a static method from Parent class


// Comparison Table
// | Feature     | Instance Method | Static Method   |
// | ----------- | --------------- | --------------- |
// | Called on   | object          | class           |
// | Uses `this` | object          | class itself    |
// | Needs `new` | yes             | no              |
// | Purpose     | behavior        | rules / helpers |

// One liner => Static methods represent behavior of the class itself, not of individual objects.

