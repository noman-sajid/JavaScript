// Problem 1 : Write a program to reverse an array without using inbuilt methods

function reverseArr(arr){
    let reversedArr = [];
    for(let i = arr.length -1; i >=0  ; i--){
      reversedArr.push(arr[i])
    }
   
  return reversedArr;
}

let array = [1, 2 , 3 , 4]
let reversed = reverseArr(array)
console.log(reversed)

// Another approach without using push method

function reverseArrWithoutPush(arr){
    let reversedArr = new Array(arr.length);
    for(let i = 0; i < arr.length ; i++){
      reversedArr[arr.length - 1 - i] = arr[i];
    }
    return reversedArr;
}

let array2 = [5, 6, 7, 8];
let reversed2 = reverseArrWithoutPush(array2);
console.log(reversed2);

// A more concise way using ES6 features

function reverseArrES6(arr) {
    return arr.reduce((acc, curr) => [curr, ...acc], []);
}   
let array3 = [9, 10, 11, 12];
let reversed3 = reverseArrES6(array3);
console.log(reversed3);

// Problem 2 : Write a program to find the largest number in an array


function largestNumber(arr){
    let largest = arr[0];
    for(let i = 1; i < arr.length; i++){
        if(arr[i] > largest){
            largest = arr[i];
        }
    }
    return largest;
}

let arr = [1,2,3,4,5,6,7,8,9,10];
console.log(largestNumber(arr));

// Another approach using Math.max and spread operator

function largestNumberMathMax(arr){
    return Math.max(...arr);
}