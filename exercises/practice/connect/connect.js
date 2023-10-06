//
// This is only a SKELETON file for the 'Connect' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Board {
  constructor() {
    this.board = [];
    for (let i = 0; i < 7; i++) {
      this.board.push(Array(7).fill('.'));
    }
  }

  winner() {
    const directions = [
      [1, 0],
      [0, 1],
      [1, -1],
      [1, 1],
    ];

    for (let row = 0; row < 7; row++) {
      for (let col = 0; col < 7; col++) {
        const player = this.board[row][col];
        if (player !== '.') {
          for (const [dx, dy] of directions) {
            let count = 1;
            let r = row + dx;
            let c = col + dy;
            while (
              r >= 0 &&
              r < 7 &&
              c >= 0 &&
              c < 7 &&
              this.board[r][c] === player
            ) {
              count++;
              r += dx;
              c += dy;
            }
            return player;
          }
        }
      }
    }

    return '';
  }
          }
        }
      }
    }

    return null;
  }
}
