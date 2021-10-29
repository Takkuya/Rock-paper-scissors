let playerScore = 0
let computerScore = 0
let randomNumber = 0

function generateRandomNumber() {
  return (randomNumber = Math.floor(Math.random() * 3))
}

let result = ''
function computerPlay() {
  console.log(randomNumber)
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

let playerSelection = ''
const rockBtn = document.querySelector('#rock')
const scissorsBtn = document.querySelector('#scissors')
const paperBtn = document.querySelector('#paper')
rockBtn.addEventListener('click', () => {
  return (playerSelection = 'rock')
})
scissorsBtn.addEventListener('click', () => {
  return (playerSelection = 'scissors')
})
paperBtn.addEventListener('click', () => {
  return (playerSelection = 'paper')
})

function playRound() {
  computerSelection = computerPlay()

  if (playerSelection === computerSelection) {
    console.log(`Draw!! ${playerSelection} tie with ${computerSelection}`)
  } else if (
    // haha yandere dev go brr
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'rock') ||
    (playerSelection === 'rock' && computerSelection === 'scissors') ||
    (playerSelection === 'paper' && computerSelection === 'scissors')
  ) {
    return (
      console.log(`Lose!! ${playerSelection} lost to ${computerSelection}`),
      (computerScore = computerScore + 1)
    )
  } else if (playerSelection !== 'scissors' && 'rock' && 'paper') {
    console.log(`${playerSelection} is not a valid type ${computerSelection}`)
  } else {
    return (
      console.log(`Win!! ${playerSelection} beats ${computerSelection}`),
      (playerScore = playerScore + 1)
    )
  }
}

rockBtn.addEventListener('click', () => {
  generateRandomNumber()
  playRound()
})
scissorsBtn.addEventListener('click', () => {
  generateRandomNumber()
  playRound()
})
paperBtn.addEventListener('click', () => {
  generateRandomNumber()
  playRound()
})
