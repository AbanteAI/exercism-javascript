//
// This is only a SKELETON file for the 'Go Counting' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GoCounting {
  constructor(board) {
    this.board = board.map(row => row.trim().split(''));
    this.rows = this.board.length;
    this.cols = this.board[0].length;
    this.visited = Array.from({ length: this.rows }, () => Array(this.cols).fill(false));
    this.territory = Array.from({ length: this.rows }, () => Array(this.cols).fill(null));
    this.directions = [[-1, 0], [1, 0], [0, -1], [0, 1]];
  }

  getTerritory(x, y) {
    this.validateCoordinates(x, y);
    if (this.territory[x][y] !== null) {
      return this.territory[x][y];
    }
    const owner = this.board[x][y];
    const territory = [];
    this.exploreTerritory(x, y, owner, territory);
    this.territory[x][y] = { owner, territory };
    return { owner, territory };
  }

  getTerritories() {
    const territoryBlack = [];
    const territoryWhite = [];
    const territoryNone = [];
    for (let x = 0; x < this.rows; x++) {
      for (let y = 0; y < this.cols; y++) {
        if (this.territory[x][y] === null) {
          const { owner, territory } = this.getTerritory(x, y);
          if (owner === 'BLACK') {
            territoryBlack.push(...territory);
          } else if (owner === 'WHITE') {
            territoryWhite.push(...territory);
          } else {
            territoryNone.push(...territory);
          }
        }
      }
    }
    return { territoryBlack, territoryWhite, territoryNone };
  }

  validateCoordinates(x, y) {
    if (x < 0 || x >= this.rows || y < 0 || y >= this.cols) {
      throw new Error('Invalid coordinates');
    }
  }

  exploreTerritory(x, y, owner, territory) {
    if (this.visited[x][y]) {
      return;
    }
    this.visited[x][y] = true;
    if (this.board[x][y] === ' ') {
      territory.push([x, y]);
      for (const [dx, dy] of this.directions) {
        const nx = x + dx;
        const ny = y + dy;
        if (nx >= 0 && nx < this.rows && ny >= 0 && ny < this.cols && this.board[nx][ny] === owner) {
          this.exploreTerritory(nx, ny, owner, territory);
        }
      }
    }
  }
}
