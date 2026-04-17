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