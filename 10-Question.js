// Here’s a clear and structured explanation of conditional statements in JavaScript:


// ---

// Q10. What are the types of conditional statements in JS?

// Conditional statements in JavaScript are used to perform different actions based on different conditions.


// ---

// 1. if Statement

// Executes a block of code only if a condition is true.
// Syntax:


// if (condition) {
//     // code to execute if condition is true
// }

// Example:

// let age = 18;
// if (age >= 18) {
//     console.log("You are an adult.");
// }
// // Output: You are an adult.


// ---

// 2. if...else Statement

// Executes one block if the condition is true and another block if false.
// Syntax:


// if (condition) {
//     // code if true
// } else {
//     // code if false
// }

// Example:

// let age = 16;
// if (age >= 18) {
//     console.log("You are an adult.");
// } else {
//     console.log("You are a minor.");
// }
// // Output: You are a minor.


// ---

// 3. if...else if...else Statement

// Tests multiple conditions sequentially.
// Syntax:


// if (condition1) {
//     // code1
// } else if (condition2) {
//     // code2
// } else {
//     // code3
// }

// Example:

// let marks = 75;
// if (marks >= 90) {
//     console.log("Grade A");
// } else if (marks >= 75) {
//     console.log("Grade B");
// } else if (marks >= 50) {
//     console.log("Grade C");
// } else {
//     console.log("Fail");
// }
// // Output: Grade B


// ---

// 4. switch Statement

// Compares a value against multiple cases and executes matching block.

// Often cleaner than multiple if...else if for exact matches.
// Syntax:


// switch(expression) {
//     case value1:
//         // code
//         break;
//     case value2:
//         // code
//         break;
//     default:
//         // code if no case matches
// }

// Example:

// let day = 3;
// switch(day) {
//     case 1:
//         console.log("Monday");
//         break;
//     case 2:
//         console.log("Tuesday");
//         break;
//     case 3:
//         console.log("Wednesday");
//         break;
//     default:
//         console.log("Invalid day");
// }
// // Output: Wednesday


// ---

// ✅ Summary Table

// Conditional Type Use Case Example

// if Single condition if (age >= 18)
// if...else Two alternatives if (age >= 18) ... else ...
// if...else if...else Multiple conditions if (marks >= 90) ... else if ... else
// switch Multiple exact matches switch(day) { case 1: ... break; ...}



// ---

// If you want, I can also make a small visual diagram showing all conditional statements and their flow so it’s easier to remember for notes.

// Do you want me to make that diagram?