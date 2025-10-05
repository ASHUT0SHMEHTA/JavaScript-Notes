// Let's break it down clearly and neatly.


// ---

// Q13. What are Arrow Functions in JavaScript?

// Definition:
// An arrow function is a compact syntax for writing functions in JavaScript using the => arrow. They were introduced in ES6 (ECMAScript 2015).

// Arrow functions make your code shorter and are often used in callback functions and functional programming patterns.


// ---

// Syntax

// // Regular function
// function sum(a, b) {
//   return a + b;
// }

// // Arrow function
// const sum = (a, b) => {
//   return a + b;
// };

// // If only one expression, can omit braces and return keyword
// const sum = (a, b) => a + b;


// ---

// Key Features / Uses of Arrow Functions

// 1. Shorter Syntax – Less typing than traditional function.


// 2. Implicit Return – Single-expression functions return automatically.


// 3. No Own this – Arrow functions do not have their own this, they inherit this from the parent scope.


// 4. Best for Callbacks – Useful for functions passed as arguments.




// ---

// Examples

// 1️⃣ Basic Arrow Function

// const greet = (name) => "Hello " + name;
// console.log(greet("Ashutosh")); // Output: Hello Ashutosh

// 2️⃣ No Parameters

// const sayHi = () => "Hi!";
// console.log(sayHi()); // Output: Hi!

// 3️⃣ Single Parameter (parentheses optional)

// const square = x => x * x;
// console.log(square(5)); // Output: 25

// 4️⃣ Multi-Line Arrow Function

// const multiply = (a, b) => {
//   const result = a * b;
//   return result;
// };
// console.log(multiply(4, 6)); // Output: 24

// 5️⃣ Using Arrow Functions in Callbacks

// const numbers = [1, 2, 3, 4];
// const doubled = numbers.map(n => n * 2);
// console.log(doubled); // Output: [2, 4, 6, 8]


// ---

// Summary Table

// Feature Example Notes

// Syntax Short (a,b)=>a+b Less typing, concise
// Implicit Return x=>x*x Returns automatically if one expression
// No Own this ()=>console.log(this) this comes from parent scope
// Good for Callbacks arr.map(n=>n*2) Cleaner than traditional functions



// ---

// Arrow functions are mainly used to write shorter functions and for cleaner callback code, especially in array methods like .map(), .filter(), .forEach().


// ---

// If you want, I can also make a VS Code ready snippet for Q13 just like I can do for Q12, so your notes are clean and easy to read.

// Do you want me to do that?