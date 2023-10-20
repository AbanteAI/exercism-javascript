//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const countMines = (board, row, col) => {
  const rows = [-1, -1, -1, 0, 0, 1, 1, 1];
  const cols = [-1, 0, 1, -1, 1, -1, 0, 1];
  let count = 0;

  for (let i = 0; i < 8; i++) {
    const newRow = row + rows[i];
    const newCol = col + cols[i];

    if (
      newRow >= 0 &&
      newRow < board.length &&
      newCol >= 0 &&
      newCol < board[0].length &&
      board[newRow][newCol] === '*'
    ) {
      count++;
    }
  }

  return count;
};

const annotate = (input) => {
  const board = input.map((row) => row.split(''));
  const result = [];

  for (let row = 0; row < board.length; row++) {
    const newRow = [];

    for (let col = 0; col < board[row].length; col++) {
      if (board[row][col] === '*') {
        newRow.push('*');
      } else {
        const mines = countMines(board, row, col);
        newRow.push(mines === 0 ? ' ' : mines.toString());
      }
    }

    result.push(newRow.join(''));
  }

  return result;
};
module.exports = {
  annotate,
};
