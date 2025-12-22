// Imidiately Invoked Function Expressions
//It is a function that is born, takes a breath, does its job, and vanishes in the same moment 🫧

// An IIFE is a function used like a disposable cup ☕
// Fill it, use it, throw it away.

// let a = new Promise((resolve, reject) =>{
//     setTimeout(() => {
//         resolve(342)
//     }, 2000);
// })

// let b = await a; 
// let c = await a; 
// let d = await a; 

// console.log(a, b , c); // This will give us an Error becuse we can only use await in an async function 

// The proper way to do it would be 

let a = () => {
   return new Promise((resolve, reject ) => {
        setTimeout(() => {
            resolve("Promise Resolved")
        }, 2000);
    })
}

// let f = async () => {
//     let b = await a();
//     console.log(b);
//     let c = await a(); 
//     console.log(c);
//     let d = await a();
//     console.log(d);
// }

// f()

//instead of using it like this and we can use IIFE syntax to make it more explicit 


(async () => {
    let b = await a();
    console.log(b);
    let c = await a(); 
    console.log(c);
    let d = await a();
    console.log(d);
})()