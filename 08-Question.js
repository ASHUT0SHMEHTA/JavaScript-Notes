// What are data types in JS?

// Sure! Let’s explain each JavaScript data type separately with a clear example for each.


// ---

// 1. Number

// Description: Represents numeric values, either integers or decimals.

// Example:


// let age = 25;       // Integer
// let price = 99.99;  // Decimal
// console.log(age);   // 25
// console.log(price); // 99.99


// ---

// 2. String

// Description: Represents text, enclosed in single quotes ' ', double quotes " ", or backticks   (template literals).

// Example:


// let name = "Ashutosh";
// let greeting = Hello, ${name}!;
// console.log(name);      // Ashutosh
// console.log(greeting);  // Hello, Ashutosh!


// ---

// 3. Boolean

// Description: Represents true or false values.

// Example:


// let isActive = true;
// let isLoggedIn = false;
// console.log(isActive);    // true
// console.log(isLoggedIn);  // false


// ---

// 4. Undefined

// Description: A variable that is declared but not initialized automatically has the value undefined.

// Example:


// let score;
// console.log(score); // undefined


// ---

// 5. Null

// Description: Represents no value or empty value.

// Example:


// let data = null;
// console.log(data); // null


// ---

// 6. Symbol (ES6)

// Description: Represents a unique identifier. Useful for creating unique keys in objects.

// Example:


// let id = Symbol("id");
// let anotherId = Symbol("id");
// console.log(id === anotherId); // false (symbols are always unique)


// ---

// 7. BigInt

// Description: Represents very large integers beyond the limit of Number type.

// Example:


// let bigNumber = 123456789012345678901234567890n;
// console.log(bigNumber); // 123456789012345678901234567890n


// ---

// 8. Object

// Description: Stores key-value pairs; used for structured data.

// Example:


// let person = {name: "Ashutosh", age: 20};
// console.log(person.name); // Ashutosh
// console.log(person.age);  // 20


// ---

// 9. Array

// Description: Stores ordered collection of values.

// Example:


// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits[0]); // Apple
// console.log(fruits[2]); // Mango


// ---

// 10. Function

// Description: Stores reusable code blocks.

// Example:


// function greet() {
//     console.log("Hello!");
// }
// greet(); // Hello!


// ---

// 11. Date

// Description: Stores date and time.

// Example:


// let today = new Date();
// console.log(today); // Current date and time


// ---

// ✅ Key Points to Remember

// Primitive data types: Number, String, Boolean, Undefined, Null, Symbol, BigInt → stored by value

// Reference (non-primitive) data types: Object, Array, Function, Date → stored by reference



// ---

// If you want, I can also make a simple table with all data types, category (primitive vs non-primitive), and examples for easy notes and memorization.

// Do you want me to make that table?