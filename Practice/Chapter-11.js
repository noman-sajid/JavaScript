// Chapter 11 Practice Set --Classes and Objects

// Problem 1: Create a JavaScript class to create a complex numbers create a constructor to set the real and imagenary part

// class Complex {
//     constructor(real, imagenary){
//         this.real = real;
//         this.imagenary = imagenary;
//     }

// }

// let a = new Complex(2, 4);
// let b = new Complex(6, 8);

// Problem 2 : Create a method add to add two complex numbers

  

class Complex {
    constructor(real, imagenary){
        this.real = real;
        this.imagenary = imagenary;
    }
    add(otherComplex){
        let realPart = this.real + otherComplex.real;
        let imagenaryPart = this.imagenary + otherComplex.imagenary;
        return new Complex(realPart, imagenaryPart)
    }
}

let a = new Complex(2, 4); // Output: 2 + 4i
let b = new Complex(6, 8); // Output: 6 + 8i
let c = a.add(b);
console.log(`Result: ${c.real} + ${c.imagenary}i`); // Result: 8 + 12i


// Problem 3: Create a class student from a class human and override a method to see changes.

class Human {
    constructor(name, job){
        this.name = name;
        this.job = job;
    }
    walk(){
        console.log(`human is walking`)
    }
}

class Student extends Human {
    constructor(name, job){
        super(name, job)
    }
    walk(){
       console.log(`Student is walking`)
    }

}

let s1 = new Student("Josh", 23)
s1.walk()


// Create a BankAccount class its  constructor takes ownerName and balance method deposit(amount) method withdraw(amount) (prevent withdrawal if balance is insufficient) method getBalance() that returns the balance

class BankAccount{
  constructor(ownerName, balance){
    this.ownerName = ownerName;
    this.balance = balance;
  }
  getBalance(){
   return this.balance;
  }
  deposit(amount){
     this.balance += amount
  }
  withdraw(amount){
     if(this.balance < amount){
       console.log("cannot withdraw! Insufficent funds!")
     } else {
       this.balance -= amount
     }
  }
}

const acc = new BankAccount("Alice", 1000);
acc.deposit(500);
acc.withdraw(300);
console.log(acc.getBalance()); // 1200


/* Create a TrainTicket class.

Requirements:

constructor takes passengerName and trainNo

method submit()

method cancel()

method updateTrain(newTrainNo)

Focus on using this correctly.*/

class TrainTicket{
    constructor(passengerName, trainNo){
        this.passengerName = passengerName;
        this.trainNo = trainNo;
    }
    submit(){
     console.log(`Ticket is submitted. Your train number is ${this.trainNo}`)
    }
    cancel(){
     console.log(`Ticket is cancelled`)
    }
    updateTrain(newTrainNo){
        this.trainNo = newTrainNo;
        console.log(`Train number is been updated! New number is ${newTrainNo}`)
    }
}

let ticket1 = new TrainTicket("Alice", 4859)
ticket1.submit();
ticket1.updateTrain(2087)


/*Problem 3: Employee & Manager

Create a parent class Employee.

Requirements:

constructor takes name and salary

getter salary that returns "Confidential" unless user role is "admin"

setter salary that only allows positive numbers

Create a child class Manager.

Additional requirements:

constructor takes name, salary, and department

override a method getRole() so it returns "Manager"*/


let currentUserRole = "user"; 

class Employee {
  constructor(name, salary) {
    this.name = name;
    this._salary = salary; 
  }

  get salary() {
    if (currentUserRole === "admin") {
      return this._salary;
    }
    return "Confidential";
  }

  set salary(value) {
    if (value > 0) {
      this._salary = value;
    } else {
      console.log("Error: Salary must be a positive number.");
    }
  }

  getRole() {
    return "Employee";
  }
}

class Manager extends Employee {
  constructor(name, salary, department) {
  
    super(name, salary);
    this.department = department;
  }


  getRole() {
    return "Manager";
  }
}



const mgr = new Manager("Bob", 80000, "Sales");

console.log(`Role: ${mgr.getRole()}`);

currentUserRole = "user";
console.log(`Salary (as user): ${mgr.salary}`);
currentUserRole = "admin";
console.log(`Salary (as admin): ${mgr.salary}`);

mgr.salary = 85000; 
mgr.salary = -100;  
console.log(`New Salary: ${mgr.salary}`); 


/* Create a Person class with:

name

job

Create a Student class that:

accepts name and subject

maps subject correctly using super()

adds a method study()*/

class Person {
  constructor(name, job) {
    this.name = name;
    this.job = job;
  }
}

class Student extends Person {
  constructor(name, subject) {
    super(name, "Student");
    this.subject = subject;
  }
  study(){
    console.log(`${this.name} is studying ${this.subject}`)
  }
}

let student1 = new Student("Phillip", "Math")
student1.study()



/* Create a Temperature class.

Requirements:

constructor takes celsius

private storage _celsius

getter celsius returns the value

setter celsius:

only allows values between -50 and 100

rejects invalid values with a message*/

class Temperature {
  constructor(celsius) {
    this._celsius = celsius;
  }

  get celsius() {
    return this._celsius;
  }

  set celsius(value) {
    
    if (value <= -50 || value >= 100) {
      console.log("Invalid Value!");
    } else {
      this._celsius = value;
    }
  }
}

const t = new Temperature(25);

t.celsius = 120;   // rejected
t.celsius = 30;    // accepted
console.log(t.celsius); // 30


/* Create a User class.

Requirements:

constructor takes birthYear

private storage _birthYear

getter age:

calculates age dynamically (no stored age)

no setter for age (read-only)

setter for birthYear:

rejects future years

Goal: getter as derived data, not stored data.*/

class User {
  constructor(birthYear) {
    this._birthYear = birthYear;
  }

  get age() {
    const currentYear = new Date().getFullYear();
    return currentYear - this._birthYear;
  }

  set birthYear(value) {
    const currentYear = new Date().getFullYear();
    if (value > currentYear) {
      console.log("Invalid birthYear! Please Enter a valid Year!");
    } else {
      this._birthYear = value;
    }
  }
}

const me = new User(1995);
console.log(me.age); // Returns your age (e.g., 30)
me.birthYear = 2030; // Logs "Invalid birthYear!"


/* Create a CreditCard class.

Requirements:

constructor takes number

private storage _number

getter number:

returns only last 4 digits (e.g. **** **** **** 1234)

setter number:

only allows 16-digit numbers

prevent direct access to full number*/

class creditCard{
   #number
   constructor(number){
      this.number = number;
   }
   get number(){
    let str = this.#number.toString();  
    let masked = str.split("")
                  .fill("*", 0, str.length - 4) 
                  .join("");
     return masked 
   }
   set number(value){
     let str = value.toString()
      if(str.length > 16 || str.length < 16){
        console.log("Number must be a 16 or less digit number")
      }else{
         this.#number = value.toString();
      }
   }
 
}


const myCard = new creditCard("1234567812345678");

// Test 1: The Getter
console.log(myCard.number); 

// Test 2: Privacy Check
console.log(myCard.number); 

// Test 3: Validation Check
myCard.number = "123"; 


