let a = prompt("What is your age?");
a = Number.parseInt(a); // converting string to number -- this is called typecasting
if (a < 0) {
    console.log("This is not a valid age");
} else if (a < 9) {
    console.log("You are a kid and you cannot even think of driving");
} else if (a < 18 && a >= 9) {
    console.log("You are a kid and you can think of driving after few years");
}
 else {
    console.log("You are not a valid person");
}

// Switch case
let age = prompt("Enter your age");
age = Number.parseInt(age);
switch (age) {
    case 18:
        console.log("You are going to become an adult");    
        break;
    case 21:
        console.log("You are going to become a adult and you can vote");    
        break;
    case 24:
        console.log("You are going to become an adult and you can marry");
        break;
    default:
        console.log("Enjoy your life");
        break;
}