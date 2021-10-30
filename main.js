let playerScore = 0
let computerScore = 0
let roundScore = 0
let randomNumber = 0
let result = ''
let playerSelection = ''

const rockBtn = document.querySelector('#rock')
const scissorsBtn = document.querySelector('#scissors')
const paperBtn = document.querySelector('#paper')

const playerScoreText = document.getElementById('playerScore')
const computerScoreText = document.getElementById('computerScore')
const roundScoreText = document.getElementById('roundTitle')
const resultsContainer = document.getElementById('resultsContainer')

function generateRandomNumber() {
  return (randomNumber = Math.floor(Math.random() * 3))
}

function computerPlay() {
  if (randomNumber === 0) {
    return (result = 'rock')
  } else if (randomNumber === 1) {
    return (result = 'scissors')
  } else if (randomNumber === 2) {
    return (result = 'paper')
  } else {
    return 'ERROR'
  }
}

function updatePlayerScore(number) {
  playerScore = number
  playerScoreText.innerText = `Player Score: ${playerScore}`
  return playerScore
}

function updateComputerScore(number) {
  computerScore = number
  computerScoreText.innerText = `Computer Score: ${computerScore}`
  return computerScore
}

function updateRoundScore(number) {
  roundScore = number
  roundScoreText.innerText = `ROUND: ${roundScore}`
  return roundScore
}

function playRound() {
  computerSelection = computerPlay()
  const paragraph = document.createElement('p')

  if (playerSelection === computerSelection) {
    paragraph.textContent = `Draw!! ${playerSelection} tie with ${computerSelection}`
    return (
      resultsContainer.appendChild(paragraph), updateRoundScore(roundScore + 1)
    )
  } else if (
    // haha yandere dev go brr
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    paragraph.textContent = `Lose!! ${playerSelection} lost  ${computerSelection} `
    return (
      updateComputerScore(computerScore + 1),
      resultsContainer.appendChild(paragraph),
      updateRoundScore(roundScore + 1)
    )
  } else if (
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'scissors' && computerSelection === 'paper') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    paragraph.textContent = `Win!! ${playerSelection} beats ${computerSelection} `
    return (
      resultsContainer.appendChild(paragraph),
      updatePlayerScore(playerScore + 1),
      updateRoundScore(roundScore + 1)
    )
  } else {
    return console.log(
      `${playerSelection} is not a valid type ${computerSelection}`
    )
  }
}

// deactivating all buttons
// const btnArray = [rockBtn, scissorsBtn, paperBtn]
// btnArray.forEach((item) => {
//   item.setAttribute('disabled', true)
// })

rockBtn.addEventListener('click', () => {
  playerSelection = 'rock'
  generateRandomNumber()
  playRound()
})
scissorsBtn.addEventListener('click', () => {
  playerSelection = 'scissors'
  generateRandomNumber()
  playRound()
})
paperBtn.addEventListener('click', () => {
  playerSelection = 'paper'
  generateRandomNumber()
  playRound()
})
