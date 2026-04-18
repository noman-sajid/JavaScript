// Problem 1: Given three numbers a, b, and c, write a program that determines and returns the largest among them.
function maxOf(a, b, c){
  if(a > b && a > c){
    return a;
  } else if(b > a && b > c){
    return b; 
  } else if(c > a && c > b ){
    return c; 
  }
    
}

// const maxOf = (a, b , c) => Math.max(a, b, c)

console.log(maxOf(23,53,4))


// Problem 2: Return true or false based on weather if the year is a leap year, 


function ifLeap(year){
  if (year % 400 === 0) return true;
  if (year % 100 === 0) return false;
  return year % 4 === 0;
}

// const ifLeap = (year) => (year % 4 === 0  && year % 100 !== 0) || year % 400 === 0 ; 


console.log(ifLeap(2023))

console.log(ifLeap(2024))



// Implement a function checkGrade that accepts a numerical score as an input and returns a descriptive string representing the student's performance and their corresponding grade letter.



function checkGrade(num){
    if(num >= 85){
      return "Distinction you got an A+";
    } else if(70 <= num && num < 85){
      return "Excellent you got an A";
    } else if(55 <= num && num < 70){
      return "Good you got a B"
    } else if(40 <= num && num < 55){
      return "You got a C "
    } else {
      return "You failed better luck next time"
    }
}

console.log(checkGrade(90))
console.log(checkGrade(85))
console.log(checkGrade(70))
console.log(checkGrade(55))
console.log(checkGrade(40))
console.log(checkGrade(35))


// Write a function that takes two numbers and an operator as input and performs the corresponding arithmetic operations 

function calculator(n , m , str ){
  switch (str) {
     case "+": 
     return n + m; 
     break; 
    case "-" :
     return n - m; 
     break;
    case "*" : 
     return n * m; 
     break;
    case "/" :
     return n / m;
     break; 
    default : 
     return "Since You did not provided any operator adding number" + n + m;
   }
}

let num1 = parseInt(prompt("Enter first number:"));
let num2 = parseInt(prompt("Enter second number:"));
let operator = prompt("Enter your operation(e.g +,-,*,/)");

console.log(`${num1} ${operator} ${num2} = ${calculator(num1, num2, operator)}`);


// You are provided with three sides write a funciton that checks if the provided sides make a triangle 



function ifTrinagle(a, b , c){
    if(a * b * c <= 0 ){
       return `Given sides do not form a triangle`
    } else if(a + b > c && b + c > a && a + c  > b){
         return `Given sides form a triangle`; 
    } else {
         return `Given sides do not form a triangle`; 
    }

}

let side_a = parseFloat(prompt("Enter A number"));
let side_b = parseFloat(prompt("Enter A number"));
let side_c = parseFloat(prompt("Enter A number"));

console.log(ifTrinagle(side_a, side_b, side_c))


//  Write a function that takes cost price and selling price as input and returns the profit or loss percentage.



function calculateResult(costPrice, sellingPrice){
   let percentage = parseInt(((sellingPrice - costPrice) / costPrice) * 100);
   if(percentage > 0){
     return `Congratulations, you lost ${percentage}% on this sale!`
   } else if(percentage < 0){
     return `Uh oo, you earned ${percentage}% profit on this sale!`
   } else {
     return `Ok, you earned ${percentage}% profit on this sale!`
   }
}


console.log(calculateResult(50, 100))
console.log(calculateResult(150, 100))
console.log(calculateResult(100, 100))


/**
 * PROBLEM 17: Electricity Bill Calculator (Level 2)
 * Goal: Calculate total bill using a prioritized threshold logic.
 * Logic:
 * - Units > 200: 50% surcharge on price per unit.
 * - Units > 100: 20% surcharge on price per unit.
 * - Otherwise: Base price per unit.
 * Output: Return a grammatically correct string with the total amount due.
 */



function calculateElectricityBill(unitsConsumed, pricePerUnit){
    let surcharge = 0;
    if(unitsConsumed > 200){
     surcharge = pricePerUnit * 1.50;
    } else if(unitsConsumed > 100){
      surcharge = pricePerUnit * 1.20;
    } 
      let price = unitsConsumed * pricePerUnit + surcharge;
      return `Total amount due:${price}` 
}


console.log(calculateElectricityBill(80, 100))
console.log(calculateElectricityBill(150, 100))
console.log(calculateElectricityBill(210, 100))