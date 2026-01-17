// Sliding Window - Longest Substring Without Repeating Characters
// Given a string, find the length of the longest substring without repeating characters.
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