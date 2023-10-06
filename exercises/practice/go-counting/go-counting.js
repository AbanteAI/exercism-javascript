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
    const owner = this.board[y][x] === 'B' ? 'BLACK' : 'WHITE';
    const queue = [[x, y]];

    while (queue.length > 0) {
      const [cx, cy] = queue.shift();
      if (visited.has(`${cx},${cy}`)) continue;
      visited.add(`${cx},${cy}`);
      territory.push([cx, cy]);

      const neighbors = [
        [cx - 1, cy],
        [cx + 1, cy],
        [cx, cy - 1],
        [cx, cy + 1],
      ];

      for (const [nx, ny] of neighbors) {
        if (nx >= 0 && nx < this.board[0].length && ny >= 0 && ny < this.board.length) {
          const cell = this.board[ny][nx];
          if (cell === ' ' || cell === owner) {
            queue.push([nx, ny]);
          }
        }
      }
    }

    return { owner, territory };
  }

  getTerritories() {
    const territoryBlack = [];
    const territoryWhite = [];
    const territoryNone = [];
    const visited = new Set();

    for (let y = 0; y < this.board.length; y++) {
      for (let x = 0; x < this.board[0].length; x++) {
        if (visited.has(`${x},${y}`)) continue;
        visited.add(`${x},${y}`);

        const cell = this.board[y][x];
        if (cell === 'B' || cell === 'W') {
          const { owner, territory } = this.getTerritory(x, y);
          if (owner === 'BLACK') {
            territoryBlack.push(...territory);
          } else {
            territoryWhite.push(...territory);
          }
        } else {
          territoryNone.push([x, y]);
        }
      }
    }

    return { territoryBlack, territoryWhite, territoryNone };
  }

  getTerritory(x, y) {
    throw new Error('Remove this statement and implement this function');
  }

  getTerritories() {
    throw new Error('Remove this statement and implement this function');
  }
}
