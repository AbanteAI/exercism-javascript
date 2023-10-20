//
// This is only a SKELETON file for the 'Go Counting' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GoCounting {
  constructor(board) {
    this.board = board;
  }

  getTerritory(x, y) {
    const visited = new Set();
    const territory = [];
    const owner = this.findTerritory(x, y, visited, territory);
    return { owner, territory };
  }
  findTerritory(x, y, visited, territory) {
    const key = `${x},${y}`;
    if (visited.has(key)) return null;
    visited.add(key);

    const cell = this.board[y][x];
    if (cell === 'B' || cell === 'W') return cell;

    territory.push([x, y]);

    const neighbors = [
      [x - 1, y],
      [x + 1, y],
      [x, y - 1],
      [x, y + 1],
    ];

    let owner = null;
    for (const [nx, ny] of neighbors) {
      if (nx < 0 || nx >= this.board[0].length || ny < 0 || ny >= this.board.length) continue;
      const neighborOwner = this.findTerritory(nx, ny, visited, territory);
      if (neighborOwner === null) continue;
      if (owner === null) owner = neighborOwner;
      if (owner !== neighborOwner) return null;
    }

    return owner;
  }
  }
  getTerritories() {
    const territoryBlack = [];
    const territoryWhite = [];
    const territoryNone = [];

    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board[y].length; x++) {
        const { owner, territory } = this.getTerritory(x, y);
        if (owner === 'B') territoryBlack.push(...territory);
        else if (owner === 'W') territoryWhite.push(...territory);
        else territoryNone.push(...territory);
      }
    }

    return { territoryBlack, territoryWhite, territoryNone };
  }
    // Return the territories object as described in the instructions
  }
}
