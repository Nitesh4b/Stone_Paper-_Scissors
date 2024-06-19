let userScore = 0;
let compScore = 0;

// Helper function to generate computer choice
const genCompChoice = () => {
    const compOptions = ["rock", "paper", "scissors"];
    const randInx = Math.floor(Math.random() * 3);
    return compOptions[randInx];
}

// Helper function to determine the winner
const determineWinner = (userChoice, compChoice) => {
    if (userChoice === compChoice) {
        return "draw";
    }
    if (
        (userChoice === "rock" && compChoice === "scissors") ||
        (userChoice === "scissors" && compChoice === "paper") ||
        (userChoice === "paper" && compChoice === "rock")
    ) {
        return "user";
    } else {
        return "comp";
    }
}

// Function to display the winner and update scores
const displayWinner = (winner, userChoice, compChoice) => {
    const display = document.querySelector(".pickMove");
    const updateUserScore = document.querySelector("#userScore");
    const updateCompScore = document.querySelector("#compScore");

    if (winner === "user") {
        display.innerText = `You Win!! Your ${userChoice.toUpperCase()} beats ${compChoice.toUpperCase()}`;
        display.style.backgroundColor = "green";
        userScore++;
        updateUserScore.innerText = userScore;
    } else if (winner === "comp") {
        display.innerText = `You Lose. Your ${userChoice.toUpperCase()} lost to ${compChoice.toUpperCase()}`;
        display.style.backgroundColor = "red";
        compScore++;
        updateCompScore.innerText = compScore;
    } else {
        display.innerText = `Match was Draw between two ${userChoice.toUpperCase()}`;
        display.style.backgroundColor = "rgb(39, 39, 210)";
    }
}

// Function to play the game
const playGame = (userChoice) => {
    const compChoice = genCompChoice();
    const winner = determineWinner(userChoice, compChoice);
    displayWinner(winner, userChoice, compChoice);
}

// Event handler for choice click
const handleChoiceClick = (choiceElement) => {
    const userChoice = choiceElement.getAttribute("id");
    playGame(userChoice);
}

// Register event listeners
const Allchoices = document.querySelectorAll(".choice");
Allchoices.forEach((choiceElement) => {
    choiceElement.addEventListener("click", () => {
        handleChoiceClick(choiceElement);
    });
});
