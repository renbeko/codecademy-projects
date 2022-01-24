const getUserChoice = userInput => {
  userInput = userInput.toLowerCase();
  if(userInput === 'rock' || userInput === "paper" || 
  userInput === 'scissors' || userInput === 'bomb') {
    return userInput;
  } else {
    console.log("Error!");
  }
}

const getComputerChoice = () => {

  const randomNumber = Math.floor(Math.random() * 3);

  switch(randomNumber) {
    case 0:
        return 'rock';
        break;
    
    case 1:
        return 'paper';
        break;
    
    case 2:
        return 'scissors';
        break;
  }
}

const determineWinner = (userChoice, computerChoice) => {
  if(userChoice === computerChoice) {
    return "Tie!"
  } else if(userChoice === 'rock') {
      if(computerChoice === 'paper') {
        return "Computer Won!";
      } else {
        return "User Won!";
      }
  } else if(userChoice === 'paper') {
      if(computerChoice === 'scissors') {
        return "Computer Won!";
      } else {
        return "User Won!";
      }
  } else if(userChoice === 'scissors') {
      if(computerChoice === 'rock') {
        return 'Computer Won!';
      } else {
        return "User Won!";
      }
  } else if(userChoice === 'bomb') {
      console.log('A secret cheat code is activated.');
      return "User Won!";
  }
}

const playGame = () => {
  let userChoice = getUserChoice("paper");
  let computerChoice = getComputerChoice();
  console.log(`User's choice is ${userChoice}.`);
  console.log(`Computer's choice is ${computerChoice}.`);

  console.log(determineWinner(userChoice, computerChoice));
}

playGame();