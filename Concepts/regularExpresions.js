// Regular Expressions in JavaScript
// A regular expression is a sequence of characters that forms a search pattern.
// They are used for pattern matching within strings.

let regex = /very/g
 
let person = "He is a very very nice and very awsome person!"

console.log(person.replace(regex, "Very"));
