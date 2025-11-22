// Asynchronous Timing Practice Practice

// 1. Use setTimeout to log "Hello after 3 seconds" after a delay of 3 seconds.

setTimeout(() =>{
    console.log(("Say hello after 2 seconds"));

}, 2000);

// 2. Log Start and then End after 2 seconds and finally Done Immediately after first log

console.log("start") 
setTimeout(() => {
    console.log("End after 2 sec")
}, 2000);
console.log("Done");

// 3. Print numbers 1 to 5 in the console one second apart

let count = 1; 
    const intervalID = setInterval(() => {
        console.log(count);
        count++;
        if(count > 5 ){
             clearInterval(intervalID)
        }
    }, 1000)

// Start a counter with setInterval counting 1–10, But stop it manually when it reaches 3 using clearInterval.



const intervalStop = setInterval(() => {
    console.log(count);

    if (count === 3) {
        clearInterval(intervalStop);
    }
     count++;

    if(count > 10){
        clearInterval(intervalStop)
    }
}, 2000);

//

function countDown(num) {

    console.log(num);

    if (num <= 1) { 

        return;
    }

    let nextNum = num - 1;

    setTimeout(() => {
        countDown(nextNum); 
    }, 1000); 

}
countDown(5);



// Write a program to show different alerts when different buttons are clicked

function alertOne() {
    alert("Button 1 was clicked!");
}

function alertTwo() {
    alert("Button 2 was clicked!");
}

function alertThree() {
    alert("Button 3 was clicked!");
}

document.getElementById("btn1").addEventListener("click", alertOne);
document.getElementById("btn2").addEventListener("click", alertTwo);
document.getElementById("btn3").addEventListener("click", alertThree);
