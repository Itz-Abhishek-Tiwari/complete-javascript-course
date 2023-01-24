const hiddenNumber = Math.floor(Math.random() * 20 + 1);
document.querySelector('.number').textContent = hiddenNumber;
let score = 20;
let highscore = 0;

// Functions-01
const x = () => {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // wrong choice
  if (!guess) {
    document.querySelector('.message').textContent = 'Pls enter the value';
  } else if (guess < hiddenNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too low';
      score--;
      document.querySelector('.score').textContent = score;
    }
  } else if (guess > hiddenNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too high';
      score--;
      document.querySelector('.score').textContent = score;
    }
  }

  // correct choice
  if (guess === hiddenNumber) {
    document.querySelector('.message').textContent = 'Correct choice';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = hiddenNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  }
};
// Functions-02
const y = () => {
  score = 20;
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
};

// let userInput = document.querySelector('.guess').value;
document.querySelector('.check').addEventListener('click', x);
document.querySelector('.again').addEventListener('click', y);
