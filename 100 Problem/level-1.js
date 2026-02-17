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

