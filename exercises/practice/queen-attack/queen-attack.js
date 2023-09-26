//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [],
    white: [whiteRow, whiteColumn] = [],
  } = {}) {
export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [],
    white: [whiteRow, whiteColumn] = [],
  } = {}) {
    this.black = [blackRow, blackColumn];
    this.white = [whiteRow, whiteColumn];
    if (blackRow === whiteRow && blackColumn === whiteColumn) {
      throw new Error('Queens cannot occupy the same position');
    }
  }

  toString() {
    const board = Array.from({ length: 8 }, () => Array(8).fill('_'));
    const [blackRow, blackColumn] = this.black;
    const [whiteRow, whiteColumn] = this.white;
    board[blackRow][blackColumn] = 'B';
    board[whiteRow][whiteColumn] = 'W';
    return board.map(row => row.join(' ')).join('\n');
  }

  get canAttack() {
    const [blackRow, blackColumn] = this.black;
    const [whiteRow, whiteColumn] = this.white;
    return (
      blackRow === whiteRow ||
      blackColumn === whiteColumn ||
      Math.abs(blackRow - whiteRow) === Math.abs(blackColumn - whiteColumn)
    );
  }
}
}
