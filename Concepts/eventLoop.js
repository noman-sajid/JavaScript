// Event loop in JavaScript 

console.log("Start");

setTimeout(() => {
    console.log("Timeout 1");
}, 0);
setTimeout(() => {
    console.log("Timeout 2");
}, 100);

Promise.resolve().then(() => {
    console.log("Promise 1");
}).then(() => {
    console.log("Promise 2");
});
console.log("End");

// Expected Output:
// Start
// End
// Promise 1
// Promise 2
// Timeout 1
// Timeout 2

// Explanation:
// 1. "Start" is logged first.
// 2. Two setTimeout callbacks are scheduled: one with 0ms delay and another with 100ms delay.
// 3. A resolved Promise is created, which schedules its .then() callbacks to be executed in the microtask queue.
// 4. "End" is logged next.
// 5. The microtask queue is processed next, logging "Promise 1" and then "Promise 2".
// 6. Finally, the event loop processes the macrotask queue, executing the setTimeout callbacks in order: "Timeout 1" followed by "Timeout 2".


