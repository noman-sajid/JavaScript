const navbar = document.getElementsByClassName("navbar")[0];
const listItems = document.getElementsByClassName("nav-items")[0];

listItems.style.backgroundColor = "cyan";

navbar.style.backgroundColor = "red";

const container = document.querySelector(".container");
const kids = container.children; 

kids[0].style.backgroundColor = "green"; 
kids[kids.length - 1].style.backgroundColor = "green"; 