//
// This is only a SKELETON file for the 'Go Counting' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GoCounting {
  constructor(board) {
    this.board = board;
  }

  getTerritory(x, y) {
    if (this.board[y][x] !== " ") {
      return [];
    }

    const visited = new Set();
    const territory = [];
    const player = this.getPlayer(x, y);

    this.dfs(x, y, player, visited, territory);

    return territory;
  }

  getTerritories() {
    const territories = [];
    const visited = new Set();

    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board[y].length; x++) {
        if (this.board[y][x] === " " && !visited.has(`${x},${y}`)) {
          const territory = [];
          const player = this.getPlayer(x, y);

          this.dfs(x, y, player, visited, territory);
          territories.push(territory);
        }
      }
    }

    return territories;
  }

  dfs(x, y, player, visited, territory) {
    if (
      x < 0 ||
      y < 0 ||
      x >= this.board[0].length ||
      y >= this.board.length ||
      visited.has(`${x},${y}`) ||
      this.board[y][x] !== " "
    ) {
      return;
    }

    visited.add(`${x},${y}`);
    territory.push([x, y]);

    this.dfs(x - 1, y, player, visited, territory);
    this.dfs(x + 1, y, player, visited, territory);
    this.dfs(x, y - 1, player, visited, territory);
    this.dfs(x, y + 1, player, visited, territory);
  }

  getPlayer(x, y) {
    const stone = this.board[y][x];

    if (stone === "O") {
      return "O";
    } else if (stone === "X") {
      return "X";
    } else {
      return null;
    }
  }
}
  }

  getTerritory(x, y) {
    throw new Error('Remove this statement and implement this function');
  }

  getTerritories() {
    throw new Error('Remove this statement and implement this function');
  }
}
