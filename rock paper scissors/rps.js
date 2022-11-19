const playerText = document.querySelector("#playerText");
const computerText = document.querySelector("#computerText");
const resultText = document.querySelector("#resultText");
const playerOptions = document.querySelectorAll(".playerOptions");
let player;
let computer;
let result;

playerOptions.forEach((button) =>
  button.addEventListener("click", () => {
    player = button.textContent;
    computerTurn();
    playerText.textContent = `Your choice: ${player}`;
    computerText.textContent = `Computer's choice: ${computer}`;
    resultText.textContent = play();
  })
);

function computerTurn() {
  const computerChoice = Math.floor(Math.random() * 3) + 1;

  switch (computerChoice) {
    case 1:
      computer = "ROCK";
      break;

    case 2:
      computer = "PAPER";
      break;

    case 3:
      computer = "SCISSORS";
      break;
  }
}

function play() {
  if (player == computer) {
    return ("It's a tie!");
  }

  if (computer == "ROCK") {
    return (player == "PAPER" ? "You win!" : "You lose!" );
  }

  if (computer == "PAPER") {
    return (player == "SCISSORS" ? "You win!" : "You lose!" );
  }

  if (computer == "SCISSORS") {
    return (player == "ROCK" ? "You win!" : "You lose!" );
  }
}
