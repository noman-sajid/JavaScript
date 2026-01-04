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


