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
