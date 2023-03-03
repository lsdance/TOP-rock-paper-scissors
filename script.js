let playerScore = 0
let computerScore = 0

const shapeBtns = document.querySelectorAll('.shapes button')
const rockBtn = document.querySelector('#rock')
const paperBtn = document.querySelector('#paper')
const scissorsBtn = document.querySelector('#scissors')
const restartBtn = document.querySelector('#restart__btn')

const roundResultElementString = document.querySelector('.roundResult__string')
const gameScorePlayer = document.querySelector('.gameScore__player')
const gameScoreComputer = document.querySelector('.gameScore__computer')
const winnerString = document.querySelector('.winner__string')

rockBtn.addEventListener('click', () => {
  const computerChoice = getComputerChoice()
  const roundResult = playRound('Rock', computerChoice)
  roundResultElementString.textContent = roundResult
  increseScore(roundResult)
  checkFinalWiner()
})

paperBtn.addEventListener('click', () => {
  const computerChoice = getComputerChoice()
  const roundResult = playRound('Paper', computerChoice)
  roundResultElementString.textContent = roundResult
  increseScore(roundResult)
  checkFinalWiner()
})

scissorsBtn.addEventListener('click', () => {
  const computerChoice = getComputerChoice()
  const roundResult = playRound('Scissors', computerChoice)
  roundResultElementString.textContent = roundResult
  increseScore(roundResult)
  checkFinalWiner()
})

restartBtn.addEventListener('click', playAgain)

function checkFinalWiner() {
  if (playerScore === 5) {
    winnerString.textContent = 'Congratulations! You won best of five!'
    shapeBtns.forEach(btn => btn.disabled = true)
  }
  if (computerScore === 5) {
    winnerString.textContent = 'I\'m sorry! You lose best of five!'
    shapeBtns.forEach(btn => btn.disabled = true)
  }
}

function increseScore(roundResult) {
  if (roundResult.startsWith('You won')) {
    playerScore++
    gameScorePlayer.textContent = playerScore
  } else if (roundResult.startsWith('You lose')) {
    computerScore++
    gameScoreComputer.textContent = computerScore
  }


}

function getComputerChoice() {
  const answers = ['Rock', 'Paper', 'Scissors']
  const answerIndex = Math.floor(Math.random() * 3)
  return answers[answerIndex]
}

function playRound(playerSelection, computerSelection) {
  const normalisedPlayerSelection = playerSelection[0].toUpperCase() + playerSelection.slice(1).toLowerCase()
  const normalisedComputerSelection = computerSelection[0].toUpperCase() + computerSelection.slice(1).toLowerCase()

  if (normalisedPlayerSelection === normalisedComputerSelection) {
    return `Tie!  ${normalisedPlayerSelection} equals ${normalisedComputerSelection}.`
  } else if (
    normalisedPlayerSelection === 'Rock' && normalisedComputerSelection === 'Scissors' ||
    normalisedPlayerSelection === 'Paper' && normalisedComputerSelection === 'Rock' ||
    normalisedPlayerSelection === 'Scissor' && normalisedComputerSelection === 'Paper'
  ) {
    return `You won! ${normalisedPlayerSelection} beats ${normalisedComputerSelection}.`
  } else {
    return `You lose! ${normalisedComputerSelection} beats ${normalisedPlayerSelection}.`
  }
}

function playAgain() {
  playerScore = 0
  computerScore = 0
  gameScorePlayer.textContent = playerScore
  gameScoreComputer.textContent = computerScore
  shapeBtns.forEach(btn => btn.disabled = false)
}