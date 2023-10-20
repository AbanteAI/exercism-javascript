//
// This is only a SKELETON file for the 'Queen Attack' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class QueenAttack {
  constructor({
    black: [blackRow, blackColumn] = [0, 3],
    white: [whiteRow, whiteColumn] = [7, 3],
  } = {}) {
    if (blackRow === whiteRow && blackColumn === whiteColumn) {
      throw new Error('Queens cannot share the same position');
    }
    this.black = [blackRow, blackColumn];
    this.white = [whiteRow, whiteColumn];
  }

  toString() {
    let board = Array(8)
      .fill('_')
      .map(() => Array(8).fill('_'));
    board[this.black[0]][this.black[1]] = 'B';
    board[this.white[0]][this.white[1]] = 'W';
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
