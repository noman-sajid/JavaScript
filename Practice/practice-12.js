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

/* 
