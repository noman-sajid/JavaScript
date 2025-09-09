// Problem 1: Create a variable of type string and add a number to it 
let a = "aabbcc";
let b = 6;
let c = "3";
console.log(a + b); //string
console.log(c + b); //string
console.log(b + c); //string
console.log(c - b) //number

typeof (a + b); //string
typeof (c + b); //string
typeof (b + c); //string
typeof(c - b) //number

// Problem 2 create a const object in javascript can you change it to hold a number later
  const obj = {
    name : "joe",
    age : 20
  }
 
  console.log(obj)

  //obj = 3 // we cannot do this as obj is a constant

  //but we can change the properties of the object
 
    obj.name = "jerry";//dotnotation
    obj["age"] = 30;//bracket notation
    obj["hobby"] = "cricket";//adding a new property to the object
    // datatype of property value can be anything and assigned dynamically that means if a key is a string it can be changed to a number or boolean or object or array
    obj.age = "thirty"
   
  console.log(obj) //Yes we certainly can change the values within the object 