// Q.4 What are some important string operations in JS?

// 1. String Declaration

let greeting1 = "Hello";
let greeting2 = 'World';
let greeting3 = `Hello World`; // Template literal

// 2. String Length

let message = "Hello";
console.log(message.length); // Output: 5

//3. Accessing Characters

let word = "Hello";
console.log(word[0]); // H
console.log(word.charAt(1)); // e

// 4. String Concatenation

let firstWord = "Hello";
let secondWord = "World";
console.log(firstWord + " " + secondWord); // Hello World
console.log(firstWord.concat(" ", secondWord)); // Hello World

// 5. Changing Case

let text = "Hello World";
console.log(text.toUpperCase()); // HELLO WORLD
console.log(text.toLowerCase()); // hello world

// 6. Trimming Whitespaces

let paddedText = "   Hello World   ";
console.log(paddedText.trim()); // "Hello World"

// 7. Searching in Strings

let sentence = "Hello World";
console.log(sentence.indexOf("o")); // 4
console.log(sentence.lastIndexOf("o")); // 7
console.log(sentence.includes("World")); // true
console.log(sentence.startsWith("Hello")); // true
console.log(sentence.endsWith("World")); // true

// 8. Extracting Substrings

let phrase = "Hello World";
console.log(phrase.slice(0, 5)); // Hello
console.log(phrase.substring(6, 11)); // World
console.log(phrase.substr(6, 5)); // World

// 9. Replacing Text

let announcement = "Hello World";
console.log(announcement.replace("World", "JS")); // Hello JS
console.log(announcement.replaceAll("l", "x")); // Hexxo Worxd

// 10. Splitting and Joining

let fullText = "Hello World";
let wordsArray = fullText.split(" "); // ["Hello", "World"]
console.log(wordsArray.join("-")); // Hello-World

// 11. String Repetition

let cheer = "Hi! ";
console.log(cheer.repeat(3)); // Hi! Hi! Hi!

// 12. Template Literals (Dynamic Strings)

let userName = "Ashutosh";
let welcomeMsg = `Hello, ${userName}!`;
console.log(welcomeMsg); // Hello, Ashutosh!
