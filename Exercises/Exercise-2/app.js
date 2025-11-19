let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const result = document.querySelector(".result");
let result_p= document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const choices = ["rock", "paper", "scissors"];

// Generate random computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// ---- Event handler functions (needed to remove them later) ----
function handleRock() {
    play("rock");
}
function handlePaper() {
    play("paper");
}
function handleScissors() {
    play("scissors");
}

// Add listeners once
rock_div.addEventListener("click", handleRock);
paper_div.addEventListener("click", handlePaper);
scissors_div.addEventListener("click", handleScissors);

// main game logic
function play(userChoice) {
    const computerChoice = getComputerChoice();

    console.log("User:", userChoice);
    console.log("Computer:", computerChoice);

    // Check final score BEFORE deciding winner
    if (userScore >= 5 || computerScore >= 5) {
        // Ensure it only triggers once
        showFinalScreen();
        return;
    }

    // Draw
    if (userChoice === computerChoice) {
        result_p.textContent = "It's a draw!";
        return;
    }

    // Win conditions
    const userWins =
        (userChoice === "rock" && computerChoice === "scissors") ||
        (userChoice === "paper" && computerChoice === "rock") ||
        (userChoice === "scissors" && computerChoice === "paper");

    if (userWins) {
        userScore++;
        userScoreSpan.textContent = userScore;
        result_p.textContent = "You win!";
    } else {
        computerScore++;
        computerScoreSpan.textContent = computerScore;
        result_p.textContent = "You lose!";
    }
//check final scores 
    if (userScore >= 5 || computerScore >= 5) {
        showFinalScreen();
    }
}

//show final screen
function showFinalScreen() {
   //remvove event listeners
    rock_div.removeEventListener("click", handleRock);
    paper_div.removeEventListener("click", handlePaper);
    scissors_div.removeEventListener("click", handleScissors);
    // Display final result
    result.innerHTML = `
        <h2>Final Score</h2>
        <p>User: ${userScore} - Computer: ${computerScore}</p>
        <h3>${userScore > computerScore ? "You are the winner!" : "Computer wins!"}</h3>
        <button id="restart-btn">Restart Game</button>
    `;

    document.getElementById("restart-btn").addEventListener("click", restartGame);
}

// Restart the game
function restartGame() {
    // Reset scores
    userScore = 0;
    computerScore = 0;

    userScoreSpan.textContent = userScore;
    computerScoreSpan.textContent = computerScore;

   
    result.innerHTML = `
        <p>Make your move to start the game!</p>
    `;


    result_p = document.querySelector(".result > p");

 
    rock_div.addEventListener("click", handleRock);
    paper_div.addEventListener("click", handlePaper);
    scissors_div.addEventListener("click", handleScissors);
}
