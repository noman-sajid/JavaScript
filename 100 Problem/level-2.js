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