// What is DOM in JS?
// DOM stands for Document Object Model. It is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM provides a structured representation of the document as a tree of objects, allowing developers to manipulate the elements and attributes of a webpage dynamically using JavaScript.
// The DOM is not part of the JavaScript language itself, but rather a separate API that browsers implement to allow JavaScript to interact with HTML and XML documents. Through the DOM, developers can create, delete, and modify elements, handle events, and change styles on the fly, enabling dynamic and interactive web applications.
// Example of DOM manipulation using JavaScript:
// Assume we have the following HTML element:
// <div id="myDiv">Hello World</div>
// We can use JavaScript to manipulate this element using the DOM:
// Accessing the element
let myDiv = document.getElementById("myDiv");
// Changing the content of the element
myDiv.innerHTML = "Hello DOM!";
// Changing the style of the element
myDiv.style.color = "blue";
// Adding a new element to the DOM
let newParagraph = document.createElement("p");
newParagraph.innerHTML = "This is a new paragraph.";
document.body.appendChild(newParagraph);
// Removing an element from the DOM
document.body.removeChild(myDiv);
// These examples demonstrate how to use the DOM API to interact with and manipulate HTML elements on a webpage using JavaScript.

