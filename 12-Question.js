// Q12. What are Functions in JS? What are the types of function?

// A function in JavaScript is a block of reusable code that performs a specific task. Functions help you avoid repeating code and make your code organized and easier to maintain.

// Syntax:

function functionName(parameters) {
  // code to execute
  return value; // optional
}

// Example:

function greet(name) {
  return "Hello " + name;
}

console.log(greet("Ashutosh")); // Output: Hello Ashutosh

// Explanation:

// function greet(name) → defines a function named greet with a parameter name.

// return "Hello " + name; → returns a value.

// console.log(greet("Ashutosh")); → calls the function and prints the output.

// Types of Functions in JavaScript

// 1 Named Function

// A function with a name, which can be called anywhere after its declaration.

function add(a, b) {
  return a + b;
}
console.log(add(5, 3)); // Output: 8

// 2. Anonymous Function

// A function without a name. Usually stored in a variable.

const multiply = function(a, b) {
  return a * b;
};
console.log(multiply(4, 5)); // Output: 20

// 3. Arrow Function (ES6+)

// Shorter syntax for writing functions using =>.

const subtract = (a, b) => a - b;
console.log(subtract(10, 4)); // Output: 6

// Notes:

// No need for function keyword.

// Implicit return if single expression.

// Does not have its own this.


// 4️⃣ Self-Invoking Function / IIFE (Immediately Invoked Function Expression)

// A function that runs immediately after it's defined.

// (function() {
//   console.log("I run automatically!");
// })();

// Output:

// I run automatically!


// ---

// 5️⃣ Function with Default Parameters

// You can set default values for parameters.

// function greet(name = "Guest") {
//   return "Hello " + name;
// }

// console.log(greet()); // Output: Hello Guest
// console.log(greet("Ashutosh")); // Output: Hello Ashutosh


// ---

// ✅ Summary Table

// Function Type Example Syntax Notes

// Named Function function add(a,b){ return a+b; } Can be called after declaration
// Anonymous Function const multiply = function(a,b){...}; Stored in variable, no name
// Arrow Function const sub = (a,b)=>a-b; Short syntax, no own this
// IIFE (Self-Invoking) (function(){ ... })(); Executes immediately
// Function with Default Param function greet(name="Guest"){...} Parameters can have default values



// ---

// If you want, I can make this in a ready-to-copy VS Code format with proper comments and spacing so you can directly paste it in your notes.

// Do you want me to do that?