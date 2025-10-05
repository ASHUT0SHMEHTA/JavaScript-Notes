// Let's break this down clearly and simply.


// ---

// Q19. What is JSON?

// Definition:
// JSON stands for JavaScript Object Notation.
// It is a lightweight format for storing and exchanging data between a server and a web application.

// JSON is text-based and language-independent, but it is easy to read and write for humans and easy to parse for machines.

// It is widely used in APIs to send and receive data.



// ---

// 1️⃣ JSON Syntax

// Data is in key-value pairs.

// Keys must be strings (double quotes " ").

// Values can be:

// String "Hello"

// Number 123

// Boolean true / false

// Array [1, 2, 3]

// Object {"key": "value"}

// null



// {
//   "name": "Ashutosh",
//   "age": 25,
//   "isStudent": true,
//   "hobbies": ["Reading", "Coding"],
//   "address": {
//     "city": "Delhi",
//     "zip": "110001"
//   }
// }


// ---

// 2️⃣ JSON vs JavaScript Object

// Feature JSON JavaScript Object

// Key quotes Required ("key") Optional (key)
// Value types String, number, boolean, null, array, object Any JS type (functions allowed)
// Used for Data exchange Data manipulation in JS
// Syntax Text format JS code



// ---

// 3️⃣ Converting JSON in JavaScript

// a) JSON String → JavaScript Object (JSON.parse)

// let jsonData = '{"name":"Ashutosh","age":25}';
// let obj = JSON.parse(jsonData);

// console.log(obj.name); // Output: Ashutosh
// console.log(obj.age);  // Output: 25

// b) JavaScript Object → JSON String (JSON.stringify)

// let person = {
//   name: "Ashutosh",
//   age: 25
// };

// let jsonString = JSON.stringify(person);
// console.log(jsonString); // Output: {"name":"Ashutosh","age":25}


// ---

// 4️⃣ Why JSON is Used

// 1. Lightweight data format → reduces bandwidth.


// 2. Easy to read/write for humans.


// 3. Easy to parse by JavaScript and other languages.


// 4. Standard format for communication between server and client.




// ---

// 5️⃣ Summary Table

// Feature Example / Notes

// Format Text-based, key-value pairs
// Data types String, Number, Boolean, Array, Object, null
// Parse JSON JSON.parse(jsonString) → JS Object
// Convert to JSON JSON.stringify(jsObject) → JSON String
// Use Server ↔ Client data exchange



// ---

// In short:

// JSON = data exchange format

// Works everywhere, lightweight, and easy to use in JS.



// ---

// I can also make a VS Code-ready snippet for Q19 with examples and comments so you can directly paste it in your notes.

// Do you want me to do that?