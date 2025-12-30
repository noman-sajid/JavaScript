/* Task: Vehicle → ElectricCar

Vehicle:

constructor takes brand, speed

method accelerate()

increases speed by 10

method info()

returns brand + speed

ElectricCar:

adds battery (0–100)

override accelerate()

speed +20

battery −5

use super where it makes sense*/


class Vehicle {
  constructor(brand, speed) {
    this.brand = brand;
    this.speed = speed;
  }

  // Fixed spelling: accelerate
  accelerate() {
    this.speed += 10;
  }

  info() {
    return `Brand: ${this.brand}, Speed: ${this.speed}km/h`;
  }
}

class ElectricCar extends Vehicle {
  constructor(brand, speed, battery) {
    super(brand, speed);
  
    this.battery = battery; 
  }

  set battery(value) {
    if (value >= 0 && value <= 100) {
      this._battery = value;
    } else {
      console.log(`Invalid Input (${value})! Battery not updated.`);
      if (this._battery === undefined) this._battery = 100;
    }
  }

  get battery() {
    return this._battery;
  }

  accelerate() {
    this.speed += 20;
    this._battery -= 5;
  }

  info() {
    return `${super.info()}, Battery: ${this._battery}%`;
  }
}


const gasCar = new Vehicle("Toyota", 60);
gasCar.accelerate();
console.log("Gas Car:", gasCar.info()); 

const myTesla = new ElectricCar("Tesla", 0, 90);
myTesla.accelerate(); 
console.log("Electric Car:", myTesla.info());

const badCar = new ElectricCar("Bolt", 0, 500); 
console.log("Bad Input Car:", badCar.info());

/*  Task: LibraryBook

Requirements:

constructor takes title, author

private field #borrowed (boolean, starts false)

getter status

returns "Available" or "Borrowed"

method borrow()

only works if not already borrowed

method returnBook()*/


class LiberaryBook{
  #borrowed = false
  constructor(title, auther, borrowed){
    this.title = title; 
    this.auther = auther;
   
  }
  get status(){
      return this.#borrowed ? "Available" : "Borrowed";
  }
 borrow() {
    if (!this.#borrowed) {
      this.#borrowed = true;
    } else {
      console.log(`${this.title} is already borrowed.`);
    }
  }

returnBook() {
    this.#borrowed = false;
  }

}

const myBook = new LiberaryBook("The Great Gatsby", "F. Scott Fitzgerald");
console.log(myBook.status); // "Available"
myBook.borrow();
console.log(myBook.status); // "Borrowed"
myBook.returnBook();
console.log(myBook.status); // "Available"


/*Task: User → Admin

User:

constructor takes username, password

private field #password

getter password

returns "******"

method login(inputPassword)

checks password correctly

Admin (extends User):

constructor adds role

override login()

logs extra message if admin

static method isStrongPassword(pwd)

returns true if:

≥ 8 chars

contains number

contains symbol*/



class User {
  #password;

  constructor(username, password) {
    this.username = username;
    this.#password = password;
  }

  get password() {
    return "******";
  }

  login(inputPassword) {
    return this.#password === inputPassword;
  }
}

class Admin extends User {
  constructor(username, password, role) {
    super(username, password);
    this.role = role;
  }

  login(inputPassword) {
    const isValid = super.login(inputPassword);
    if (isValid) {
      console.log(`Admin login successful. Welcome, ${this.username}. Role: ${this.role}`);
    }
    return isValid;
  }

  static isStrongPassword(pwd) {
    if (!pwd || typeof pwd !== 'string') return false;

    const hasMinLength = pwd.length >= 8;
    
    const chars = pwd.split("");
    const hasNumber = chars.some(char => "0123456789".includes(char));
    const hasSymbol = chars.some(char => "!@#$%^&*()_+-=[]{}|;:,.<>?".includes(char));

    return hasMinLength && hasNumber && hasSymbol;
  }
}

// Example usage:
const adminUser = new Admin("boss_mode", "Secure123!", "SuperAdmin");

console.log(adminUser.password); // "******" (masked)
adminUser.login("Secure123!");   // Logs: "Admin login successful..."
console.log(Admin.isStrongPassword("weak"));       // false
console.log(Admin.isStrongPassword("StrongPass1!")); // true





// //Create a function that will 
// convert from Fahrenheit to Celsius

function convertTemp(n){

    n = (n - 32) / 1.8
    return n;
    
}

console.log(convertTemp(32));




// //Calculate the average of the 
// numbers in an array of numbers
//  Example array:
//  [1, 3, 9, 15, 90]
//  Expected output:
//  23.6


let givenArray =  [1, 3, 9, 15, 90];
let sum = 0;
function calcAvg(arr){
    let arrayLength = arr.length; 
 
    for(el of arr){
     sum += el
    }
 let avg = sum / arrayLength ;
    return avg;
    
}

console.log(calcAvg(givenArray))

