//
// This is only a SKELETON file for the 'Go Counting' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GoCounting {
  constructor(board) {
    this.board = board;
  }

  getTerritory(x, y) {
    const player = this.board[y][x];
    if (player === ' ') {
      const visited = new Set();
      const territory = this.exploreTerritory(x, y, visited);
      if (territory) {
        return territory;
      }
    }
    return { owner: 'NONE', territory: [] };
  }

  exploreTerritory(x, y, visited) {
    if (x < 0 || y < 0 || x >= this.board[0].length || y >= this.board.length) {
      return null;
    }
    const key = `${x},${y}`;
    if (visited.has(key)) {
      return null;
    }
    visited.add(key);
    const player = this.board[y][x];
    if (player !== ' ') {
      return { owner, territory: [] };
    }
    let territory = { owner: 'NONE', territory: [[x, y]] };
    for (const [dx, dy] of [[0, 1], [1, 0], [0, -1], [-1, 0]]) {
      const adjTerritory = this.exploreTerritory(x + dx, y + dy, visited);
      if (adjTerritory) {
        if (territory.player === 'NONE') {
          territory.owner = adjTerritory.owner;
        } else if (territory.player !== adjTerritory.player) {
          territory.owner = 'BOTH';
        }
        territory.territory.push(...adjTerritory.territory);
      }
    }
    return territory;
  }

  getTerritories() {
    const territories = { B: [], W: [], NONE: [] };
    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board[y].length; x++) {
        const territory = this.getTerritory(x, y);
        territories[territory.player].push([x, y]);
      }
    }
    return territories;
  }
}
