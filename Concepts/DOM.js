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

// match() closest(), contains() meaning 
// match(): it is a method used to compare and check if a css selector matches a given element or not. It returns the matched element if found otherwise returns null.
// Example:
let element = document.querySelector(".myClass");
let isMatch = element.matches(".myClass"); // returns true if element has class 'myClass'

// closest(): it is a method that traverses up the DOM tree from the current element and returns the nearest ancestor (including itself) that matches the specified selector. If no matching ancestor is found, it returns null.
// Example:
let childElement = document.querySelector(".child");
let closestAncestor = childElement.closest(".parent"); // returns the nearest ancestor with class 'parent'
// contains(): it is a method used to check if a node is a descendant of a specified node. It returns true if the node is a descendant, otherwise returns false.
// Example:
let parentElement = document.querySelector(".parent");
let childElement2 = document.querySelector(".child");
let isDescendant = parentElement.contains(childElement2); // returns true if childElement2 is a descendant of parentElement
//Event Delegation in JS
// Event delegation is a technique in JavaScript where a single event listener is added to a parent element to manage events for its child elements. Instead of attaching individual event listeners to each child element, the parent element listens for events that bubble up from its children. This approach improves performance and simplifies code management, especially when dealing with dynamic content where child elements may be added or removed frequently.
// Example of Event Delegation:
const container = document.getElementById("button-container");

container.addEventListener("click", (e) => {
  if (e.target.matches(".btn")) { // check if a button was clicked
    alert(`You clicked ${e.target.textContent}`);
  }
});
// In this example, a single click event listener is added to the container element. When any button inside the container is clicked, the event bubbles up to the container, and we check if the clicked target matches the button selector. This way, we can handle clicks for all buttons without adding separate listeners to each one.

// Event Bubbling and Capturing in JS
// Event Bubbling: In event bubbling, when an event is triggered on a child element, it first runs the event handler on that element, and then the event propagates (bubbles up) to its parent elements, triggering their event handlers in order until it reaches the root of the DOM tree.
// Example of Event Bubbling:
document.getElementById("parent").addEventListener("click", () => {
  console.log("Parent clicked");
});
document.getElementById("child").addEventListener("click", (e) => {
  console.log("Child clicked");
  // e.stopPropagation(); // Uncommenting this will stop the bubbling
});
// If you click on the child element, the output will be:
// Child clicked
// Parent clicked
