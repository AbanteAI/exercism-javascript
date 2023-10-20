//
// This is only a SKELETON file for the 'Go Counting' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GoCounting {
  constructor(board) {
    this.board = board;
  }

  getTerritory(x, y) {
    const territory = [];
    const visited = new Set();
    const player = this.board[y][x];

    const dfs = (x, y) => {
      if (x < 0 || x >= this.board[0].length || y < 0 || y >= this.board.length) {
        return;
      }

      if (visited.has(`${x},${y}`)) {
        return;
      }

      visited.add(`${x},${y}`);

      if (this.board[y][x] === player || this.board[y][x] === ' ') {
        territory.push([x, y]);
        dfs(x - 1, y);
        dfs(x + 1, y);
        dfs(x, y - 1);
        dfs(x, y + 1);
      }
    };

    dfs(x, y);

    return {
      owner: player === 'B' ? 'WHITE' : 'BLACK',
      territory: territory,
    };
  }

  getTerritories() {
    const territoryBlack = [];
    const territoryWhite = [];
    const territoryNone = [];
    const visited = new Set();

    const dfs = (x, y) => {
      if (x < 0 || x >= this.board[0].length || y < 0 || y >= this.board.length) {
        return;
      }

      if (visited.has(`${x},${y}`)) {
        return;
      }

      visited.add(`${x},${y}`);

      if (this.board[y][x] === 'B') {
        territoryBlack.push([x, y]);
      } else if (this.board[y][x] === 'W') {
        territoryWhite.push([x, y]);
      } else {
        territoryNone.push([x, y]);
      }

      dfs(x - 1, y);
      dfs(x + 1, y);
      dfs(x, y - 1);
      dfs(x, y + 1);
    };

    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board[0].length; x++) {
        if (!visited.has(`${x},${y}`)) {
          dfs(x, y);
        }
      }
    }

    return {
      territoryBlack: territoryBlack,
      territoryWhite: territoryWhite,
      territoryNone: territoryNone,
    };
  }
}
