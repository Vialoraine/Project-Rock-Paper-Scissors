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