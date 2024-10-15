const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();
  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors" ||
    userInput === "bomb"
  ) {
    return userInput;
  } else {
    console.log("User input is an invalid entry.");
  }
};

let getComputerChoice = () => {
  let randomNum = Math.floor(Math.random() * 3);

  if (randomNum === 0) {
    return "rock";
  } else if (randomNum === 1) {
    return "paper";
  } else {
    return "scissors";
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "It's a tie!";
  } else if (userChoice === "rock") {
    if (computerChoice === "paper") {
      return "You lose, paper covers rock!";
    } else {
      return "You win, rock beats scissors!";
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "scissors") {
      return "You lose, scissors cuts paper!";
    } else {
      return "You win, paper covers rock!";
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "rock") {
      return "You lose, rock beats scissors!";
    } else {
      return "You win, scissors cut paper!";
    }
  } else {
    return "BOOM! You win.";
  }
};

function playGame() {
  let userChoice = getUserChoice("bomb");
  let computerChoice = getComputerChoice();
  console.log(userChoice);
  console.log(computerChoice);
  console.log(determineWinner(userChoice, computerChoice));
}

playGame();