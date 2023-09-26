//
// This is only a SKELETON file for the 'Go Counting' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class GoCounting {
constructor(board) {
    this.board = board;
}

    const territory = [];
    this.calculateTerritory(x, y, territory);
    return {
        owner: "BLACK",
        territory: territory.map(coord => coord.split(",").map(Number))
    };
}

getTerritories() {
    const territories = [];
    for (let x = 0; x < this.board.length; x++) {
        for (let y = 0; y < this.board[x].length; y++) {
            if (this.board[x][y] === " ") {
                const territory = [];
                this.calculateTerritory(x, y, territory);
                territories.push(territory);
            }
        }
    }
    return territories;
}

calculateTerritory(x, y, territory) {
    if (x < 0 || x >= this.board.length || y < 0 || y >= this.board[x].length) {
        return;
    }
    if (this.board[x][y] !== " " || territory.includes(`${x},${y}`)) {
        return;
    }
    territory.push(`${x},${y}`);
    this.calculateTerritory(x - 1, y, territory);
    this.calculateTerritory(x + 1, y, territory);
    this.calculateTerritory(x, y - 1, territory);
    this.calculateTerritory(x, y + 1, territory);
}
}
