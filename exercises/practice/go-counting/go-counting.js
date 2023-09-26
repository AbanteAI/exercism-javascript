//
// This is only a SKELETON file for the 'Go Counting' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GoCounting {
  constructor(board) {
    this.board = board;
  }
  }

  getTerritory(x, y) {
    if (this.board[x][y] !== ' ') {
      return [];
    }
    const territory = [];
    const visited = new Set();
    this.exploreTerritory(x, y, territory, visited);
    return territory;
  }
  }

  getTerritories() {
    const territories = [];
    const visited = new Set();
    for (let x = 0; x < this.board.length; x++) {
      for (let y = 0; y < this.board[x].length; y++) {
        if (this.board[x][y] === ' ' && !visited.has(`${x},${y}`)) {
          const territory = [];
          this.exploreTerritory(x, y, territory, visited);
          territories.push(territory);
        }
      }
    }
    return territories;
    }
    return territories;
  }
  }
}
