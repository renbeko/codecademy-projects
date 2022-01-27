let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

const generateTarget = () => {
    return Math.floor(Math.random() * 10);
  }

const getAbsoluteDistance = (a, b) => {
  return Math.abs(a - b);
}

const compareGuesses = (humanGuess, computerGuess, secretTarget) => {
    if (getAbsoluteDistance(humanGuess, secretTarget) === getAbsoluteDistance(computerGuess, secretTarget)) {
      return true;
    } else if(getAbsoluteDistance(humanGuess, secretTarget) < getAbsoluteDistance(computerGuess, secretTarget)) {
      return true;
    } else {
      return false;
    }
  }

  const updateScore = (name) => {
    if(name === 'human') {
      humanScore++;
    } else if(name === 'computer') {
      computerScore++;
    }
  }

  const advanceRound = () => {
    currentRoundNumber++;
  }
