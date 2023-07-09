var currentPlayer = 'X';
var cells = document.getElementsByClassName('cell');

function makeMove(cellIndex) {
  if (cells[cellIndex].innerHTML === '') {
    cells[cellIndex].innerHTML = currentPlayer;
    cells[cellIndex].classList.add(currentPlayer);
    
    if (checkWin(currentPlayer)) {
      alert(currentPlayer + ' wins!');
      resetGame();
      return;
    }
    
    if (checkDraw()) {
      alert('It\'s a draw!');
      resetGame();
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
