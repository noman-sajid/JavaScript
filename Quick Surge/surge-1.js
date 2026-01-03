/*
Problem:
Given a string, return the reversed version of it.

Example:
"hello" → "olleh"
*/

function reverseString(str) {
  let reversed = "";

  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }

  return reversed;
}

// Test
console.log(reverseString("JavaScript")); // "tpircSavaJ"
console.log(reverseString("hello")); // "olleh"


/*
Problem:
Count the number of vowels in a string.
*/

function countVowels(str) {
  let vowels = "aeiou";
  let count = 0;
  let lowered = str.toLowerCase();

  for (let char of lowered) {
    if (vowels.includes(char)) {
      count++;
    }
  }

  return count;
}

console.log(countVowels("JavaScript")); // 3


/*
Problem:
Find the largest number in an array.
*/

function findLargest(arr) {
  if (arr.length === 0) return "Empty Array";

  let largest = arr[0];

  for (let num of arr) {
    if (num > largest) {
      largest = num;
    }
  }

  return largest;
}

console.log(findLargest([3, 7, 2, 9, 1])); // 9



/*
Problem:
Return the sum of all numbers in an array.
*/

function sumOfArray(arr) {
  let sum = 0;

  for (let num of arr) {
    sum += num;
  }

  return sum;
}

console.log(sumOfArray([1, 2, 3, 4])); // 10


/*
Problem:
Determine whether a number is even or odd.
*/

function evenOrOdd(num) {
  return num % 2 === 0 ? "Even" : "Odd";
}

console.log(evenOrOdd(10)); // Even
console.log(evenOrOdd(7)); // Odd



/*
Problem:
Count how many positive numbers are in an array.
*/

function countPositives(arr) {
  let count = 0;

  for (let num of arr) {
    if (num > 0) count++;
  }

  return count;
}

console.log(countPositives([-1, 2, -3, 4])); // 2
