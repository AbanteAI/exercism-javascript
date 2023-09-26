//
// This is only a SKELETON file for the 'Connect' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Board {
    constructor(board) {
      this.board = board;
    }
  }

    winner() {
      const numRows = this.board.length;
      const numCols = this.board[0].length;
      const directions = [
        [0, 1], [1, 1], [1, 0],
        [0, -1], [-1, -1], [-1, 0]
      ];

      const dfs = (row, col, player, visited) => {
        if (row < 0 || col < 0 || row >= numRows || col >= numCols) return false;
        if (this.board[row][col] !== player || visited[row][col]) return false;

        visited[row][col] = true;

        if (player === 'X' && col === numCols - 1) return true;
        if (player === 'O' && row === numRows - 1) return true;

        for (const [dx, dy] of directions) {
          if (dfs(row + dx, col + dy, player, visited)) return true;
        }

        return false;
      };

      for (let row = 0; row < numRows; row++) {
        for (let col = 0; col < numCols; col++) {
          const player = this.board[row][col];
          if (player === 'X' || player === 'O') {
            const visited = Array.from({ length: numRows }, () => Array(numCols).fill(false));
            if (dfs(row, col, player, visited)) return player;
          }
        }
      }

      return "";
    }
  }
}
