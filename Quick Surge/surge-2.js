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


