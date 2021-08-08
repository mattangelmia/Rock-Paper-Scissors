function playRound(playerSelection, computerSelection) {
  const lose = "You Lose! ";
  const win = "You Win! ";
  const tie = "its a tie";
  console.log(`Your selection is : ${playerSelection}`);

  console.log(`PC selection is : ${computerSelection}`);
  if (
    (playerSelection === "scissors" && computerSelection === "rock") ||
    (playerSelection === "paper" && computerSelection === "scissors") ||
    (playerSelection === "rock" && computerSelection === "paper")
  ) {
    computerScore++;
    console.log(`compScore is ${computerScore}`);
    return lose;
  } else if (playerSelection === computerSelection) {
    computerScore += computerScore + 0;
    playerScore += playerScore + 0;
    return tie;
  } else {
    return win;
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    let playerSelection = prompt("You choose:");
    console.log(playRound(playerSelection, computerPlay()));
  }
  declareWinner();
}

function declareWinner() {
  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else {
    console.log("You lose the game!");
  }
}

function computerPlay() {
  let choices = ["rock", "paper", "scissors"];
  let choice = choices[Math.floor(Math.random() * choices.length)];
  return choice;
}
const string = "rock";

let computerSelection = computerPlay();
let playerScore = 0;
let computerScore = 0;

game();
largest = arr.sort((a, b) => a - b)[arr.length - 1];
