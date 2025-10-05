// Q6. What are selectors in JS?

// Selectors in JavaScript are methods used to select HTML elements from the DOM so that we can read or manipulate them using JavaScript.

// Think of selectors as ways to “grab” elements from your web page.

// Common Types of Selectors

// 1. getElementById

// Selects a single element using its id.

let title = document.getElementById("header");
title.textContent = "Hello World!";

// 2. getElementsByClassName

// Selects all elements with a given class as an HTMLCollection (like an array, but not exactly).

let items = document.getElementsByClassName("list-item");
console.log(items[0].textContent);

// 3. getElementsByTagName

// Selects all elements with a given tag name.

let paragraphs = document.getElementsByTagName("p");
console.log(paragraphs[0].textContent);

// 4. querySelector

// Selects the first element that matches a CSS selector.

let mainTitle = document.querySelector(".main-title");
mainTitle.style.color = "blue";

// 5. querySelectorAll

// Selects all elements that match a CSS selector, returns a NodeList.

let links = document.querySelectorAll("a");
links.forEach(link => {
    link.style.textDecoration = "none";
});

// Summary Table of Selectors

// Selector Description Returns

// getElementById("id") Select element by id Single element
// getElementsByClassName("class") Select all elements by class HTMLCollection
// getElementsByTagName("tag") Select all elements by tag HTMLCollection
// querySelector("selector") Select first element matching CSS selector Single element
// querySelectorAll("selector") Select all elements matching CSS selector NodeList
