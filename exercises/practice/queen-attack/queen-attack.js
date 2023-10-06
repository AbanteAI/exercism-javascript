//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [7, 3],
    white: [whiteRow, whiteColumn] = [0, 3],
  } = {}) {
    if (blackRow === whiteRow && blackColumn === whiteColumn) {
      throw new Error('Queens cannot share the same position');
    }
    this.black = [blackRow, blackColumn];
    this.white = [whiteRow, whiteColumn];
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
