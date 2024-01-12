let currentPlayer = 'X';
let gameActive = true;
let board = ['', '', '', '', '', '', '', '', ''];

function makeMove(event) {
  const clickedCell = event.target;
  const cellIndex = Array.from(clickedCell.parentNode.children).indexOf(clickedCell);

  if (gameActive && board[cellIndex] === '') {
    board[cellIndex] = currentPlayer;

    if (checkWinner()) {
      document.getElementById('game-status').textContent = `Player ${currentPlayer} wins!`;
      gameActive = false;
    } else if (checkTie()) {
      document.getElementById('game-status').textContent = "It's a tie!";
      gameActive = false;
    } else {
      currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
    }

    updateUI();
  }
}

function checkWinner() {
  const winCombinations = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // Rows
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // Columns
    [0, 4, 8], [2, 4, 6]             // Diagonals
  ];

  for (const combination of winCombinations) {
    const [a, b, c] = combination;

    if (board[a] !== '' && board[a] === board[b] && board[b] === board[c]) {
      return true;
    }
  }

  return false;
}

function checkTie() {
  return board.every(cell => cell !== '');
}

function resetGame() {
  currentPlayer = 'X';
  gameActive = true;
  board = ['', '', '', '', '', '', '', '', ''];
  document.getElementById('game-status').textContent = '';
  updateUI();
}

function updateUI() {
  const cells = document.querySelectorAll('.block');
  cells.forEach((cell, index) => {
    cell.textContent = board[index];
  });

  
}

function updateUI() {
    const cells = document.querySelectorAll('.block');
    cells.forEach((cell, index) => {
      cell.textContent = board[index];
      cell.classList.toggle('x', board[index] === 'X');
      cell.classList.toggle('o', board[index] === 'O');
    });
}

