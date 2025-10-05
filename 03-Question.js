// Q3. What are Variables? Difference between var, let, const

// Definition:

// A variable is a container used to store data (numbers, text, boolean, etc.) that can be used and changed in a program.

// Example:

let name = "Ashutosh";
let age = 24;
let isStudent = true;

// 1. var

// Scope: Function

// Re-assign: Yes

// Re-declare: Yes

// Hoisting: Hoisted & initialized with undefined

var x = 10;
x = 20;       
var x = 30;   

// 2. let

// Scope: Block

// Re-assign: Yes

// Re-declare: No

// Hoisting: Hoisted but not initialized (TDZ)

let y = 5;
y = 15;       
// let y = 25; // Not allowed

// 3. const

// Scope: Block

// Re-assign:  No

// Re-declare: No

// Hoisting: Hoisted but must assign at declaration


const z = 50;
// z = 60; ❌
// const z = 70; ❌

// SEM Content:

// Keyword Scope Re-assign Re-declare Hoisting

// var Function Yes Yes Hoisted, undefined
// let Block Yes No Hoisted, TDZ
// const Block No No Hoisted, must assign

