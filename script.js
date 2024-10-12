let secretNumber = Math.floor(Math.random() * 100) + 1;
let attempts = 10;

const guessInput = document.getElementById('guessInput');
const guessButton = document.getElementById('guessButton');
const message = document.getElementById('message');
const remainingAttempts = document.getElementById('remainingAttempts');
const resetButton = document.getElementById('resetButton');

guessButton.addEventListener('click', checkGuess);
resetButton.addEventListener('click', resetGame);

function checkGuess() {
  const userGuess = Number(guessInput.value);
  
  if (!userGuess || userGuess < 1 || userGuess > 100) {
    message.textContent = 'Por favor, insira um número entre 1 e 100.';
    return;
  }

  attempts--;
  remainingAttempts.textContent = attempts;

  if (userGuess === secretNumber) {
    message.textContent = `Parabéns! Você acertou o número ${secretNumber}.`;
    endGame();
  } else if (attempts === 0) {
    message.textContent = `Você perdeu! O número era ${secretNumber}.`;
    endGame();
  } else if (userGuess > secretNumber) {
    message.textContent = 'Muito alto! Tente novamente.';
  } else {
    message.textContent = 'Muito baixo! Tente novamente.';
  }
}

function endGame() {
  guessButton.disabled = true;
  guessInput.disabled = true;
  resetButton.style.display = 'block';
}

function resetGame() {
  attempts = 10;
  secretNumber = Math.floor(Math.random() * 100) + 1;
  guessInput.value = '';
  message.textContent = '';
  remainingAttempts.textContent = attempts;
  guessButton.disabled = false;
  guessInput.disabled = false;
  resetButton.style.display = 'none';
}