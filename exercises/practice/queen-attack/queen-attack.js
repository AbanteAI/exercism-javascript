//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [0, 3],
    white: [whiteRow, whiteColumn] = [7, 3],
  } = {}) {
    this.blackRow = blackRow;
    this.blackColumn = blackColumn;
    this.whiteRow = whiteRow;
    this.whiteColumn = whiteColumn;
  }
  }

  toString() {
    let board = '';
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (row === this.blackRow && col === this.blackColumn) {
          board += 'B ';
        } else if (row === this.whiteRow && col === this.whiteColumn) {
          board += 'W ';
        } else {
          board += '_ ';
        }
      }
      board += '\n';
    }
    return board.trim();
  }

  get canAttack() {
    return (
      this.blackRow === this.whiteRow ||
      this.blackColumn === this.whiteColumn ||
      Math.abs(this.blackRow - this.whiteRow) === Math.abs(this.blackColumn - this.whiteColumn)
    );
  }
}
