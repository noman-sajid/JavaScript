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

