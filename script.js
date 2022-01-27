let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:

const generateTarget = () =>{
  return Math.floor(Math.random() * 100)
}

const getAbsoluteDistance = (target, input) =>{
  return Math.abs(target-input)
}

const check = (input) => {
  if(input > 99 || input < 0){
    window.alert('Please input a number between 0 and 99.')
  }
  else{
      return
  }
}

const compareGuesses = (human, computer, target) => {
  check(human)
  const diffhuman = getAbsoluteDistance(target, human)
  const diffcomp = getAbsoluteDistance(target,computer)
  if(diffhuman < diffcomp){
    return true;
  }
  else if(diffhuman > diffcomp){
    return false;
  }
  else{
    return true;
  }
}

const updateScore = winner => {
  if(winner === 'human'){
    humanScore++
  }
  else if (winner ==='computer'){
    computerScore++
  }
}
const advanceRound = () => {
  currentRoundNumber++
}
