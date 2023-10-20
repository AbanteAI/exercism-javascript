//
// This is only a SKELETON file for the 'Connect' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Board {
  constructor(board) {
    this.board = board.map(row => row.split(''));
  }

  winner() {
    const numRows = this.board.length;
    const numCols = this.board[0].length;

    const directions = [
      [1, 0], [1, -1], [0, -1], [-1, 0], [-1, 1], [0, 1]
    ];

    const search = (row, col, player, visited) => {
      if (row < 0 || row >= numRows || col < 0 || col >= numCols || visited.has(`${row},${col}`) || this.board[row][col] !== player) {
        return false;
      }

      if (player === 'O' && row === numRows - 1) {
        return true;
      }

      if (player === 'X' && col === numCols - 1) {
        return true;
      }

      visited.add(`${row},${col}`);

      for (const [dx, dy] of directions) {
        if (search(row + dx, col + dy, player, visited)) {
          return true;
        }
      }

      return false;
    };

    for (let row = 0; row < numRows; row++) {
      if (search(row, 0, 'X', new Set())) {
        return 'X';
      }
    }

    for (let col = 0; col < numCols; col++) {
      if (search(0, col, 'O', new Set())) {
        return 'O';
      }
    }

    return '';
  }
}
