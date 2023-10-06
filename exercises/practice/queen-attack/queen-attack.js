// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [],
    white: [whiteRow, whiteColumn] = [],
  } = {}) {
    if (blackRow === whiteRow && blackColumn === whiteColumn) {
      throw new Error('Queens cannot share the same position');
    }

    this.blackRow = blackRow || 7;
    this.blackColumn = blackColumn || 3;
    this.whiteRow = whiteRow || 0;
    this.whiteColumn = whiteColumn || 3;
  }

  toString() {
    let board = Array.from({ length: 8 }, () => Array(8).fill('_ '));

    board[this.blackRow][this.blackColumn] = 'B ';
    board[this.whiteRow][this.whiteColumn] = 'W ';

    return board.map(row => row.join('').trim()).join('\n');
  }

  get canAttack() {
    return (
      this.blackRow === this.whiteRow ||
      this.blackColumn === this.whiteColumn ||
      Math.abs(this.blackRow - this.whiteRow) ===
        Math.abs(this.blackColumn - this.whiteColumn)
    );
  }
  }
}
