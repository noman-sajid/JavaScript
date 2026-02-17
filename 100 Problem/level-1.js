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
