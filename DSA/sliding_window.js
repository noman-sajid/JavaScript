// Sliding Window - Longest Substring Without Repeating Characters O(n^2) Complexity

function longestSub(string){
  let subStr = "";
  let subStrArr = []
  let maxLength = 0;

  for(let i = 0; i < string.length; i++){
   while(subStr.includes(string[i])){
   subStr =   subStr.slice(1)
    }
   
  subStr += (string[i])

   if(maxLength < subStr.length){
   maxLength = subStr.length;
   }

   
  }
  
  return maxLength;
}


console.log(longestSub("dvdf"))
console.log(longestSub("pwwkew"))





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
console.log(longestSub("abcabcbb"));

/*
Output:
"abc"
*/
