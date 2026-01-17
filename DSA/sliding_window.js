// Sliding Window - Longest Substring Without Repeating Characters
// Time Complexity: O(n^2)

function longestSub(string) {
  let subStr = "";      
  let longestStr = "";  

  for (let i = 0; i < string.length; i++) {

    while (subStr.includes(string[i])) {
      subStr = subStr.slice(1);
    }

    subStr += string[i];

    if (subStr.length > longestStr.length) {
      longestStr = subStr;
    }
  }

  return longestStr;
}

// Test Cases
console.log(longestSub("dvdf")); // Output: "vdf"









// Longest Substring Without Repeating Characters O(n) Complexity
function longestSub(s) {
  const map = new Map();
  let left = 0;        
  let longestStr = ""; 

  for (let right = 0; right < s.length; right++) {
    const char = s[right];

    if (map.has(char)) {
      left = Math.max(left, map.get(char) + 1);
    }

    map.set(char, right);

    const currentWindow = s.substring(left, right + 1);

    if (currentWindow.length > longestStr.length) {
      longestStr = currentWindow;
    }
  }

  return longestStr;
}

// Test Case
console.log(longestSub("abcabcbb")); // Output: "abc"


//Explanation:
// 1. The function longestSub takes a string as input and initializes a Map to track characters and their indices.
// 2. Two pointers, left and right, define the current window of non-repeating characters.
// 3. As the right pointer iterates through the string, if a repeating character is found, the left pointer is updated to exclude the previous occurrence.
// 4. The current window is checked for its length, and if it's the longest found so far, it updates the longestStr variable.
// 5. Finally, the function returns the longest substring without repeating characters.