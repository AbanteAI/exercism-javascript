//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  const board = input.map(row => row.split(''));
  const rows = board.length;
  const cols = Math.max(...board.map(row => row.length));

  const isMine = (row, col) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return false;
    }
    return board[row][col] === '*';
  };

  const countAdjacentMines = (row, col) => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        if (isMine(row + i, col + j)) {
          count++;
        }
      }
    }
    return count;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === ' ') {
        const count = countAdjacentMines(row, col);
        if (count > 0) {
          board[row][col] = count.toString();
        }
      }
    }
  }

  return board.map(row => row.join(''));
};
  const cols = board[0].length;

  const isMine = (row, col) => {
    if (row < 0 || row >= rows || col < 0 || col >= cols) {
      return false;
    }
    return board[row][col] === '*';
  };

  const countAdjacentMines = (row, col) => {
    let count = 0;
    for (let i = -1; i <= 1; i++) {
      for (let j = -1; j <= 1; j++) {
        if (i === 0 && j === 0) continue;
        if (isMine(row + i, col + j)) {
          count++;
        }
      }
    }
    return count;
  };

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === ' ') {
        const count = countAdjacentMines(row, col);
        if (count > 0) {
          board[row][col] = count.toString();
        }
      }
    }
  }

  return board.map(row => row.join(''));
};
