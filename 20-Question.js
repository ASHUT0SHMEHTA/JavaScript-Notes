// Let's break it down clearly and step by step.


// ---

// Q20. What is Asynchronous Programming in JavaScript?

// Definition:
// Asynchronous programming in JavaScript is a way to execute tasks without blocking the main thread.

// In other words, JS can start a task now, move on to the next task, and come back to the first task when it’s done.

// This is especially useful for tasks that take time, like fetching data from a server, reading files, or waiting for timers.



// ---

// 1️⃣ Synchronous vs Asynchronous

// Feature Synchronous Asynchronous

// Execution order One by one, blocking Non-blocking, can run in background
// Waits for task? Yes No
// Example console.log("A"); console.log("B"); setTimeout(() => console.log("B"), 1000);


// // Synchronous
// console.log("Start");
// console.log("End");
// // Output:
// // Start
// // End

// // Asynchronous
// console.log("Start");
// setTimeout(() => console.log("Middle"), 1000);
// console.log("End");
// // Output:
// // Start
// // End
// // Middle (after 1 second)


// ---

// 2️⃣ Ways to Do Asynchronous Programming in JS

// a) Callbacks

// Functions passed as arguments to be executed later.


// function greet(name, callback) {
//   console.log("Hello " + name);
//   callback();
// }

// greet("Ashutosh", function() {
//   console.log("Callback executed!");
// });


// ---

// b) Promises

// Represents a value that may be available now, later, or never.


// let promise = new Promise((resolve, reject) => {
//   let success = true;
//   if (success) {
//     resolve("Task completed");
//   } else {
//     reject("Task failed");
//   }
// });

// promise
//   .then(result => console.log(result))  // Output: Task completed
//   .catch(error => console.log(error));


// ---

// c) async / await (ES7+)

// Allows writing asynchronous code like synchronous code.

// Makes code more readable than callbacks or .then() chains.


// function getData() {
//   return new Promise(resolve => {
//     setTimeout(() => resolve("Data received"), 1000);
//   });
// }

// async function fetchData() {
//   console.log("Start fetching");
//   let data = await getData();
//   console.log(data); // Output after 1 second: Data received
//   console.log("Done fetching");
// }

// fetchData();


// ---

// 3️⃣ Uses of Asynchronous Programming

// 1. API calls / Fetching data without freezing UI.


// 2. Timers / Delays (setTimeout, setInterval).


// 3. Reading/writing files in Node.js.


// 4. Handling multiple tasks at the same time efficiently.




// ---

// 4️⃣ Summary Table

// Feature Example Notes

// Callback func(callback) Oldest async method
// Promise new Promise((res, rej)=>{}) Handles success/failure
// async/await await promise Cleaner syntax, works with promises
// Use Fetch data, timers, files, multiple tasks Prevents blocking main thread



// ---

// In short:

// Asynchronous programming = run long tasks without stopping other code

// Makes JS non-blocking and efficient for I/O operations and APIs.



// ---

// I can also make a VS Code-ready snippet for Q20 with examples and comments so you can copy it to your notes directly.

// Do you want me to do that?