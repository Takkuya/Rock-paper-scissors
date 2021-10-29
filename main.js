let playerScore = 0
let computerScore = 0
let randomNumber = 0

function generateRandomNumber() {
  return (randomNumber = Math.floor(Math.random() * 3))
}

function computerPlay() {
  if (randomNumber === 0) {
    return (randomNumber = 'rock')
  } else if (randomNumber === 1) {
    return (randomNumber = 'scissors')
  } else {
    return (randomNumber = 'paper')
  }
}

function playRound(playerSelection, computerSelection) {
  computerSelection = computerPlay()

  playerSelection = prompt('Type: scissors, paper or rock').toLowerCase()

  if (playerSelection === computerSelection) {
    console.log(`Draw!! ${playerSelection} tie with ${computerSelection}`)
  } else if (
    (playerSelection === 'rock' && computerSelection === 'paper') ||
    (playerSelection === 'scissors' && computerSelection === 'rock') ||
    (playerSelection === 'paper' && computerSelection === 'rock')
  ) {
    return (
      console.log(`Lose!! ${playerSelection} lost to ${computerSelection}`),
      (computerScore = computerScore + 1)
    )
  } else if (playerSelection !== 'scissors' && 'rock' && 'paper') {
    console.log(`${playerSelection} is not a valid type`)
  } else {
    return (
      console.log(`Win!! ${playerSelection} beats ${computerSelection}`),
      (playerScore = playerScore + 1)
    )
  }
}

function game() {
  for (let i = 0; i < 5; i++) {
    playRound()
    console.log('random number:', generateRandomNumber())
    console.log('Player Score:', playerScore)
    console.log('Computer Score:', computerScore)
  }
}

game()
