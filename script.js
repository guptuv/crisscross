var currentPlayer = 'X';
var cells = document.getElementsByClassName('cell');
var userCounter = document.getElementById('user-counter');
var counterKey = 'userCounter';

function initializeCounter() {
  if (!localStorage.getItem(counterKey)) {
    localStorage.setItem(counterKey, '0');
  }
}

function incrementCounter() {
  var count = parseInt(localStorage.getItem(counterKey));
  count++;
  localStorage.setItem(counterKey, count.toString());
}

function updateCounterDisplay() {
  var count = parseInt(localStorage.getItem(counterKey));
  userCounter.innerHTML = 'Number of users played till now: ' + count;
}

function makeMove(cellIndex) {
  if (cells[cellIndex].innerHTML === '') {
    cells[cellIndex].innerHTML = currentPlayer;
    cells[cellIndex].classList.add(currentPlayer);

    if (checkWin(currentPlayer)) {
      alert(currentPlayer + ' wins!');
      resetGame();
      incrementCounter();
      updateCounterDisplay();
      return;
    }

    if (checkDraw()) {
      alert('It\'s a draw!');
      resetGame();
      incrementCounter();
      updateCounterDisplay();
      return;
    }

    currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
  }
}

function checkWin(player) {
  var winningCombinations = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
  ];

  for (var i = 0; i < winningCombinations.length; i++) {
    var [a, b, c] = winningCombinations[i];
    if (
      cells[a].innerHTML === player &&
      cells[b].innerHTML === player &&
      cells[c].innerHTML === player
    ) {
      return true;
    }
  }

  return false;
}

function checkDraw() {
  for (var i = 0; i < cells.length; i++) {
    if (cells[i].innerHTML === '') {
      return false;
    }
  }
  return true;
}

function resetGame() {
  for (var i = 0; i < cells.length; i++) {
    cells[i].innerHTML = '';
    cells[i].classList.remove('X', 'O');
  }
  currentPlayer = 'X';
}

initializeCounter();
updateCounterDisplay();
