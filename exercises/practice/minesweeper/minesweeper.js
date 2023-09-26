//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  const board = parseInput(input);
  annotateBoard(board);
  return stringifyBoard(board);
};

function parseInput(input) {
  return input.map((row) => row.split(''));
}

  if (rows === 0 || cols === 0) {
    return;
  }
  const rows = board.length;
  const cols = board[0].length;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === ' ') {
        const count = countAdjacentMines(board, row, col);
        if (count > 0) {
          board[row][col] = count.toString();
        }
      }
    }
  }
}

function countAdjacentMines(board, row, col) {
  let count = 0;
  const directions = [
    [-1, -1], [-1, 0], [-1, 1],
    [0, -1],           [0, 1],
    [1, -1], [1, 0], [1, 1]
  ];

  for (const [dx, dy] of directions) {
    const newRow = row + dx;
    const newCol = col + dy;
    if (isValidCell(board, newRow, newCol) && board[newRow][newCol] === '*') {
      count++;
    }
  }

  return count;
}

function isValidCell(board, row, col) {
  const rows = board.length;
  const cols = board[0].length;
  return row >= 0 && row < rows && col >= 0 && col < cols;
}

function stringifyBoard(board) {
  return board.map((row) => row.join('')).join('\n');
}
