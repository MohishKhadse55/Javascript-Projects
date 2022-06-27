'use strict';
/* 

// select the whole element from the doc
// whenever the . operator is used the flow of executino is from the left to right
// The textContent property of the Node interface represents the text content of the node and its descendants.
console.log(document.querySelector('.message').textContent);

// set the content of the element

document.querySelector('.message').textContent = 'Correct Number';
document.querySelector('.number').textContent = 13;

document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 23;
console.log(document.querySelector('.guess').value);

*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;

const displaymsg = function (message) {
  document.querySelector('.message').textContent = message;
};

// the function is a value and if a function is a value then we can pass it to the another function
// as a parameter just like other value
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log('guess');
  // if guess is empty then it returns the 0 value and the 0 is a falsely value
  // so in the if conditional block it gets cvonverted to the boolean
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔ No number';
    displaymsg('⛔ No number');
  } else if (guess == secretNumber) {
    // document.querySelector('.message').textContent = '👍correct number';
    displaymsg('👍correct number');
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem  ';
    document.querySelector('.number').textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    if (score > 0) {
      // document.querySelector('.message').textContent =
      displaymsg(guess > secretNumber ? ' 📈 Too High !' : ' 📈 Too Low !');
      // guess > secretNumber ? ' 📈 Too High !' : ' 📈 Too Low !';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = '💥 you lost the game';
      displaymsg('💥 you lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  // location.reload();    // this is one thing which you can do but it will give bug in highscore
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  displaymsg('Start guessing');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = 'black';
  document.querySelector('.number').style.width = '15rem';
});
