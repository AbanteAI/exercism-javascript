//
// This is only a SKELETON file for the 'Minesweeper' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const annotate = (input) => {
  if (input.length === 0) {
    return [];
  }

  const rows = input.length;
  const cols = input[0].length;
  const board = input.map(row => row.split(''));

  const isMine = (row, col) => {
    if (row < 0 || col < 0 || row >= rows || col >= cols) {
      return false;
    }
    return board[row][col] === '*';
  };

  const countAdjacentMines = (row, col) => {
    let count = 0;
    for (let i = row - 1; i <= row + 1; i++) {
      for (let j = col - 1; j <= col + 1; j++) {
        if (isMine(i, j)) {
          count++;
        }
      }
    }
    return count;
  };

  const result = [];
  for (let row = 0; row < rows; row++) {
    const rowResult = [];
    for (let col = 0; col < cols; col++) {
      if (board[row][col] === ' ') {
        const mines = countAdjacentMines(row, col);
        rowResult.push(mines > 0 ? mines.toString() : ' ');
      } else {
        rowResult.push(board[row][col]);
      }
    }
    result.push(rowResult.join(''));
  }

  return result;
};
