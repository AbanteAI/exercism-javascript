//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [],
    white: [whiteRow, whiteColumn] = [],
  } = {}) {
    this.blackRow = blackRow;
    this.blackColumn = blackColumn;
    this.whiteRow = whiteRow;
    this.whiteColumn = whiteColumn;
  }

  toString() {
    const chessboard = [];
    for (let row = 0; row < 8; row++) {
      const rowArray = [];
      for (let column = 0; column < 8; column++) {
        if (row === this.blackRow && column === this.blackColumn) {
          rowArray.push('B');
        } else if (row === this.whiteRow && column === this.whiteColumn) {
          rowArray.push('W');
        } else {
          rowArray.push('_');
        }
      }
      chessboard.push(rowArray.join(' '));
    }
    return chessboard.join('\n');
  }

  get canAttack() {
    return (
      this.blackRow === this.whiteRow ||
      this.blackColumn === this.whiteColumn ||
      Math.abs(this.blackRow - this.whiteRow) === Math.abs(this.blackColumn - this.whiteColumn)
    );
  }
}
