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
        const owner = this.exploreTerritory(x, y, visited, territory);

        return {
            owner,
            territory,
        };
    }

    exploreTerritory(x, y, visited, territory) {
        const key = `${x},${y}`;

        if (visited.has(key)) {
            return 'NONE';
        }

        visited.add(key);

        if (x < 0 || y < 0 || x >= this.board.length || y >= this.board[x].length) {
            return 'NONE';
        }

        const cell = this.board[x][y];

        if (cell === 'B' || cell === 'W') {
            return cell;
        }

        territory.push([x, y]);

        const neighbors = [
            this.exploreTerritory(x - 1, y, visited, territory),
            this.exploreTerritory(x + 1, y, visited, territory),
            this.exploreTerritory(x, y - 1, visited, territory),
            this.exploreTerritory(x, y + 1, visited, territory),
        ];

        const owner = neighbors.find((neighbor) => neighbor !== 'NONE') || 'NONE';

        return neighbors.every((neighbor) => neighbor === owner) ? owner : 'NONE';
    }

    getTerritories() {
        const territories = {
            territoryBlack: [],
            territoryWhite: [],
            territoryNone: [],
        };

        for (let x = 0; x < this.board.length; x++) {
            for (let y = 0; y < this.board[x].length; y++) {
                const { owner, territory } = this.getTerritory(x, y);

                if (owner !== 'NONE') {
                    territories[`territory${owner}`].push(...territory);
                }
            }
        }

        return territories;
    }