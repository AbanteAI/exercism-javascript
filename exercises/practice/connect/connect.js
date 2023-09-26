//
// This is only a SKELETON file for the 'Connect' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Board {
  constructor(board) {
    this.board = board;
    ;
  }
  }

  winner() {
    const rows = this.board.length;
    const cols = this.board[0].length;

    // Check if O connects top and bottom
    for (let col = 0; col < cols; col++) {
      if (this.board[0][col] === 'O' && this.dfs(0, col, 'O', new Set())) {
        return 'O';
      }
    }

    // Check if X connects left and right
    for (let row = 0; row < rows; row++) {
      if (this.board[row][0] === 'X' && this.dfs(row, 0, 'X', new Set())) {
        return 'X';
      }
    }

    return '';
  }

  dfs(row, col, player, visited) {
    const rows = this.board.length;
    const cols = this.board[0].length;

    if (
      row < 0 ||
      row >= rows ||
      col < 0 ||
      col >= cols ||
      this.board[row][col] !== player ||
      visited.has(`${row},${col}`)
    ) {
      return false;
    }

    if (player === 'O' && row === rows - 1) {
      return true;
    }

    if (player === 'X' && col === cols - 1) {
      return true;
    }

    visited.add(`${row},${col}`);

    return (
      this.dfs(row - 1, col, player, visited) ||
      this.dfs(row + 1, col, player, visited) ||
      this.dfs(row, col - 1, player, visited) ||
      this.dfs(row, col + 1, player, visited) ||
      this.dfs(row - 1, col + 1, player, visited) ||
      this.dfs(row + 1, col - 1, player, visited)
    );
  }
  }
}
