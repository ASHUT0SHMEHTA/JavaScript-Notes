// Q7. Difference getElementById, getElementsByClassName and get elementsByTagName?

// 1. getElementById

// Purpose: Selects one single element by its unique id.

// Returns: A single DOM element.

// Key Points:

// id must be unique in the HTML document.

// Directly gives the element; no need to use an index.

// Example:

// HTML
// <h1 id="title">Hello</h1>

let header = document.getElementById("title");
header.textContent = "Hello World!"; // Changes text of the element

// Output on page:

// Hello World!


// ---

// 2. getElementsByClassName

// Purpose: Selects all elements that have a specific class.

// Returns: HTMLCollection (like an array, but not exactly an array).

// Key Points:

// Can select multiple elements.

// Access elements using an index like elements[0].

// Live collection – if the DOM changes, the collection updates automatically.



// Example:

// // HTML
// // <p class="item">Item 1</p>
// // <p class="item">Item 2</p>

// let items = document.getElementsByClassName("item");
// console.log(items[0].textContent); // Item 1
// console.log(items[1].textContent); // Item 2


// ---

// 3. getElementsByTagName

// Purpose: Selects all elements with a specific tag name (like p, div, h1).

// Returns: HTMLCollection.

// Key Points:

// Selects elements based on tag, not class or id.

// Access elements using an index.

// Live collection – updates automatically if the DOM changes.



// Example:

// // HTML
// // <p>Paragraph 1</p>
// // <p>Paragraph 2</p>

// let paragraphs = document.getElementsByTagName("p");
// console.log(paragraphs[0].textContent); // Paragraph 1
// console.log(paragraphs[1].textContent); // Paragraph 2


// ---

// ✅ Summary

// getElementById → 1 element by id, direct access.

// getElementsByClassName → multiple elements by class, access by index.

// getElementsByTagName → multiple elements by tag, access by index.



// ---

// If you want, I can also make a simple visual table comparing all three selectors side by side with examples.

// Do you want me to do that?