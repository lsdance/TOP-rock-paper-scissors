function getComputerChoice() {
  const answers = ['rock','paper', 'scissors']
  const answerIndex = Math.floor(Math.random() * 3)
  return answers[answerIndex]
}

function playRound(playerSelection, computerSelection) {
  const normalisedPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
  const normalisedComputerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()

  if (normalisedPlayerSelection === normalisedComputerSelection) {
    return `Tie!  ${normalisedPlayerSelection} equals ${normalisedComputerSelection}`
  } else if (
    normalisedPlayerSelection === 'Rock' && normalisedComputerSelection === 'Scissors' ||
    normalisedPlayerSelection === 'Paper' && normalisedComputerSelection === 'Rock' ||
    normalisedPlayerSelection === 'Scissor' && normalisedComputerSelection === 'Paper'
  ) {
    return `You won! ${normalisedPlayerSelection} beats ${normalisedComputerSelection}`
  } else {
    return `You lose! ${normalisedComputerSelection} beats ${normalisedPlayerSelection}`
  }
}

function game() {
  let playerScore = 0
  let computerScore = 0

  for (let i = 0; i < 5; i++) {
    const computerChoice = getComputerChoice()
    let playerChoice = prompt('Please, enter one of shapes: rock, paper, scissors.') || '123'
    let isCorrectChoise = playerChoice.toLowerCase() === 'rock' || playerChoice.toLowerCase() === 'paper' || playerChoice.toLowerCase() === 'scissors'

    while(!isCorrectChoise) {
      playerChoice = prompt('You entered incorrect shape. Please, enter one of shapes: rock, paper, scissors.') || '123'

      isCorrectChoise = playerChoice.toLowerCase() === 'rock' || playerChoice.toLowerCase() === 'paper' || playerChoice.toLowerCase() === 'scissors'
    }

    const roundResult = playRound(playerChoice, computerChoice)

    console.log(roundResult)

    if (roundResult.startsWith('You won')) {
      playerScore++
    } else if (roundResult.startsWith('You lose')) {
      computerScore++
    }
  }

  if (playerScore === computerScore) {
    console.log(`Tie! Player score: ${playerScore}, Computer score: ${computerScore}`)
  } else if (playerScore > computerScore) {
    console.log(`You won! Player score: ${playerScore}, Computer score ${computerScore}`)
  } else {
    console.log(`You lose! Player score: ${playerScore}, Computer score ${computerScore}`)
  }

}

game()
