// Set Object In JavaScript

// Creating a Set
const mySet = new Set();
// Adding values to the Set
mySet.add(1);
mySet.add(2);
mySet.add(3);
mySet.add(2); // Duplicate values are ignored
// Checking the size of the Set
console.log(mySet.size); // 3
// Checking if a value exists
console.log(mySet.has(2));
console.log(mySet.has(4)); // false
// Deleting a value
mySet.delete(3);
console.log(mySet.has(3)); // false
// Iterating over Set values
mySet.forEach((value) => {
    console.log(value);
});
// Output:
// 1
// 2


// Converting Set to Array
const setToArray = Array.from(mySet);
console.log(setToArray); // [1, 2]


// Converting Array to Set
const arrayToSet = new Set([1, 2, 2, 3, 4]);
console.log(arrayToSet.has(3)); // true

// Explanation:
// 1. A Set object is created using the Set constructor.
// 2. Values are added using the add() method; duplicate values are ignored.
// 3. The size property returns the number of unique values in the Set.
// 4. The has() method checks for the existence of a value.
// 5. The delete() method removes a value from the Set.
// 6. The forEach() method allows iteration over the Set's values.
// 7. Sets can be converted to arrays and vice versa using Array.from() and the Set constructor.



// Use cases of Set:
// 1. When you need to store unique values and avoid duplicates.
// 2. When you need to perform operations like union, intersection, and difference on collections of data.
// 3. When you want to maintain a collection of items without any specific order.


// Interview Question:
// Q: What are the differences between a Set and a plain JavaScript array?
// A: 1. Sets store only unique values, while arrays can contain duplicates.
//    2. Sets provide faster lookups for existence checks using the has() method compared to arrays.
//    3. Sets do not maintain the order of insertion like arrays do.
//    4. Sets have built-in methods for common set operations, while arrays require custom implementations.
// Q: How can you convert a Set to an Array and vice versa?
// A: You can convert a Set to an Array using Array.from(set) or the spread operator [...set]. 
//    To convert an Array to a Set, you can use new Set(array).
// Q: How do you iterate over a Set?
// A: You can use the forEach() method, for...of loops, or convert the Set to an array using Array.from() and then iterate.