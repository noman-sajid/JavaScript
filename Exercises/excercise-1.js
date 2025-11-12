//Write a program that generates a random number from 1 to 100 and asks the user to guess it.
//The program should give hints whether the guess is too high or too low until the user guesses the correct number. 
//Count the number of attempts made by the user.
//Once guessed correctly, display the number of attempts taken.


let secretRandomNumber = Math.floor(Math.random() * 100);

console.log(`Secret Number: ${secretRandomNumber}`); 

function askForSecretNumber(num) {
  
    for (let i = 1; i <= 100; i++) { 
       
        let input = parseInt(prompt(`Guess the secret number (Attempt ${i}):`)); 
        
        if (isNaN(input)) {
            alert('Please enter a valid number.');
            continue; 
        }

        if (input === num) {
            alert(`You got it! The number was ${num}. It took you ${i} attempts.`);
        
            break; 
        } else if (input < num) {
            alert('Too low. Try again.');
        } else if (input > num) {
            alert('Too high. Try again.');
        }

        if (i === 100) {
             alert(`You ran out of attempts! The number was ${num}.`);
        }
    }
}

askForSecretNumber(secretRandomNumber);