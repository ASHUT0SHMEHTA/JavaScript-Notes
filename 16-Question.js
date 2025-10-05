// Ashu, [10/5/2025 10:50 PM]
// Q16. What is Scope in JavaScript?

// Ashu, [10/5/2025 10:50 PM]
// Let's break it down clearly and in a way you can keep in your notes.


// ---

// Q16. What is Scope in JavaScript?

// Definition:
// Scope in JavaScript defines where a variable or function is accessible in your code.
// In other words, scope determines the visibility and lifetime of variables and functions.


// ---

// Types of Scope in JavaScript

// 1️⃣ Global Scope

// Variables declared outside any function or block have global scope.

// Accessible anywhere in the code.


// let globalVar = "I am global";

// function showVar() {
//   console.log(globalVar); // Accessible here
// }

// showVar();
// console.log(globalVar); // Accessible here too


// ---

// 2️⃣ Function Scope / Local Scope

// Variables declared inside a function are local to that function.

// Cannot be accessed outside the function.


// function myFunction() {
//   let localVar = "I am local";
//   console.log(localVar); // Accessible here
// }

// myFunction();
// console.log(localVar); // Error: localVar is not defined


// ---

// 3️⃣ Block Scope (ES6+)

// Variables declared with let or const inside { } (like in if, for, while) are block-scoped.

// They are accessible only inside that block.


// if (true) {
//   let blockVar = "I am block scoped";
//   const anotherVar = 10;
//   console.log(blockVar); // Accessible here
// }
// console.log(blockVar); // Error: blockVar is not defined

// > Note: var does not have block scope, it is function-scoped.



// if (true) {
//   var varVar = "I am function scoped";
// }
// console.log(varVar); // Works because var is function/global scoped


// ---

// 4️⃣ Lexical / Static Scope

// JavaScript uses lexical scoping, which means:
// A function can access variables from the scope where it was defined, not where it is called.


// let name = "Global";

// function outer() {
//   let name = "Outer";

//   function inner() {
//     console.log(name); // Inner function can access 'Outer' variable
//   }

//   inner();
// }

// outer(); // Output: Outer


// ---

// Summary Table

// Scope Type Declared With Accessible Where Example Output

// Global Scope var, let, const Anywhere in the code globalVar = 10 accessible anywhere
// Function / Local var, let, const Inside the function only localVar only inside myFunction
// Block Scope let, const Inside the block {} only blockVar only inside if block
// Lexical / Static Any Access variables from parent scope Inner function can access outer variable



// ---

// In short:

// Scope = accessibility of variables

// Global: accessible everywhere

// Function: accessible only inside function

// Block: accessible only inside block {}



// ---

// I can also make a VS Code-ready snippet for Q16 with examples and comments for easy copy-paste into your notes.

// Do you want me to do that?