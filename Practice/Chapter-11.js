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