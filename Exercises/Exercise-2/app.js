let userScore = 0;
let computerScore = 0;

const userScoreSpan = document.getElementById("user-score");
const computerScoreSpan = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");

const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const choices = ["rock", "paper", "scissors"];

// Get random computer choice
function getComputerChoice() {
    return choices[Math.floor(Math.random() * choices.length)];
}

// Game logic in one place
function play(userChoice) {
    const computerChoice = getComputerChoice();

    console.log("User:", userChoice);
    console.log("Computer:", computerChoice);

    if (userChoice === computerChoice) {
        result_p.textContent = "It's a draw!";
        return;
    }

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
}

// Attach event listeners once
rock_div.addEventListener("click", () => play("rock"));
paper_div.addEventListener("click", () => play("paper"));
scissors_div.addEventListener("click", () => play("scissors"));
