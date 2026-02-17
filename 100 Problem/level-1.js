// Problem: 1 Add two numbers

function addTwoNums(a, b){
    return a + b;
}

addTwoNums(1, 4) // 5 
addTwoNums(5, 6) // 11


// Problem: 2 Check even or odd

function checkEvenOdd(num){
    if(num % 2 === 0 ){
        return "Number is Even";
    } else{
        return "Number is Odd";
    }
}

console.log(checkEvenOdd(2))
console.log(checkEvenOdd(5))



// Problem: 3 Find max of two numbers

function findMax(a, b){
    if(a > b ){
   return a
    } else {
     return b 
    }
}

// const findMax = (a, b) => Math.max(a, b )

console.log(findMax(2 , 4 ))
console.log(findMax(6 , 4 ))


// Problem 4: Celsius to Fahrenheit

function celToFar(deg){
    return (deg * 9/5 ) + 32
}

//const celToFar = (deg) => (deg * 9/5) + 32;

console.log(celToFar(0)) // 32
console.log(celToFar(2)) // 35.6




// Problem 5 : Sum from 1 to N

function sumToNum(n){
    let sum = 0 ;
    for(let i = n; i >=1 ; i--){
        sum += i 
    }
    return sum; 
}

// function sumToNum(n){
//     if(n === 1){
//         return 1 
//     }
//     return n +  sumToNum(n - 1)
// }

console.log(sumToNum(4))
console.log(sumToNum(6))



// Problem 6: Given an integer number n, write a program that counts how many digits the number contains.

function countDigs(num){
    let str = num.toString()
    return str.length; 
}

//const countDigs = (num) => num.toString().length;

console.log(countDigs(234343434343))



// Problem 7: Given an integer number n, write a program that returns the number formed by reversing the order of its digits.

function reverseNum(num){
    let reversed = ""
    let str = num.toString();
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    }
    
    return parseInt(reversed)
}

// const reverseNum = (num) => num.toString().split("").reverse().join("")

console.log(reverseNum(123456))


// Problem 8:  Given an integer number n, write a program that returns the number formed by reversing the order of its digits.

function palindromeNum(num){
    let reversed = ""
    let str = num.toString();
    for(let i = str.length - 1; i >= 0; i--){
        reversed += str[i]
    }
    let reversedNum = parseInt(reversed)
    return num === reversedNum
}

//const palindromeNum = (num) => num === Number([...num.toString()].reverse().join(""));

console.log(palindromeNum(123456))
console.log(palindromeNum(111111))


// Problem 9:  Given a non-negative integer n, write a program that computes the factorial of n.

function findFactorial(n){
   let factorial = n; 
   for(let i = n - 1 ; i > 0; i-- ){
      factorial *= i;
   }
    return factorial; 
}


// function findFactorial(n){
//   if(n === 1){
//      return 1;
//   }
//   return n * findFactorial(n - 1)
// }

console.log(findFactorial(4))
console.log(findFactorial(3))
console.log(findFactorial(5))



// Given an integer number n, write a program that prints the multiplication table of n from 1 to 10

function printTable(n){

 for(let i = 0 ; i <= 10; i++){
  console.log(`${n} * ${i} = ${n * i}`)
 }
    
}

console.log(printTable(3))