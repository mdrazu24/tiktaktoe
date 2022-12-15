const calculateWinner = (board) => {
  // check for horizontal wins
  for (let i = 0; i < rows; i++) {
    for (let j = 0; j <= cols - 5; j++) {
      let player = board[i][j];
      if (player === 0) continue;

      let isWinner = true;
      for (let k = 1; k < 5; k++) {
        if (board[i][j + k] !== player) {
          isWinner = false;
          break;
        }
      }

      if (isWinner) return player;
    }
  }

  // check for vertical wins
  for (let i = 0; i <= rows - 5; i++) {
    for (let j = 0; j < cols; j++) {
      let player = board[i][j];
      if (player === 0) continue;

      let isWinner = true;
      for (let k = 1; k < 5; k++) {
        if (board[i + k][j] !== player) {
          isWinner = false;
          break;
        }
      }

      if (isWinner) return player;
    }
  }

  // check for diagonal wins (top-left to bottom-right)
  for (let i = 0; i <= rows - 5; i++) {
    for (let j = 0; j <= cols - 5; j++) {
      let player = board[i][j];
      if (player === 0) continue;

      let isWinner = true;
      for (let k = 1; k < 5; k++) {
        if (board[i + k][j + k] !== player) {
          isWinner = false;
          break;
        }
      }

      if (isWinner) return player;
    }
  }

  // check for diagonal wins (bottom-left to top-right)
  for (let i = rows - 1; i >= 4; i--) {
    for (let j = 0; j <= cols - 5; j++) {
      let player = board[i][j];
      if (player === 0) continue;

      let isWinner = true;
      for (let k = 1; k < 5; k++) {
        if (board[i - k][j + k] !== player) {
          isWinner = false;
          break;
        }
      }

      if (isWinner) return player;
    }
}
}