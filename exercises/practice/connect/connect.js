//
// This is only a SKELETON file for the 'Connect' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Board {
  constructor(input) {
    this.board = input.map(row => row.split(''));
  }

  winner() {
    const numRows = this.board.length;
    const numCols = this.board[0].length;

    const dfs = (row, col, player) => {
      if (row < 0 || col < 0 || row >= numRows || col >= numCols || this.board[row][col] !== player) {
        return false;
      }

      this.board[row][col] = '.';
      return (
        (player === 'O' && row === numRows - 1) ||
        (player === 'X' && col === numCols - 1) ||
        dfs(row - 1, col, player) ||
        dfs(row + 1, col, player) ||
        dfs(row, col - 1, player) ||
        dfs(row, col + 1, player) ||
        dfs(row - 1, col - 1, player) ||
        dfs(row + 1, col + 1, player)
      );
    };

    for (let row = 0; row < numRows; row++) {
      if (dfs(row, 0, 'X')) {
        return 'X';
      }
    }

    for (let col = 0; col < numCols; col++) {
      if (dfs(0, col, 'O')) {
        return 'O';
      }
    }

    return '';
  }
}
