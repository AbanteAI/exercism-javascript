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
      throw new Error("Queens cannot share the same position");
    }
    this.black = [blackRow, blackColumn];
    this.white = [whiteRow, whiteColumn];
  }

  toString() {
    let board = "";
    for (let row = 0; row < 8; row++) {
      for (let col = 0; col < 8; col++) {
        if (this.black[0] === row && this.black[1] === col) {
          board += "B";
        } else if (this.white[0] === row && this.white[1] === col) {
          board += "W";
        } else {
          board += "_";
        }
        if (col < 7) {
          board += " ";
        }
      }
      if (row < 7) {
        board += "\n";
      }
    }
    return board;
  }

  get canAttack() {
    const rowDiff = Math.abs(this.black[0] - this.white[0]);
    const colDiff = Math.abs(this.black[1] - this.white[1]);
    return (
      this.black[0] === this.white[0] ||
      this.black[1] === this.white[1] ||
      rowDiff === colDiff
    );
  }
}
