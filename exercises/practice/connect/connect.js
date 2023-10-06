//
// This is only a SKELETON file for the 'Connect' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Board {
  constructor(board) {
    this.board = board.split('\n').map(row => row.trim()).join('\n');
  }
  }

  winner() {
    const rows = this.board.split('\n').map(row => row.trim());
    const size = rows.length;

    const visited = new Set();
    const queue = [];

    // Check if a player has reached the opposite side
    const isPlayerWin = (player, row, col) => {
      if (player === 'O' && col === size - 1) {
        return true;
      }
      if (player === 'X' && row === size - 1) {
        return true;
      }
      return false;
    };

    // Add the starting positions to the queue
    for (let col = 0; col < size; col++) {
      if (rows[0][col] === 'O') {
        queue.push([0, col]);
      }
      if (rows[col][0] === 'X') {
        queue.push([col, 0]);
      }
    }

    // Perform breadth-first search
    while (queue.length > 0) {
      const [row, col] = queue.shift();
      const player = rows[row][col];

      if (visited.has(`${row},${col}`)) {
        continue;
      }
      visited.add(`${row},${col}`);

      // Check if the player has reached the opposite side
      if (isPlayerWin(player, row, col)) {
        return player;
      }

      // Add adjacent positions to the queue
      const adjPositions = [
        [row - 1, col],
        [row + 1, col],
        [row, col - 1],
        [row, col + 1],
        [row - 1, col + 1],
        [row + 1, col - 1],
      ];
      for (const [adjRow, adjCol] of adjPositions) {
        if (
          adjRow >= 0 &&
          adjRow < size &&
          adjCol >= 0 &&
          adjCol < size &&
          rows[adjRow][adjCol] === player
        ) {
          queue.push([adjRow, adjCol]);
        }
      }
    }

    // No winner
    return '';
  }
}
