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
      throw new Error('Queens cannot share the same space');
    }

    this.black = [blackRow, blackColumn];
    this.white = [whiteRow, whiteColumn];
    this.board = this.generateBoard();
  }

  generateBoard() {
    const board = Array(8).fill(null).map(() => Array(8).fill('_'));
    board[this.white[0]][this.white[1]] = 'W';
    board[this.black[0]][this.black[1]] = 'B';
    return board;
  }

  toString() {
    return this.board.map(row => row.join(' ')).join('\n') + '\n';
  }

  get canAttack() {
    const [blackRow, blackColumn] = this.black;
    const [whiteRow, whiteColumn] = this.white;
    
    const sameRow = blackRow === whiteRow;
    const sameColumn = blackColumn === whiteColumn;
    const sameDiagonal = Math.abs(blackRow - whiteRow) === Math.abs(blackColumn - whiteColumn);

    return sameRow || sameColumn || sameDiagonal;
  }
}
