// Problem:
// Count how many truthy values are in an array.

function countTruthy(arr){
    if(arr.length === 0){
     return "Empty Array"
    }
    let count = 0;
  
    for(num of arr){
        if(num){
      count++
     }
   
    }
    return count;
}

countTruthy([0, 1, false, 2, "", 3, null, "hello"])


// Problem:
// Reverse the words in a given string.

function reverseWords(str){
    let reversed = "";

    let parts = str.split(" ");

    for(let i = parts.length - 1; i >= 0; i--){
        if(parts[i] !== ""){
            if(reversed !== "") reversed += " ";
            reversed += parts[i];
        }
    }

    return reversed;
}

console.log(reverseWords("  Hello   World  ")); // "World Hello"




// Problem:
// Find the first non-repeating character in a string.

function firstUnique(str){
    for(let i = 0; i < str.length; i++){
        let isUnique = true;

        for(let j = 0; j < str.length; j++){
            if( i !== j && str[i] === str[j]){
                isUnique = false;
                break;
            }
        }

        if(isUnique){
            return str[i];
        }
    }

    return null;
}

firstUnique("aabbccdeff")



// Using frequency object:

function firstUnique(str){
    let freq = {}
    for(let i = 0; i < str.length; i++){
       if(freq[str[i]]){
       freq[str[i]]++
       } else {
          freq[str[i]] = 1
       }
       
       
    }
   for(let i = 0; i < str.length; i++){
      if(freq[str[i]] === 1){
         return str[i];
         
      }
     
   }
  return null;
}

firstUnique("aabbccdeff")



// Two Sum Problem --Sorted Array
  

function twoSum(arr, target){
    let left = 0;
    let right = arr.length - 1; 
  while(left < right){
    console.log(left, right)
    const sum = arr[left] + arr[right]
    if(sum === target){
      return [left  , right ]
    } else if(sum < target){
      left++
    } else {
      right--
    }
  }
  return []
}

twoSum([2, 7, 11, 15], 9) // [0, 1]
console.log(twoSum([2, 7, 11, 15], 9)) // [0, 1]

// Two Sum Problem -- Unsorted Array

function twoSumUnsorted(arr, target){
    const map = new Map();
    for(let i = 0; i < arr.length; i++){
      const complement = target - arr[i];
        if(map.has(complement)){
            return [map.get(complement), i]
        }
        map.set(arr[i], i)
    }
    return []
}
console.log(twoSumUnsorted([3, 2, 4], 6)) // [1, 2]
console.log(twoSumUnsorted([2, 7, 11, 15], 9)) // [0, 1]