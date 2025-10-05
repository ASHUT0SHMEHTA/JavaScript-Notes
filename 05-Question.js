// Q5. What is DOM?

// DOM stands for Document Object Model.

// It is a programming interface for web documents.

// It represents the HTML or XML document as a tree of objects.

// Using DOM, JavaScript can access, modify, add, or delete HTML elements, attributes, and content dynamically.

// In short, DOM is how the browser understands the web page structure for scripting.

// Example:

// Accessing an element using DOM

let heading = document.getElementById("title");
heading.textContent = "Hello DOM!";

// Here, JavaScript is interacting with the DOM to change the content of an HTML element.

// Difference between HTML and DOM

// HTML 

// HTML is a markup language used to structure web content. 
// It is static; once loaded, HTML cannot be changed by itself.
// HTML is just the text/code you write in your .html file. 
// Browsers parse HTML to display content. 
// Example: <h1 id="title">Hello</h1> 

// dom

// DOM is a programming interface to manipulate the HTML document.
// It is dynamic; JavaScript can modify the DOM after page load.
// DOM is the browser’s representation of the HTML document.
// Browsers create DOM from HTML so scripts can interact with it.
// Example in DOM: document.getElementById("title").textContent = "Hi!";

// ✅ In short: HTML = the static code, DOM = the dynamic object model created from that code that JS can manipulate.


