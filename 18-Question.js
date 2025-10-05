// Ashu, [10/5/2025 10:53 PM]
// Q18. What is Error Handling in JS?

// Ashu, [10/5/2025 10:54 PM]
// Let's explain Error Handling in JavaScript clearly and step by step.


// ---

// Q18. What is Error Handling in JavaScript?

// Definition:
// Error handling in JavaScript is a way to detect, catch, and manage runtime errors in your code so that your program doesn’t crash unexpectedly.

// Helps make programs more robust and user-friendly.

// JavaScript provides try...catch...finally and throw statements for error handling.



// ---

// 1️⃣ Types of Errors in JavaScript

// Type of Error Description Example

// Syntax Error Code violates JavaScript rules let x = ;
// Reference Error Variable/function not defined console.log(a);
// Type Error Operation on wrong data type "5" - 2; (ok), "5" * "a";
// Range Error Value out of allowed range let arr = new Array(-1);
// Eval Error Error in eval() function eval("alert('Hi'")



// ---

// 2️⃣ try...catch Statement

// try block: Contains the code that might throw an error.

// catch block: Executes if an error occurs in try.


// try {
//   let result = 10 / 0; // No actual error in JS, but example
//   console.log(result);
// } catch (error) {
//   console.log("An error occurred: " + error);
// }


// ---

// 3️⃣ finally Block (Optional)

// Executes always, whether an error occurs or not.

// Usually used for cleanup operations.


// try {
//   let data = JSON.parse("{ invalid json }");
// } catch (error) {
//   console.log("Error caught: " + error.message);
// } finally {
//   console.log("Execution completed.");
// }

// Output:

// Error caught: Unexpected token i in JSON at position 2
// Execution completed.


// ---

// 4️⃣ Throwing Custom Errors

// You can throw your own errors using throw.


// function checkAge(age) {
//   if (age < 18) {
//     throw new Error("Age must be 18 or older");
//   }
//   return "Access granted";
// }

// try {
//   console.log(checkAge(15));
// } catch (error) {
//   console.log(error.message);
// }

// Output:

// Age must be 18 or older


// ---

// 5️⃣ Summary Table

// Feature Description Example

// try Code that might throw an error try { ... }
// catch Code to handle error catch(error) { ... }
// finally Executes always, even if error occurs finally { ... }
// throw Throw custom error throw new Error("Message")
// Error Types Syntax, Reference, Type, Range, Eval JS built-in error types



// ---

// In short:

// Error Handling = Catch and manage errors in your code

// try → catch → finally → throw are the main tools.

// Makes your code robust and prevents crashes.



// ---

// I can make a VS Code-ready snippet for Q18 with examples and comments, so you can copy it into your notes directly.

// Do you want me to do that?