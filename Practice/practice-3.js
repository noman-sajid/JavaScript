//Write a function to print the marks of students in an object using a for looop

let studentMarks = {
    Alice: 85,
    Bob: 92,
    Charlie: 78,
    David: 90
};

function printMarks(marks){
    for (let student in marks){
        console.log(`The marks of the ${student} are :${marks[student]}`)
    }
}

printMarks(studentMarks)


//Problem 2 : Write a program to print "try again" until the user enters the correct number

let correctNumber = 7;
let userInput;  

do{
    userInput = parseInt(prompt("Enter a number between 1 and 10: "));
    if(userInput !== correctNumber){
        console.log("Try again!");
    }
}while(userInput !== correctNumber);

console.log("Congratulations! You entered the correct number.");


//Problem 3: Write a program to print the sum of first n natural numbers using while loop

let n = parseInt(prompt("Enter a natural number: "));
let sum = 0;
let i = 1;
while(i <= n){
    sum += i;
    i++;
}

console.log(`The sum of first ${n} natural numbers is: ${sum}`);

//Problem 4 : Write a program to calculate the mean of n numbers

function calculateMean(arr) {
  let sum = 0; 
  for (let number of arr) {
    sum += number;
  }
  const mean = sum / arr.length;
  console.log("Mean:", mean);
  return mean;
}

const numbers = [2, 2, 3, 1, 3];
calculateMean(numbers);

function calculateMeanFromUser() {
  const input = prompt("Enter numbers separated by spaces:");
  const arr = input.split(" ").map(Number);

  let sum = 0;
  for (let number of arr) {
    sum += number;
  }

  const mean = sum / arr.length;
  console.log("Mean:", mean);
}

calculateMeanFromUser();

// Problem 5: Count Even and Odd numbers in an array

function calculateEvenOdd(arr){
    let even = 0;
    let odd = 0;
    for(let i = 0; i < arr.length; i++){
        if(arr[i] % 2 === 0){
            even += 1;
        } else {
            odd += 1
        }
    }
    return `Even Numbers: ${even}. Odd Numbers: ${odd}`
}

let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(calculateEvenOdd(array))

