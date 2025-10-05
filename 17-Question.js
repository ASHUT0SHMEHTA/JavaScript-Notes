// Ashu, [10/5/2025 10:51 PM]
// Q17. What is Hoisting in JavaScript?

// Ashu, [10/5/2025 10:52 PM]
// Let's explain Hoisting clearly and with examples.


// ---

// Q17. What is Hoisting in JavaScript?

// Definition:
// Hoisting is a JavaScript behavior where variable and function declarations are moved to the top of their containing scope during the compilation phase, before the code executes.

// > Important: Only declarations are hoisted, not initializations/assignments.




// ---

// 1️⃣ Hoisting with var

// Variables declared with var are hoisted and initialized with undefined.


// console.log(a); // Output: undefined
// var a = 5;
// console.log(a); // Output: 5

// Explanation:

// During hoisting, JS internally does:


// var a;        // Declaration hoisted to top
// console.log(a); // undefined
// a = 5;        // Initialization stays in place
// console.log(a); // 5


// ---

// 2️⃣ Hoisting with let and const

// Variables declared with let and const are hoisted but not initialized.

// Accessing them before declaration causes a ReferenceError.


// console.log(b); // ReferenceError: Cannot access 'b' before initialization
// let b = 10;


// ---

// 3️⃣ Hoisting with Functions

// a) Function Declaration (Hoisted fully)

// Can be called before declaration.


// greet(); // Output: Hello!

// function greet() {
//   console.log("Hello!");
// }

// b) Function Expression (with var, let, const)

// Treated like a variable.

// Cannot call before declaration if using let/const or function expression.


// greetExpr(); // Error: Cannot access 'greetExpr' before initialization

// const greetExpr = function() {
//   console.log("Hi!");
// };


// ---

// 4️⃣ Summary Table

// Feature Behavior with Hoisting Example Output

// var variable Hoisted + initialized as undefined console.log(a) → undefined
// let / const variable Hoisted but not initialized (TDZ) console.log(b) → ReferenceError
// Function declaration Fully hoisted, can call before declaration greet() → "Hello!"
// Function expression Treated as variable, cannot call early greetExpr() → Error


// > TDZ (Temporal Dead Zone): The time between hoisting and initialization for let/const where the variable cannot be accessed.




// ---

// In short:

// Hoisting = JS moves declarations to top

// var → hoisted with undefined

// let/const → hoisted, but cannot use before declaration

// Function declarations → fully hoisted

// Function expressions → behave like variables



// ---

// I can also make a VS Code-ready snippet for Q17 with comments and examples for easy notes.

// Do you want me to do that?