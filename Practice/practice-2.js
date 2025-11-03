//Use Logical Operator to find out weather or not if a person's age is between 10 and 20

let age = prompt("What is your age");
if(age >= 10 && age <= 20){     
    console.log("The person's age is between 10 and 20");
}else{  
    console.log("The person's age is not between 10 and 20");
}

let number = 2

if(number % 2 === 0 && number % 3 === 0){
    console.log("Number is divisible by both 2 and 3")
} else {
    console.log("Number is not divisible by both 2 and 3");
    
}


// Use of switch case statements in JS 

let day = prompt("Enter a day number (0-6): ");

switch(parseInt(day)){  
    case 0:
        console.log("Sunday");
        break;  
    case 1:
        console.log("Monday");
        break;  
    case 2: 
        console.log("Tuesday");
        break;
    case 3: 
        console.log("Wednesday");
        break
    default: 
        console.log("Monday")
        break;
}            
