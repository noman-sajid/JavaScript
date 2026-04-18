/**
 * PROBLEM 21: Print N Numbers (Level 3)
 * Goal: Use a loop to print numbers from 1 to n.
 * Logic:
 * - Initialise a counter at 1.
 * - Loop until the counter reaches n.
 * - Increment the counter by 1 in each iteration.
 */


function printNumbers(num){
   for(let i = 0 ; i < num; i++){
     console.log(i)
   }
}

console.log(printNumbers(10))