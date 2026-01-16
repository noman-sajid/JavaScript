// Map Object In JavaScript

// Creating a Map
const myMap = new Map();
// Setting key-value pairs
myMap.set('name', 'Alice');
myMap.set('age', 30);
myMap.set('city', 'New York');
// Getting values by key
console.log(myMap.get('name'));
console.log(myMap.get('age')); // 30
// Checking the size of the Map
console.log(myMap.size); // 3
// Checking if a key exists
console.log(myMap.has('city')); // true
console.log(myMap.has('country')); // false
// Deleting a key-value pair
myMap.delete('age');
console.log(myMap.has('age')); // false
// Iterating over Map entries
myMap.forEach((value, key) => {
    console.log(`${key}: ${value}`);
});
// Output:
// name: Alice
// city: New York

// Converting Map to Array
const mapToArray = Array.from(myMap);
console.log(mapToArray);
// Output: [ [ 'name', 'Alice' ], [ 'city', 'New York' ] ]

// Converting Array to Map
const arrayToMap = new Map([['country', 'USA'], ['continent', 'North America']]);
console.log(arrayToMap.get('country')); // USA

// Explanation:
// 1. A Map object is created using the Map constructor.
// 2. Key-value pairs are added using the set() method.
// 3. Values can be retrieved using the get() method.
// 4. The size property returns the number of key-value pairs in the Map.
// 5. The has() method checks for the existence of a key.
// 6. The delete() method removes a key-value pair from the Map.
// 7. The forEach() method allows iteration over the Map's entries.
// 8. Maps can be converted to arrays and vice versa using Array.from() and the Map constructor.


// Use cases of Map:
// 1. When you need to maintain the order of insertion of key-value pairs.
// 2. When keys are not strings or symbols (e.g., objects, functions).
// 3. When frequent additions and deletions of key-value pairs are required, as Maps are optimized for such operations.
// 4. When you need to store unique keys and want to avoid collisions that can occur in plain objects.


// Interview Question:
// Q: What are the differences between a Map and a plain JavaScript object?
// A: 1. Maps maintain the order of insertion, while objects do not.
//    2. Keys in Maps can be of any type, whereas in objects, keys are typically strings or symbols.
//    3. Maps have a size property that directly returns the number of entries, while objects require manual counting.
//    4. Maps are optimized for frequent additions and deletions of key-value pairs.

// Q: How do you iterate over a Map?
// A: You can use the forEach() method, for...of loops, or convert the Map to an array using Array.from() and then iterate.
// Q: Can you use objects as keys in a Map?
// A: Yes, Maps allow objects (and other non-primitive types) to be used as keys.
// Q: How do you convert a Map to an Array and vice versa?
// A: Use Array.from(myMap) to convert a Map to an Array, and use new Map(array) to convert an Array to a Map.