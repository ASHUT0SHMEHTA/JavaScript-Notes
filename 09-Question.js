// Ashu, [9/14/2025 12:49 PM]
// Q9. What are operators? What are the types of operators in JS?

// Ashu, [9/14/2025 12:50 PM]
// Here’s a clear explanation of operators in JavaScript and their types:


// ---

// Q9. What are Operators in JS?

// Operators are special symbols in JavaScript that are used to perform operations on values (operands).

// Example: addition, subtraction, comparison, logical operations.

// Operands are the values the operator works on.


// Example:

// let a = 10;
// let b = 5;
// let sum = a + b; // + is the operator, a and b are operands
// console.log(sum); // 15


// ---

// Types of Operators in JavaScript

// 1. Arithmetic Operators

// Used to perform mathematical operations. | Operator | Description | Example | |----------|------------|---------| | + | Addition | 5 + 3 = 8 | | - | Subtraction | 5 - 3 = 2 | | * | Multiplication | 5 * 3 = 15 | | / | Division | 10 / 2 = 5 | | % | Modulus (remainder) | 10 % 3 = 1 | |  | Exponentiation | 2  3 = 8 |



// ---

// 2. Assignment Operators

// Used to assign values to variables. | Operator | Description | Example | |----------|------------|---------| | = | Assign | x = 5 | | += | Add and assign | x += 3 → x = x + 3 | | -= | Subtract and assign | x -= 2 → x = x - 2 | | *= | Multiply and assign | x *= 2 → x = x * 2 | | /= | Divide and assign | x /= 5 → x = x / 5 | | %= | Modulus and assign | x %= 3 → x = x % 3 |



// ---

// 3. Comparison Operators

// Used to compare two values; returns true or false. | Operator | Description | Example | |----------|------------|---------| | == | Equal to (value only) | 5 == "5" → true | | === | Strict equal (value + type) | 5 === "5" → false | | != | Not equal (value only) | 5 != 3 → true | | !== | Strict not equal | 5 !== "5" → true | | > | Greater than | 5 > 3 → true | | < | Less than | 5 < 3 → false | | >= | Greater than or equal | 5 >= 5 → true | | <= | Less than or equal | 5 <= 3 → false |



// ---

// 4. Logical Operators

// Used to combine conditions; returns true or false. | Operator | Description | Example | |----------|------------|---------| | && | AND (both must be true) | true && false → false | |  | OR (one is true) | true  false → true | | ! | NOT (negates value) | !true → false |



// ---

// 5. Unary Operators

// Works on single operand. | Operator | Description | Example | |----------|------------|---------| | ++ | Increment by 1 | let x = 5; x++; // x = 6 | | -- | Decrement by 1 | let y = 5; y--; // y = 4 | | + | Convert to number | let z = "5"; +z // 5 | | - | Negates value | let a = 5; -a // -5 |



// ---

// 6. Ternary Operator

// Shortcut for if-else; syntax: condition ? exprIfTrue : exprIfFalse


// let age = 18;
// let canVote = (age >= 18) ? "Yes" : "No";
// console.log(canVote); // Yes


// ---

// 7. Type Operators

// Check type or existence of variable. | Operator | Description | Example | |----------|------------|---------| | typeof | Returns type of variable | typeof 5 → "number" | | instanceof | Checks if object is instance of class | obj instanceof Array → true/false |



// ---

// 8. Bitwise Operators (Advanced)

// Operates on binary digits of numbers. | Operator | Description | Example | |----------|------------|---------| | & | AND | 5 & 1 = 1 | | | | OR | 5 | 1 = 5 | | ^ | XOR | 5 ^ 1 = 4 | | ~ | NOT | ~5 = -6 | | << | Left shift | 5 << 1 = 10 | | >> | Right shift | 5 >> 1 = 2 |



// ---

// ✅ Summary:

// Operators are symbols that perform operations on values.

// Types: Arithmetic, Assignment, Comparison, Logical, Unary, Ternary, Type, Bitwise.



// ---

// If you want, I can also make a single compact table with all JS operators, symbols, and examples for easy notes and memorization.

// Do you want me to make that table?