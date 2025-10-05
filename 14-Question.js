// Ashu, [10/5/2025 10:46 PM]
// Q14. What are Arrays in JS? How to get, add & remove elements from arrays?

// Ashu, [10/5/2025 10:47 PM]
// Let's break this down step by step so it’s easy to understand and use in VS Code or notes.


// ---

// Q14. What are Arrays in JavaScript?

// Definition:
// An array is a special type of variable that can store multiple values in a single variable. These values can be of any data type (numbers, strings, objects, etc.).

// Syntax:

// let arr = [element1, element2, element3];

// Example:

// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits); // Output: ["Apple", "Banana", "Mango"]

// Notes:

// Arrays are ordered: each element has an index starting from 0.

// Arrays are mutable: elements can be changed, added, or removed.



// ---

// 1️⃣ Accessing Elements in an Array

// Use the index of the element to get it.

// let fruits = ["Apple", "Banana", "Mango"];
// console.log(fruits[0]); // Output: Apple
// console.log(fruits[2]); // Output: Mango


// ---

// 2️⃣ Adding Elements to an Array

// a) At the End (push)

// let fruits = ["Apple", "Banana"];
// fruits.push("Mango"); 
// console.log(fruits); // Output: ["Apple", "Banana", "Mango"]

// b) At the Beginning (unshift)

// let fruits = ["Banana", "Mango"];
// fruits.unshift("Apple");
// console.log(fruits); // Output: ["Apple", "Banana", "Mango"]

// c) At a Specific Position (splice)

// let fruits = ["Apple", "Mango"];
// fruits.splice(1, 0, "Banana"); 
// console.log(fruits); // Output: ["Apple", "Banana", "Mango"]

// Explanation:

// splice(index, deleteCount, item1, item2…)

// index → position to start

// deleteCount → how many elements to remove

// item → element(s) to add



// ---

// 3️⃣ Removing Elements from an Array

// a) From the End (pop)

// let fruits = ["Apple", "Banana", "Mango"];
// fruits.pop();
// console.log(fruits); // Output: ["Apple", "Banana"]

// b) From the Beginning (shift)

// let fruits = ["Apple", "Banana", "Mango"];
// fruits.shift();
// console.log(fruits); // Output: ["Banana", "Mango"]

// c) From a Specific Position (splice)

// let fruits = ["Apple", "Banana", "Mango"];
// fruits.splice(1, 1); // Remove 1 element at index 1
// console.log(fruits); // Output: ["Apple", "Mango"]


// ---

// 4️⃣ Summary Table

// Operation Method / Syntax Example / Output

// Access element arr[index] fruits[0] → "Apple"
// Add at end push() fruits.push("Mango")
// Add at beginning unshift() fruits.unshift("Apple")
// Add at specific position splice(index,0,item) fruits.splice(1,0,"Banana")
// Remove from end pop() fruits.pop() → removes last element
// Remove from beginning shift() fruits.shift() → removes first element
// Remove from specific index splice(index, count) fruits.splice(1,1) → removes 1 element at index 1



// ---

// If you want, I can make a ready-to-copy VS Code version of Q14 with comments for each operation, just like I can do for Q12 and Q13.

// Do you want me to do that?