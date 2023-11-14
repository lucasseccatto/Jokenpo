const result = document.querySelector('.result');
const humanScore = document.getElementById('human-score');
const machineScore = document.getElementById('machine-score');

const rockButton = document.getElementById('rock');
const paperButton = document.getElementById('paper');
const scissorsButton = document.getElementById('scissors');

let humanScoreNumber = 0;
let machineScoreNumber = 0;

const GAME_OPTIONS = {
  ROCK: 'rock',
  PAPER: 'paper',
  SCISSORS: 'scissors',
};

// Função para jogar como humano
const playHuman = (humanChoice) => {
  playTheGame(humanChoice, playMachine());
};

// Função para jogar como a máquina
const playMachine = () => {
  const choices = [
    GAME_OPTIONS.ROCK,
    GAME_OPTIONS.PAPER,
    GAME_OPTIONS.SCISSORS,
  ];
  const randomNumber = Math.floor(Math.random() * 3);

  return choices[randomNumber];
};

// Função para determinar o resultado do jogo
const playTheGame = (human, machine) => {
  if (human === machine) {
    result.innerHTML = 'Deu empate!';
  } else if (
    (human === GAME_OPTIONS.ROCK && machine === GAME_OPTIONS.SCISSORS) ||
    (human === GAME_OPTIONS.PAPER && machine === GAME_OPTIONS.ROCK) ||
    (human === GAME_OPTIONS.SCISSORS && machine === GAME_OPTIONS.PAPER)
  ) {
    humanScoreNumber++;
    humanScore.innerHTML = humanScoreNumber;
    result.innerHTML = 'Você venceu!';
  } else {
    machineScoreNumber++;
    machineScore.innerHTML = machineScoreNumber;
    result.innerHTML = 'Você perdeu para a Alexa!';
  }
};

// Adiciona eventos de clique aos botões
rockButton.addEventListener('click', () => playHuman(GAME_OPTIONS.ROCK));
paperButton.addEventListener('click', () => playHuman(GAME_OPTIONS.PAPER));
scissorsButton.addEventListener('click', () =>
  playHuman(GAME_OPTIONS.SCISSORS)
);
