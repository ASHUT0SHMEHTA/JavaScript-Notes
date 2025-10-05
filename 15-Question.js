// Let's break this down clearly and simply.


// ---

// Q15. What are Objects in JavaScript?

// Definition:
// An object in JavaScript is a collection of key-value pairs (also called properties). Objects are used to store related data and functionality together in a structured way.

// Key Points:

// Keys are also called properties or names.

// Values can be of any data type (numbers, strings, arrays, functions, other objects).

// Objects are unordered (unlike arrays).



// ---

// Syntax

// let objectName = {
//   key1: value1,
//   key2: value2,
//   key3: value3
// };


// ---

// Example

// let person = {
//   name: "Ashutosh",
//   age: 25,
//   isStudent: true
// };

// console.log(person.name); // Output: Ashutosh
// console.log(person.age);  // Output: 25
// console.log(person.isStudent); // Output: true


// ---

// 1️⃣ Accessing Object Properties

// a) Dot Notation

// console.log(person.name); // Ashutosh

// b) Bracket Notation

// console.log(person["age"]); // 25

// Use bracket notation when property names have spaces or special characters:

// let person = {
//   "full name": "Ashutosh Mehta"
// };
// console.log(person["full name"]); // Ashutosh Mehta


// ---

// 2️⃣ Adding / Modifying Properties

// // Add a new property
// person.city = "Delhi";

// // Modify existing property
// person.age = 26;

// console.log(person);
// // Output: {name: "Ashutosh", age: 26, isStudent: true, city: "Delhi"}


// ---

// 3️⃣ Removing Properties

// delete person.isStudent;
// console.log(person);
// // Output: {name: "Ashutosh", age: 26, city: "Delhi"}


// ---

// 4️⃣ Objects with Functions (Methods)

// let person = {
//   name: "Ashutosh",
//   greet: function() {
//     return "Hello " + this.name;
//   }
// };

// console.log(person.greet()); // Output: Hello Ashutosh

// Note:

// this refers to the current object.



// ---

// 5️⃣ Summary Table

// Feature Syntax / Example Notes

// Create Object let obj = {key:value} Store related data
// Access Property obj.key or obj["key"] Dot or bracket notation
// Add/Modify Property obj.newKey = value Can add new properties or update values
// Remove Property delete obj.key Deletes property
// Method (Function in Object) obj.method = function(){...} Functions inside objects are called methods



// ---

// Objects are fundamental in JS because almost everything in JavaScript (like arrays, functions, dates) is an object or behaves like an object.


// ---

// If you want, I can make a VS Code ready snippet for Q15 with examples and comments for easy learning and direct use.

// Do you want me to do that?