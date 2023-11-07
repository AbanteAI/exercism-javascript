//
// This is only a SKELETON file for the 'Go Counting' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GoCounting {
  constructor(board) {
    this.board = board.map(row => row.split(''));
  }

    getTerritory(x, y) {
        if (this.board[y][x] !== ' ') {
            return { owner: 'NONE', territory: [] };
        }

        const territory = [];
        const visited = new Set();
        const checkStack = [[x, y]];
        let owner = 'NONE';

        while (checkStack.length > 0) {
            const [currentX, currentY] = checkStack.pop();
            const key = `${currentX},${currentY}`;

            if (visited.has(key)) continue;
            visited.add(key);
            territory.push([currentX, currentY]);

            const neighbors = [
                [currentX - 1, currentY],
                [currentX + 1, currentY],
                [currentX, currentY - 1],
                [currentX, currentY + 1],
            ];

            for (const [nextX, nextY] of neighbors) {
                if (nextX >= 0 && nextX < this.board[0].length && nextY >= 0 && nextY < this.board.length) {
                    const cell = this.board[nextY][nextX];
                    if (cell === ' ') {
                        checkStack.push([nextX, nextY]);
                    } else if (owner === 'NONE') {
                        owner = cell === 'B' ? 'BLACK' : 'WHITE';
                    } else if ((cell === 'B' && owner === 'WHITE') || (cell === 'W' && owner === 'BLACK')) {
                        owner = 'NONE';
                        break;
                    }
                }
            }
        }

        if (owner !== 'NONE') {
            territory.forEach(([currentX, currentY]) => {
                if (this.board[currentY][currentX] !== ' ') {
                    owner = 'NONE';
                }
            });
        }

        return { owner, territory };
    }
  }

  getTerritories() {
    // Implementation of getTerritories function will go here
    // Placeholder code below, replace with actual implementation
    return {
        territoryBlack: [],
        territoryWhite: [],
        territoryNone: []
    };
  }
}
